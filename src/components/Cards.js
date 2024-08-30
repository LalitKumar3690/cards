import Card from './Card'
import { useState } from 'react'

const Cards = (props)=>{
    return(
        <div>
            <div>programming Courses</div>
            <div>
                {
                    props.map((course)=>{
                        return <Card key={course.id}{...course}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Cards;