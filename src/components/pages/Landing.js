import React from 'react'

import SearchContainer from '../SearchContainer'
import TopSpots from '../TopSpots'

import classes from './LandingPage.module.css'

const Landing = () => (
    <section className = { classes.Container }>
        <SearchContainer />
        <TopSpots />
    </section>
)

export default Landing