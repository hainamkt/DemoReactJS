import React, { Component } from 'react'
import ContentComponent from './ContentComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import NavComponent from './NavComponent.js'

export default class HomeComponent extends Component {
  render() {
    return (
        <div className='row'>
          <div className='col-12'>
              {/* Header Component */}
              <HeaderComponent/>
          </div>
          <div className='col-4'>
              {/* Navigation Component */}
              <NavComponent/>
          </div>
          <div className='col-8'>
              {/* Content Component */}
              <ContentComponent/>
          </div>
          <div className='col-12'>
              {/* Footer Component */}
              <FooterComponent/>
          </div>
        </div>
    )
  }
}
