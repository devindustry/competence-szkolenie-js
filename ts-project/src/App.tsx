import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // const add = (a: number, b?:number): number => {
  //   return b ? a + b : a;
  // }

  const add = (...rest: number[]): number => {
    let result: number = 0;
    rest.map(element => {
      result += element;
    });

    return result;
  }

  console.log(add(5));
  console.log(add(5, 5));
  console.log(add(5, 5, 3));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
