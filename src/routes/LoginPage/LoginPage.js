import React from 'react'
import {Component} from 'react'
import Header from '../../components/Header/Header'
import LoginForm from '../../components/LoginForm/LoginForm'

import './LoginPage.css'

export default class LoginPage extends Component {
    render(){
        return (
            <div className='login-page'>
                <Header className = 'login' heading='Scribe'/>
                <div className='form'>
                    <h2>Log In</h2>
                    <LoginForm onClickSubmit = {this.props.onClickSubmit} />
                </div>
            </div>
            
        )
    }
}