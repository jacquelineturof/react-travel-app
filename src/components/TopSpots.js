import React from 'react'

import CardLink from './UI/CardLink'

import DubaiImage from '../Assets/Dubai.jpg'
import NewYorkImage from '../Assets/NewYork.jpg'
import SanFranImage from '../Assets/SanFran.jpg'
import VancouverImage from '../Assets/Vancouver.jpg'

import classes from './TopSpots.module.css'

const LOCATIONS = [
    { location: "dubai", imageSrc: DubaiImage , label: "Dubai" },
    { location: "newyork", imageSrc: NewYorkImage, label: "New York" },
    { location: "sanfran", imageSrc: SanFranImage, label: "San Francisco" },
    { location: "vancovuer", imageSrc: VancouverImage, label: "Vancouver" }
]

const TopSpots = () => (
    <div className = { classes.Container }>
        { LOCATIONS.map(location => (
            <CardLink { ...location } key = { location.location } />
        ))}
    </div>
)

export default TopSpots