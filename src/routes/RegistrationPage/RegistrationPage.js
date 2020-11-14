import React from 'react'
import { Component } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Header from '../../components/Header/Header'
import './RegistrationPage.css'
import StartingButton from '../../components/StartingButton/StartingButton'
import {Link} from 'react-router-dom'

export default class RegistrationPage extends Component {
    
    render(){
        return (
            <div className='registration-page'>
                <Header className='register' heading='DnD Campaign Manager' subheading='a place to keep track of all of your adventures'/>
                <div className='form'>
                    <h2>Create a New Account</h2>
                    <RegisterForm onClickSubmit = {this.props.onClickSubmit}/>
                    <Link to = '/login'>
                        <StartingButton className='returning' buttonText='I have an account'/>
                    </Link>
                </div>
            </div>
        )
    }
}