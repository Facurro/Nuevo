import { useState } from 'react'
import './App.css'
import Slots from './Slots'

function App() {
  return (
    
      <>
      <Slots/>

      <button onClick={() => window.location.reload()}>GIRAR</button>;
      </>
    
    
  );
}

export default App
