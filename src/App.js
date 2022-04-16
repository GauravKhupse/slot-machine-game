import React from 'react';
import logo from './logo.svg';
import './App.css';
import SlotM from './Slotmachine';




const App = () => {
  return <>
    <h1 className='header'> 🎰 Welcome to <span style ={{fontWeight:'bold' }}>Slot machine Game </span>🎰</h1>
    <SlotM x ='😄' y ='😄' z ='😄'/>
    <SlotM x ='🍎' y ='😄' z ='🍎'/>
    <SlotM x ='😄' y ='🍌' z ='😄'/>
    <SlotM x ='👪' y ='❤️' z ='👪'/>
  </>

}
export default App;
