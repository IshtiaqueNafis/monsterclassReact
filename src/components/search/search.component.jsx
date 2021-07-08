import React from 'react';
import './search-box.styles.css'
export const Search = ({placeholder,handleChange}) => ( // desstrucring object is being passed here
    <input className='search' type="search"
           placeholder={placeholder} // this is the name
           onChange={handleChange}/> // this is a function
);

