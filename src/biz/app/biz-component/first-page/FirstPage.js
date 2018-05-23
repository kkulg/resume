import React, { Component } from 'react'
import './scss/first-page.scss'
import Page from '@component/page/Page'

class FirstPage extends Component {
  render () {
    return (
      <Page>
        <div className="k-top">
          <div className="k-bg__img"></div>
          <div className="k-inner">
            <h1 className="k-title">
              KKULG<span className="k-post">Front-end engineer</span>
            </h1>
            <div className="k-summary"></div>
          </div>
        </div>
      </Page>
    )
  }
}

export default FirstPage