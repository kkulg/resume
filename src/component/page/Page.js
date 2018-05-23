import React, { Component } from 'react'

import '@skin/layout.scss'

class Page extends Component {
  render () {
    return (
      <div className="k-page">
        { this.props.children }
      </div>
    )
  }
}

export default Page