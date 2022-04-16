import React from 'react';
import './App.css';
import SlotM from './Slotmachine';




const App = () => {
  return <>
    <h1 className='header'> 🎰 Welcome to <span style ={{fontWeight:'bold' }}>Slot machine Game </span>🎰</h1>
    <div className='inside'>
    
  
    <SlotM x ='😄' y ='😄' z ='😄'/>
    <SlotM x ='🍎' y ='😄' z ='🍎'/>
    <SlotM x ='😄' y ='🍌' z ='😄'/>
    <SlotM x ='👪' y ='❤️' z ='👪'/>
    </div>
  </>

}
export default App;
