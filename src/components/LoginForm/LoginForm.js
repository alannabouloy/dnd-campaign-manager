import React, { Component } from 'react';
import './LoginForm.css';
import TextFormField from '../TextFormField/TextFormField';
import SubmitButton from '../SubmitButton/SubmitButton';
import UserContext from '../../context/UserContext';
import TokenService from '../../services/token-service'

export default class LoginForm extends Component{
    state = {
        username: 'mattmercer',
        password: 'pumatrocks',
    }

    static contextType = UserContext;

    handleFormSubmit = e => {
        e.preventDefault()
        const {username, password} = this.state
        const userCredentials = TokenService.makeBasicAuthToken(username, password)
        TokenService.saveAuthToken(userCredentials)
        this.context.login(username)
            .then(() => {
                this.props.onClickSubmit()
            })
    }

    render(){
        return (
            <div>
               <form id='login-form' onSubmit= {e => this.handleFormSubmit(e)}>
                <TextFormField formId = 'username' label='Username: ' placeholder='enter username here'/>
                <TextFormField formId='password' label='Password: '/>
                <SubmitButton buttonText='Login'/>
               </form>
            </div>
        )
    }
    
}