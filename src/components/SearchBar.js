import React, { useState } from 'react'
import { Search } from 'react-feather'

import Input from './UI/Input'
import Button from './UI/Button'
import checkValidity from '../util/checkVailidity'

import classes from './SearchBar.module.css'

/*
    Our search bar component. User will enter input, once the input is validated,
    the input will be sent to the query reducer. Consists of an input and a button.
    @isSmall -> boolean, controls the size of the container.
*/
const SearchBar = ({ isSmall }) => {
    const [ query, setQuery ] = useState('')
    
    const [ isInputValid, setIsInputValid ] = useState(true)
    const [ isInputTouched, setIsInputTouched ] = useState(false)

    const inputChangeHandler = newValue => {
        setIsInputTouched(true)
        const isValid = checkValidity(newValue, {
            required: true,
            minLength: 1
        })
        setQuery(newValue)
        setIsInputValid(isValid)
    }

    const INPUT_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: ' Enter Location, e.g. New York'
        },
        value: query,
        changed: e => inputChangeHandler(e.target.value),
        touched: isInputTouched,
        valid: isInputValid,
        warningMessage: 'Must be between 4 - 20 characters.'
    }

    const submitHandler = e => {
        e.preventDefault()

        if (isInputValid) {
            console.log(query)
        } else {
            console.log('Bad!')
        }
    }

    return (
        <form 
            className = { isSmall ? classes.SmallContainer : classes.Container }
            onSubmit = { submitHandler }>
            <Input { ...INPUT_CONFIG } />
            <Button isSubmit = { true } type = "Search">
                <Search size = { 16 } />
            </Button>
        </form>
    )
}

export default SearchBar