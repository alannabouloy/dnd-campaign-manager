import React, { Component } from 'react'
import TextFormField from '../TextFormField/TextFormField'
import SubmitButton from '../SubmitButton/SubmitButton'
import './RegisterForm.css'

export default class RegisterForm extends Component{
    state = {
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    handleFormSubmit = e => {
        e.preventDefault()
        console.log('ran')
        this.props.onClickSubmit()
    }
    
    
    render(){
        return (
            <div>
                <form id='register-form' onSubmit = {e => this.handleFormSubmit(e)}>
                    <TextFormField formId='username' label='Choose a username: ' placeholder='username'/>
                    <TextFormField formId='password' label='Choose a password: ' placeholder='password'/>
                    <TextFormField formId='firstname' label='First Name: ' placeholder='Beauregard'/>
                    <TextFormField formId='lastname' label='Last Name: ' placeholder='Lionett'/>
                    <TextFormField formId='email' label='Email: ' placeholder='blionett@cobaltsoul.com'/>
                    <SubmitButton buttonText='Start My Account'/>
                </form>
            </div>
        )
    }
    
}