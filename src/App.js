import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import Nav from './components/UI/Nav'
import Alert from './components/UI/Alert'

import Landing from './components/pages/Landing'

import * as actions from './store/actions'

function App() {
  const dispatch = useDispatch()
  const message = useSelector(state => state.notification.message)
  const type = useSelector(state => state.notification.type)

  useEffect(() => {
    const appNotification = "Luxurate is a luxury travel app. When you only want the best!"
    dispatch(actions.setNotification(appNotification, "INFO"))
  }, [ dispatch ])

  const alert = message !== ''
    ? (
      <Alert
        type = { type }
        message = { message }
        clear = { () => dispatch(actions.clearNotification()) } />
    )
    : null

  return (
    <div className="App">
      <Nav />
      { alert }
      <Switch>
        <Route path = "/" exact component = { Landing } />
      </Switch>
    </div>
  );
}

export default App;
