// import React , {Component} from "react";
import React from "react";



const Card = ({id,name,email}) => {
    return (
        <div className="  bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?100*100`} alt="johen doe pic"></img>
            <div>
                <h2 > {name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card ;


// class Hello extends Component {
//     render() {
//         return ( 
//         <div>        <h1> Hello world</h1>
//         <p> thank you , it finally works </p>    </div>
//         );
//     }
// }

// export default Hello;