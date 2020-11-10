import React from 'react'
import { Component } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Header from '../../components/Header/Header'
import './RegistrationPage.css'

export default class RegistrationPage extends Component {
    render(){
        return (
            <div className='registration-page'>
                <Header className='register' heading='DnD Campaign Manager' subheading='a place to keep track of all of your adventures'/>
                <div className='form'>
                    <h2>Create a New Account</h2>
                    <RegisterForm/>
                </div>
            </div>
        )
    }
}