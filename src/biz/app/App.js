import React, { Component } from 'react'

import '@skin/layout.scss'
import './scss/App.scss'

import FirstPage from './biz-component/first-page/FirstPage'

class App extends Component {
  render () {
    return (
      <div className="k-body">
        <FirstPage></FirstPage>
        <div className="k-nav__body"></div>
      </div>
    )
  }
}

export default App
