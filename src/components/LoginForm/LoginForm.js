import React, { Component } from 'react';
import './LoginForm.css';
import TextFormField from '../TextFormField/TextFormField';
import SubmitButton from '../SubmitButton/SubmitButton';
import UserContext from '../../context/UserContext';
import TokenService from '../../services/token-service'

export default class LoginForm extends Component{
    state = {
        username: {
            value: '',
            touched: false
        },
        password: {
            value: '',
            touched: false
        },

        hasUsernameError: false,
        hasPasswordError: false
    }

    static contextType = UserContext;

    updateUsername = username =>{
        this.setState({
            username: {value: username, touched: true}
        })
        console.log('username: ', this.state.username.value)
    }

    updatePassword = password =>{
        this.setState({
            password: {value: password, touched: true}
        })
        console.log('password: ', this.state.password.value)
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const username = this.state.username.value
        const password = this.state.password.value
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
                <TextFormField formId = 'username' label='Username: ' placeholder='enter username here' onChange={this.updateUsername} required ={true}/>
                <TextFormField formId='password' label='Password: ' onChange={this.updatePassword} required={true}/>
                <SubmitButton buttonText='Login'/>
               </form>
            </div>
        )
    }
    
}