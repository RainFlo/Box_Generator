import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';

function App() {

  const [boxColor, setBoxColor] = useState("No current colors");
  
  const addBox = (newBoxColor) => {
    setBoxColor(newBoxColor);
  }

  return (
    <>
      <BoxForm onNewColor={ addBox }/>
      <Box color={ boxColor }/>
    </>
  );
}

export default App;
