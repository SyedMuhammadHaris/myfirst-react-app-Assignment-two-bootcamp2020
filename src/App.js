import React from 'react';
import './App.css';
import FirstComponent from './component.js'; 

function App() {
  return (
    <div className="App">
     <h1>Hello World Learning React</h1>
     <h1>Hello World Learning  JavaScript Libary</h1>
     <FirstComponent student = "Haris"/>
     <FirstComponent student = "Ahmed"/>
     <FirstComponent student = "Sarim"/>
    </div>
  );
}

export default App;
