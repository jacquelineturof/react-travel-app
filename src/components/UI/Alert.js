import React from 'react'
import { X } from 'react-feather'

import classes from './Alert.module.css'

const Alert = ({ type, message, clear }) => {
    // The background color of the alert will be determined
    // by the type prop -> possible values 'INFO' || 'ERROR'
    const backgroundColorType = type === 'INFO'
        ? classes.Info
        : classes.Error
        
    return (
        <div className = { [ classes.Container, backgroundColorType ].join(' ')}>
            <p className = { classes.Message }>{ message }</p>
            <div className = { classes.IconContainer } onClick = { clear }>
                <X size = { 16 } />
            </div>
        </div>
    )
}

export default Alert