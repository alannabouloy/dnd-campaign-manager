import React, { Component } from 'react'
import TextFormField from '../TextFormField/TextFormField'
import SubmitButton from '../SubmitButton/SubmitButton'
import './RegisterForm.css'
import ApiService from '../../services/api-service'
import TokenService from '../../services/token-service'
import UserContext from '../../context/UserContext'
import ValidationError from '../ValidationError/ValidationError'

export default class RegisterForm extends Component{
    state = {
        username: {
            label: 'username',
            value: '',
            touched: false,
            error: '',
        },
        firstName: {
            label: 'first name',
            value: '',
            touched: false,
            error: '',
        },
        lastName: {
            label: 'last name',
            value: '',
            touched: false,
            error: '',
        },
        email: {
            label: 'email',
            value: '',
            touched: false,
            error: '',
        },
        password: {
            label: 'password',
            value: '',
            touched: false,
            error: ''
        },

        errorMessage: ''

    }

    static contextType = UserContext

    handleFormSubmit = e => {
        e.preventDefault()
        const keys = Object.keys(this.state)
        for(let i = 0;i < keys.length - 1; i++){
            if(!this.state[keys[i]].value){
                this.setState({
                    errorMessage: `${this.state[keys[i]].label} is required`
                })
                return
            }
            if(this.state[keys[i]].error){
                return
            }
        }
        const newUser = {
            username: this.state.username.value,
            user_password: this.state.password.value,
            first_name: this.state.firstName.value,
            last_name: this.state.lastName.value,
            email: this.state.email.value
        }

        ApiService.postUser(newUser)
            .then(user => {
                TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user.username, user.user_password))
                this.context.login(user.username)
                .catch(e => this.setState({errorMessage: e}))
            })
            .then(() => this.props.onClickSubmit())
            .catch(e => this.setState({errorMessage: e}))
    }

    checkForError = (key) => {
        if(this.state[key].error){
            return this.state[key].error
        }
    }

    updateUsername = username => {
        if(username.length < 6) {
            this.setState({
                username: {...this.state.username, touched: true, error: 'username must contain 6 or more characters'}
            })
        }else {
            this.setState({
                username: {value: username, touched: true, error: ''}
            })
        }
    }


    updateFirstName = firstName => {
        if(firstName.length < 2){
            this.setState({
                firstName: {...this.state.firstName, touched: true, error: 'first name must contain 2 or more characters'}
            })
        }else {
            this.setState({
                firstName: {value: firstName, touched: true, error: ''}
            })
        }
    }

    updateLastName = lastName => {
        if(lastName.length < 2){
            this.setState({
                lastName: { ...this.state.lastName, touched: true, error: 'last name must contain 2 or more characters'}
            })
        }else {
            this.setState({
                lastName: { value: lastName, touched: true, error: ''}
            })
        }
    }

    updateEmail = email => {
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!email.match(mailFormat)){
            this.setState({
                email: { ...this.state.email, touched: true, error: 'please provide a valid email'}
            })
        }else {
            this.setState({
                email: { value: email, touched: true, error: ''}
            })
        }
    }

    updatePassword = password => {
        if(password.length < 8 ){
            this.setState({
                password: { ...this.state.password, touched: true, error: 'password must be at least 8 characters in length'}
            })
        }else {
            this.setState({
                password: { value: password, touched: true, error: ''}
            })
        }
    }
    
    
    render(){
        const usernameErrorMessage = this.checkForError('username')
        const passwordErrorMessage = this.checkForError('password')
        const firstNameErrorMessage = this.checkForError('firstName')
        const lastNameErrorMessage = this.checkForError('lastName')
        const emailErrorMessage = this.checkForError('email')
        
        
        return (
            <div>
                <form id='register-form' onSubmit = {e => this.handleFormSubmit(e)}>
                    <div>
                        <TextFormField formId='username' label='Choose a username: ' placeholder='username' onChange={this.updateUsername} required={true}/>
                        {this.state.username.touched && <ValidationError message = {usernameErrorMessage}/>}
                    </div>
                    <div>
                        <TextFormField formId='password' label='Choose a password: ' placeholder='password' onChange={this.updatePassword} required={true}/>
                        {this.state.password.touched && <ValidationError message = {passwordErrorMessage}/>}
                    </div>
                    <div>
                        <TextFormField formId='firstname' label='First Name: ' placeholder='Beauregard' onChange={this.updateFirstName} required={true}/>
                        {this.state.firstName.touched && <ValidationError message = {firstNameErrorMessage}/>}
                    </div>
                    <div>
                        <TextFormField formId='lastname' label='Last Name: ' placeholder='Lionett' onChange={this.updateLastName} required={true}/>
                        {this.state.lastName.touched && <ValidationError message = {lastNameErrorMessage}/>}
                    </div>
                    <div>
                        <TextFormField formId='email' label='Email: ' placeholder='blionett@cobaltsoul.com' onChange={this.updateEmail} required={true}/>
                        {this.state.email.touched && <ValidationError message = {emailErrorMessage}/>}
                    </div>
                    <div>
                        <ValidationError message = {this.state.errorMessage}/>
                    </div>
                    <SubmitButton buttonText='Start My Account'/>
                </form>
            </div>
        )
    }
    
}