import React from 'react'
import {Component} from 'react'
import Header from '../../components/Header/Header'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
    render(){
        return (
            <div className='login-page'>
                <Header className = 'login' heading='DnD Campaign Manager' subheading='a place to keep track of all of your adventures'/>
                <div className='form'>
                    <h2>Log In</h2>
                    <LoginForm/>
                </div>
            </div>
            
        )
    }
}