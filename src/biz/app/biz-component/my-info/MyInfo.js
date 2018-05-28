import React, { Component } from 'react'
import me from '@img/me.jpg'
import './scss/my-info.scss'

class MyInfo extends Component {
  render () {
    return (
      <div className="mt16">
        <div className="row">
          <div className="col-4 padding0">
            <img className="img-responsive" alt="me" src={me} />
          </div>
          <div className="col-8 padding0 my-info">
            <div className="info-body">
              <h3>关于我</h3>
              <p className="mt16">一名开朗活泼的小前端草根，一年java工程师&嵌入式工程师，五年前端开发工程师。活泼开朗，沟通无限。</p>
              <p className="mt24">岁月无法停留，在那个初春的季节，我和你邂逅，道不尽太多涟漪，我的故事都是关于你呀。怎么会爱上了她，并决定跟她回家，从此之后就是五年呀。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyInfo