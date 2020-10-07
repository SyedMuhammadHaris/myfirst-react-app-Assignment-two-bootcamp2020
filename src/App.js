import React from 'react';
import './App.css';
import FirstComponent from './component.js'; 

function App() {
  return (
    <div className="App">
     <h1>Learning React</h1>
     <h1> Learning  Component And Props In React</h1>
     <hr/>
     <FirstComponent student = "Haris"/>
     <hr/>
     <FirstComponent student = "Ahmed"/>
     <hr/>
     <FirstComponent student = "Sarim"/>
    </div>
  );
}

export default App;
