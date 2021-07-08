import React from 'react'
import './card-list.styles.css'
export const CardList = props =>{ // props aworks as a parameter same as function
    return (
        <div className ='card-list'> {/*  this is the css here  */}

            {props.children} {/*  this will print what ever is on here thus could be anything in between cardlist */}
        </div>
    )
}