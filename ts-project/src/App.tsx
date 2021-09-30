import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
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
      <Header title="Tytuł strony"/>
    </div>
  );
}

export default App;
