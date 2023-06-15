import React from "react";

const   Scroll = (props) => {
    console.log({props});
     return(

        
    <div style={{overflowY: 'scroll' , border: '5px solid black' , height: '800px'}}>
         {props.childern}
        
       </div>
    ); 
};


export default Scroll ;