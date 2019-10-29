import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import {Welcome} from './components/greet';
import {Message} from './components/message';
import Counter from './components/counter';    // in this counter does not have curly braces as it does not have export in inline 
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';
import ParentComponent from './components/parentComponent';


function App() {
  return (
    <div className="App">
      
      {/* <Greet name ="Prajwal" heroname = "HULK" />
      <Greet name="Dustin" heroname = "DEMEGORGAN" /> */}

      {/* <Welcome name = "prajwal" heroname= "dustin" /> */}

      {/* <Message /> */}

      {/* <Counter /> */}
{/*       
      <FunctionClick />

      <ClassClick />

       */}

      <ParentComponent />
     
    </div>
  );
}

export default App;
