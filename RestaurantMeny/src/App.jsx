// import { useState } from 'react'
import meny from "./Data";
import MenyListe from "./menyListe"
import './App.css'

function App() {
  

  return (
    <>
      <h1>Meny</h1>
      <MenyListe meny={meny}/>
    </>
  );
}

export default App
