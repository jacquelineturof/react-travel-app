import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './CardLink.module.css'

const CardLink = ({ location, imageSrc, label }) => {
    const url = `/location/${location}`

    return (
        <NavLink to = { url } className = { classes.Card }>
            <div className = { classes.Overlay } />
            <img 
                src = { imageSrc }
                alt = "destination" 
                className = { classes.CardImage } />
            <p className = { classes.CardLabel }>{ label }</p>
        </NavLink>
    )
}

export default CardLink