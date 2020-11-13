import React from 'react'
import TextFormField from '../TextFormField/TextFormField'
import SubmitButton from '../SubmitButton/SubmitButton'
import './RegisterForm.css'

export default function RegisterForm(props){
    return (
        <div>
            <form id='register-form'>
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