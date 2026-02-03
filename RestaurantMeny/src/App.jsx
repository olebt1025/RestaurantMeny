// import { useState } from 'react'
import meny from "./Data";
import MenyListe from "./menyListe"
import './App.css'
import "./meny.css"

function App() {
  
  const kategoriRekkefølge = {
    Forrett:1,
    Hovedrett:2,
    Dessert:3,
  };

  const sorterMeny = [...meny].sort(
    (a, b) => 
      kategoriRekkefølge[a.kategori] - 
      kategoriRekkefølge[b.kategori]
  );
  

  return (
    <>
      <h1>Meny</h1>
      <MenyListe meny={sorterMeny}/>
    </>
  );
}

export default App
