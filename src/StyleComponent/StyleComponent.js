import React, { Component } from 'react'
import './StyleComponent.css'

import styleModule from './StyleComponent.module.css'

export default class StyleComponent extends Component {
  render() {
    return (
      <div>
          <p>Hello</p>
          <h1 className='styleText'>Demo style component</h1>

          <section className={`${styleModule.styleSection} ${styleModule.styleFont} ${styleModule['style-color']}`}>
            <h2>Lorem, ipsum dolor.</h2>
          </section>


          <section style={{color:'red',backgroundColor:'green'}}>
            <p>Demo inline css</p>
          </section>
      </div>
    )
  }
}
