import data from "./data";
import React, {useState} from 'react';
import Cards from './components/Cards';

const App = ()=>{
  return(
    <div>
      <Cards Cardsdata = {data}></Cards>
    </div>
  );
}

export default App;
