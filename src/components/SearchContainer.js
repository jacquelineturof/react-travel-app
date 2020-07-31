import React from 'react'

import SearchBar from './SearchBar'

import classes from './SearchContainer.module.css'

const SearchContainer = () => (
    <div className = { classes.Container }>
        <h1 className = { classes.Heading }>Find a beautiful place you'll love!</h1>
        <SearchBar />
    </div>
)

export default SearchContainer