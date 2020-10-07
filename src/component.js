import React from 'react';

function FirstComponent (props){
    return (
      <div>
         <h1>Hello World from First Student : {props.student} </h1>
         <h1>Hello World from Second Student : {props.student} </h1>
         <h1>Hello World from Third Student : {props.student} </h1>

      </div>
    );
}

export default FirstComponent;