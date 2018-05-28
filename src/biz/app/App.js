import React, { Component } from 'react'

import '@skin/layout.scss'
import './scss/App.scss'

import FirstPage from './biz-component/first-page/FirstPage'
import TwoPage from './biz-component/two-page/TwoPage'
import MyInfo from './biz-component/my-info/MyInfo'

class App extends Component {
  render () {
    return (
      <div className="k-body">
        <FirstPage/>
        <TwoPage/>
        <MyInfo/>
      </div>
    )
  }
}

export default App
