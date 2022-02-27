import React, { Component } from 'react'

export default class StateDemo extends Component {

    // isLogin = false;
    username = 'Username';

    // state là thuộc tính được định nghĩa sẵn của lớp Component của React
    // chứa cái giá trị cần thay đổi để render lại giao diện
    state = {
        isLogin: false,
    }

    renderLoginState = () => {
        if (this.state.isLogin) {
            return <span>{this.username}</span>
        }

        return <button className='btn btn-success' onClick={() => {
            this.handleState();
        } }>Login</button>
    }

    handleState = async () => {
        // Không được gán giá trị trực tiếp cho state vì sẽ không render lại UI
        // this.state.isLogin = true;
        // console.log(this.state.isLogin);

        // Sử dụng setState() để khi gán giá trị mới cho state thì UI sẽ render lại
        // this.setState(đối tượng state mới)
        // setState là 1 phương thức bất đồng bộ

        let newState = {
            isLogin: true,
        }
        // this.setState(newState);
        // console.log(this.state.isLogin);

        // C1: dùng tham số thứ 2 của setState
        // this.setState(newState,() => {
        //     // chạy sau khi đã chạy xong hàm setState
        //     console.log(this.state.isLogin);
        // });

        // C2: sử dụng async/await
        await this.setState(newState);
        console.log(this.state.isLogin);
    }

    // renderLogin = () => {
    //     if(this.isLogin){
    //         return <span>{this.username}</span>
    //     } else{
    //         return <button className='btn btn-success' onClick={() => {
    //             // Expected: khi click button thì isLogan = true => UI sẽ hiển thị username
    //             // Result: isLogan đã đổi nhưng UI ko đổi
    //             this.isLogin = true;
    //             console.log(this.isLogin);
    //             // render lại => load lại UI
    //             // phương thức render chỉ chạy 1 lần duy nhất khi load web và không thể chạy lại khi gọi lại nó
    //             // this.render();
    //         } }>Login</button>
    //     }
    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                        {/* Khi đã đăng nhập (isLogan = true) => hiển thị username
                        Ngược lại, hiển thị button login (isLogan = false) */}
                        <div>
                            {/* Toán tử 3 ngôi: chỉ dùng khi code xử lí ngắn */}
                            {/* {this.isLogin == true ? <span> {this.username} </span> : <button className='btn btn-success'>Login</button>} */}

                            {/* {this.renderLogin()} */}

                            {this.renderLoginState()}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
