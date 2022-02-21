import React, { Component } from 'react'
// rcc: cách tạo nhanh class component

export default class ClassComponent extends Component {

    // phương thức render => tạo/trả về UI của component
  render() {
    return (
        <div className='test'>
          ClassComponent
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
  }
}
