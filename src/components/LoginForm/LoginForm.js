import React, { Component } from 'react';
import './LoginForm.css';
import TextFormField from '../TextFormField/TextFormField';
import SubmitButton from '../SubmitButton/SubmitButton';

export default class LoginForm extends Component{
    state = {
        username: '',
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.onClickSubmit()
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