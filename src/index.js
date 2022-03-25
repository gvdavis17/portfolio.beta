import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import UkraineResponse from './views/ukraine-response'
import AboutMe from './views/about-me'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={UkraineResponse} path="/ukraine-response" />
        <Route exact component={AboutMe} path="/about-me" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
