import data from "./data";
import React, {useState} from 'react';
import Cards from './components/Cards';

const App = ()=>{
  const[carddetails, setcarddetails] = useState(data);
  function removeHandler(id){
    const filterdata = carddetails.filter(detail => detail.id!==id);
    setcarddetails(filterdata);
  }
  return(
    <div className="w-[100vw] h-[100vh] bg-slate-500 flex justify-center">
      <Cards Cardsdata = {carddetails} removeHandler = {removeHandler}></Cards>
    </div>
  );
}

export default App;
