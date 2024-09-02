import data from "./data";
import React, {useState} from 'react';
import Cards from './components/Cards';

const App = ()=>{
  function removehandler(id){

  }
  return(
    <div>
      <Cards Cardsdata = {data} removehandler = {removehandler}></Cards>
    </div>
  );
}

export default App;
