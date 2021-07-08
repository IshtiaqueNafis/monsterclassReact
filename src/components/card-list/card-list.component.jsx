import React from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.component'
export const CardList = props =>{ // props aworks as a parameter same as function
    return (
        <div className ='card-list'> {/*  this is the css here  */}

            {/*{props.children} /!*  this will print what ever is on here thus could be anything in between cardlist *!/*/}
            {
                // eslint-disable-next-line array-callback-return
                props.monsters.map(monster=>
                    <Card key={monster.id} monster={monster}/> // key is being passed as a key and monster is being passed as a single object this will loop through it
                )
            }
        </div>
    )
}