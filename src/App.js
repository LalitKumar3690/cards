import data from "./data";
import React, {useState} from 'react';
import Cards from './components/Cards';

const App = ()=>{
  const[carddetails, setcarddetails] = useState(data);
  function removeHandler(id){
    const filterdata = carddetails.filter(detail => detail.id!==id);
    setcarddetails(filterdata);
    
  }
if(carddetails.length === 0){
      return(
      <div className="w-screen h-screen bg-gray-400 flex justify-center items-center">
        <div className="bg-slate-100 w-1/3 h-1/4 rounded-xl shadow-xl p-5 flex flex-col justify-evenly items-center">
          <div className="text-center font-light text-lg ">
            <h1>All Cards are removed</h1>
            <h1>So, you can refresh</h1>
          </div>
          <button onClick={()=>setcarddetails(data)} className="w-full h-10 bg-blue-300 rounded-lg text-lg font-medium font-">Refresh</button>
        </div>
      </div>)
    }


  
  return(
    <div className="bg-slate-500 flex justify-center m-0 p-0">
      <Cards Cardsdata = {carddetails} removeHandler = {removeHandler}></Cards>
    </div>
  );
}

export default App;
