import React, { Component } from 'react'

export default class DataBinding extends Component {
    // thuộc tính
    avarta = "https://picsum.photos/seed/picsum/500/300"

    renderInfo() {
        // trả về 2 thẻ lớp học với email
        return <div>
            <p>KH001</p>
            <p>test@gmail.com</p>
        </div>
    }

    renderInfo2 = () => {
        return <div>
            <p>KH002</p>
            <p>test2@gmail.com</p>
        </div>
    }

    renderObject = () => {
        let pet = {
            name: 'Mực',
            age: 1,
            breed: 'chó cỏ',
            img:'https://picsum.photos/id/237/200/300'
        }
        return (
            <div className='col-4'>
                <div className='card'>
                    <img src={pet.img} alt="" />
                    <h2>Tên: {pet.name}</h2>
                    <p>Tuổi: {pet.age}</p>
                    <p>Giống: {pet.breed}</p>
                </div>
            </div>
        )
    }

    // Binding
    render() {
        let name = 'Nguyễn Thị Học Viên';
        return (
            <div>
                <h3>{name}</h3>

                <img src={this.avarta} alt="" />

                {this.renderInfo()}
                {this.renderInfo2()}

                <div className='row'>
                    {this.renderObject()}
                    {this.renderObject()}
                    {this.renderObject()}
                </div>
            </div>
        )
    }

}
