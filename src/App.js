/* eslint-disable react/button-has-type */
import React, { useState, useEffect,useRef } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');
  const amountRef = useRef();
  const reactMaxRef = useRef(false);

  const handleCounter = () => {
    if(!reactMaxRef.current) {
      if(counter >= 10){
        reactMaxRef.current = true;
      }else{
        setCounter(c => c + (+amountRef.current.value || 1))
      }

    }else {
      console.log("You reached max clicks")
    }

  }
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

  useEffect(()=>{
    amountRef.current.focus();
  })

  

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container text-center pt-5">
      <input ref={amountRef} />
      <br/>
      <button className="btn btn-primary mt-3" onClick={handleCounter}>Click me</button>
      <br/>
      <button className="btn btn-primary mt-3" onClick={handleTitle}>Click me</button>

      <h1 className="mt-3">{counter}</h1>
    </div>
  );
}
