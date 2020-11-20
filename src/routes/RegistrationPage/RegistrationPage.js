import React from 'react'
import { Component } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Header from '../../components/Header/Header'
import './RegistrationPage.css'
import ButtonLink from '../../components/ButtonLink/ButtonLink'

export default class RegistrationPage extends Component {
    
    render(){
        return (
            <div className='registration-page'>
                <Header className='register' heading='Adventure Log'/>
                <div className='form'>
                    <h2>Create a New Account</h2>
                    <RegisterForm onClickSubmit = {this.props.onClickSubmit}/>
                    <ButtonLink id='to-login' buttonText='I have an account' linkTo='/login'/>
                </div>
            </div>
        )
    }
}