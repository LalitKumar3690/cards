import Card from './Card'
import React from 'react';

const Cards = ({Cardsdata, removeHandler})=>{
    
    
    return(
        <div className='w-[1200px]  flex flex-col items-center p-4'>
            <div className='lg:w-[50%] w-[60%] lg:h-[70px] h-[110px] text-center text-4xl font-bold border-dotted border-white border-4 rounded-xl p-2'>Programming Courses</div>
            <div className='mt-10 w-[100%]  flex flex-wrap justify-center gap-10 '>
                {
                    Cardsdata.map((course)=>{
                        return <Card {...course} removeHandler = {removeHandler}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Cards;