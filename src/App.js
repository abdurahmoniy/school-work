import React, { useState } from 'react';
import './App.css';
import './component/Header.css';
import Header from './component/Header';
// import Akmal from './component/Akmal' 
// import Lesson from './component/Lesson'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header />
      {/* <Akmal text="oshga qachon boramz"/>
      <Lesson count={count} setCount={setCount} text="Click me" text2="Clear"/> */}
    </div>
  );
}

export default App;
