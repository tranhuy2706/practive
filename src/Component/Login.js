import React, { Component } from 'react';
import Logo from '../img/logo-2.png';
import BG from '../img/bg-4.jpg';
import swal from 'sweetalert'
import { Redirect } from 'react-router-dom';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 0   
        }
        this.email = ''
        this.password= ''
        localStorage.clear()


    }

    chekLogin = async (e) => {
        let result = await fetch(`http://api.cms_dev.beetai.com/api/user/login`,{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                email: this.email,
                password: this.password
            })
        })
        console.log(result)
        let data = await result.json();
        console.log(data)
        if (data.status !== 10000){

            swal("Opsss!", "Sai tài khoản hoặc mật khẩu!", "error");
            return;
        }
        else{
            localStorage.setItem('Islogin', 1)
            swal("Good job!", "You clicked the button!", "success")
            window.location.href = "/"
            // this.props.history.push('/');
        }
    }



    render() {
        return (
            <div className="m-grid m-grid--hor m-grid--root m-page">
                <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin" id="m_login">
                    <div className="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
                        <div className="m-stack m-stack--hor m-stack--desktop">
                            <div className="m-stack__item m-stack__item--fluid">
                                <div className="m-login__wrapper">
                                    <div className="m-login__logo">
                                        <a href="#">
                                            <img src={Logo} />
                                        </a>
                                    </div>
                                    <div className="m-login__signin">
                                        <div className="m-login__head">
                                            <h3 className="m-login__title">Sign In To Admin</h3>
                                        </div>
                                        <form className="m-login__form m-form" onSubmit={this.onSubmitLogin}>
                                            <div className="form-group m-form__group">
                                                <input className="form-control m-input" type="text" placeholder="Email" name="email" onChange={(e) => {this.email = e.target.value;}} />
                                            </div>
                                            <div className="form-group m-form__group">
                                                <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" onChange={(e) => {this.password = e.target.value;}}/>
                                            </div>
                                            <div className="m-login__form-action" >
                                                <button type="submit" id="m_login_signin_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air" onClick={() => {this.chekLogin()}} >Sign In</button>
                                            </div>
                                        </form>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1	m-login__content m-grid-item--center" style={{ backgroundImage: `url(${BG})` }}>
                        <div className="m-grid__item">
                            <h3 className="m-login__welcome">Join Our Community</h3>
                            <p className="m-login__msg">
                                Lorem ipsum dolor sit amet, coectetuer adipiscing
                                 <br />elit sed diam nonummy et nibh euismod
                             </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;