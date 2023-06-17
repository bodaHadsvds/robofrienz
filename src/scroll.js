import React from "react";

const   Scroll = (props) => {
    console.log({props});
     return(

        
    <div style={{overflowY: 'scroll' , border: '5px solid green' , height: '800px'}}>
         {props.children}
        
       </div>
    ); 
};


export default Scroll ;