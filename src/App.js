import React, { Component } from "react";
import Cardlist from "./Cardlist";
// import { robots } from "./robots";
import SearchBox from "./searchbox";
import './App.css'
// import { robots } from "./robots";
import Scroll from "./scroll";


class App extends Component {
  
 constructor(){
  super()
  this.state ={
    robots :[] ,
    searchfield : ''
  }


  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=>{
    return  Response.json()

    })
    .then(users=>{
        this.setState({robots:users})
    })

  }

 

 onsearchchange = (event) => { 
   this.setState({searchfield:event.target.value})
 }

  render() {
    const filterdrobots = this.state.robots.filter(robots=> {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
  if(this.state.robots.length === 0)  { return  <h1>loading</h1> 
  }  else {return (
    <div className="tc" > 
    <h1 className="f2"> Robofriends </h1>
    <SearchBox  searchchange={this.onsearchchange}/>
    <Scroll>       <Cardlist robots={filterdrobots} />    </Scroll>
   </div>

   )
 }
  

   
  };
}



export default App ;