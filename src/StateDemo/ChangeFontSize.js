import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    // Khi click button + thì tăng fontsize của thẻ p
    // Khi click button - thì giảm fontsize của thẻ p

    // B1: xây dựng UI
    // B2: xác định giá trị cần thay đổi, khi giá trị đó cần thay đổi thì sẽ render lại UI => lưu giá trị đó vào state (xác định state)
    // B3: xác định hàm sẽ đặt phương thức setState

    state = {
        size: 50,
    }

    render() {
        return (
            <div>
                <p style={{fontSize:`${this.state.size}px`}}>Lorem ipsum dolor sit amet.</p>
                <button className='btn btn-success' onClick={() => {
                    // click tăng size
                    // let newState = {
                    //     size: this.state.size + 1
                    // }
                    // this.setState(newState);

                    this.setState({size: this.state.size + 1});
                }}>+</button>
                <button className='btn btn-danger' onClick={() => {
                    this.setState({size: this.state.size - 1});
                }}>-</button>
            </div>
        )
    }

}
