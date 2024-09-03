import Card from './Card'
import React from 'react';

const Cards = ({Cardsdata, removeHandler})=>{
    
    return(
        <div className='w-[1000px] flex flex-col items-center'>
            <div>programming Courses</div>
            <div>
                {
                    Cardsdata.map((course)=>{
                        return <Card key={course.id}{...course} removeHandler = {removeHandler}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Cards;