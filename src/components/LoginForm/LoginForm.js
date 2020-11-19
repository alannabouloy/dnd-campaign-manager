import React, { Component } from 'react';
import './LoginForm.css';
import TextFormField from '../TextFormField/TextFormField';
import SubmitButton from '../SubmitButton/SubmitButton';
import UserContext from '../../context/UserContext';
import TokenService from '../../services/token-service'
import ValidationError from '../ValidationError/ValidationError';

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
        hasPasswordError: false,
        errorMessage: ''
    }

    static contextType = UserContext;

    updateUsername = username =>{
        this.setState({
            username: {value: username, touched: true}
        })
    }

    updatePassword = password =>{
        this.setState({
            password: {value: password, touched: true}
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const username = this.state.username.value
        const password = this.state.password.value
        this.context.login(username, password)
            .then(() => {
                    //this.props.onClickSubmit()
                
            })
            .catch(e => {
                this.setState({errorMessage: `The username or password you entered was incorrect. Please try again.`})
                console.log('error occurred:' , e)
                TokenService.clearAuthToken()
            })
    }

    render(){
        return (
            <div>
               <form id='login-form' onSubmit= {e => this.handleFormSubmit(e)}>
                <TextFormField formId = 'username' label='Username: ' type='text' placeholder='enter username here' onChange={this.updateUsername} required ={true}/>
                <TextFormField formId='password' label='Password: ' type='password' onChange={this.updatePassword} required={true}/>
                <ValidationError message={this.state.errorMessage}/>
                <SubmitButton buttonText='Login'/>
               </form>
            </div>
        )
    }
    
}