import React from 'react'

import CardLink from './UI/CardLink'

import Dubai  from '../Assets/Dubai.jpg'
import NewYork from '../Assets/NewYork.jpg'
import SanFran from '../Assets/SanFran.jpg'
import Vancouver from '../Assets/Vancouver.jpg'

import classes from './TopSpots.module.css'

const LOCATIONS = [
    { location: "dubai", imageSrc: { Dubai }, label: "Dubai" },
    { location: "newyork", imageSrc: { NewYork }, label: "New York" },
    { location: "sanfran", imageSrc: { SanFran }, label: "San Francisco" },
    { location: "vancovuer", imageSrc: { Vancouver }, label: "Vancouver" }
]

const TopSpots = () => (
    <div className = { classes.Container }>
        { LOCATIONS.map(location => (
            <CardLink { ...location } key = { location.location } />
        ))}
    </div>
)

export default TopSpots