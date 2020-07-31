import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home } from 'react-feather'

import Logo from '../../Assets/logo2.svg'
import SearchBar from '../SearchBar'

import classes from './Nav.module.css'

const NavLogo = () => (
        <img src = { Logo } className = { classes.Logo } alt = "airplane" />
)

const Links = () => (
    <div className = { classes.LinksContainer }>
        <NavLink to = "/" className = { classes.HostLink }>
            <Home size = { 16 } />
            Host
        </NavLink>
        <NavLink to = "/" className = { classes.AuthLink }>
            Sign In
        </NavLink>
    </div>
)

const Nav = () => (
    <nav className = { classes.Nav }>
        <div className = { classes.Left }>
            <NavLogo />
            <SearchBar isSmall = { true } />
        </div>
        <div className = { classes.Right }>
            <Links />
        </div>
    </nav>
)

export default Nav