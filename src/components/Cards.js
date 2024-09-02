import Card from './Card'
import { useState } from 'react'

const Cards = ({Cardsdata, removehandler})=>{
    
    return(
        <div>
            <div>programming Courses</div>
            <div>
                {
                    Cardsdata.map((course)=>{
                        return <Card key={course.id}{...course} removehandler = {removehandler}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Cards;