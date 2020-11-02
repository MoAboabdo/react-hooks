/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');


  const handleCounter = () => setCounter(c => c + 1);
  const handleTitle = () => setTitle('Sting academy');

  useEffect(()=> {
    console.log("inside useEffect 1");
    document.title = title;
    return () =>{
      setTimeout(() => {
        setTitle('');
      }, 1000);
      console.log('cleanup');
    }
  },[title]);

  useEffect(()=>{
    console.log('inside useEffect 2');
    document.title = `You have clicked ${counter} times`;


  },[counter]);

  

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container text-center pt-5">
      <button className="btn btn-primary" onClick={handleCounter}>Click me</button>
      <button className="btn btn-primary" onClick={handleTitle}>Click me</button>

      <div className="mt-3">{counter}</div>
    </div>
  );
}
