import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container text-center pt-5">
      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Click me</button>
      <div className="mt-3">{counter}</div>
    </div>
  );
}
