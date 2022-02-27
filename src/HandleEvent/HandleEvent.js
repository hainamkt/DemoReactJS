import React, { Component } from 'react'

export default class HandleEvent extends Component {

    name = "Phạm Hải Nam"

    showName = () => {
        alert(`Tên học viên: ${this.name}`)
    }

    showInfoParam = (khoaHoc) => {
        alert(`Khóa học: ${khoaHoc} `)
    }

    render() {
        let khoaHoc = "KH001"
        return (
            <div>
                <button onClick={this.showName}>Click Me</button>
                <button onClick={(event) => {
                    event.target.style.backgroundColor = "blue";
                    this.showInfoParam(khoaHoc);
                }}>Click Me</button>
            </div>
        )
    }
}
