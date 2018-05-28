import React, { Component } from 'react'
import './scss/first-page.scss'

class FirstPage extends Component {
  render () {
    return (
    <div className="k-top">
      <div className="k-bg__img"></div>
      <div className="k-inner">
        <h1 className="k-title">
          <span className="k-nickname">KKULG</span>
          <span className="k-post">Front-end engineer</span>
        </h1>
        <div className="k-summary"></div>
      </div>
    </div>
    )
  }
}

export default FirstPage