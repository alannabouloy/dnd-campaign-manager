import React from 'react';
import './LoginForm.css';
import TextFormField from '../TextFormField/TextFormField';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function LoginForm(props){
    return (
        <div>
           <form id='login-form'>
            <TextFormField formId = 'username' label='Username: ' placeholder='enter username here'/>
            <TextFormField formId='password' label='Password: '/>
            <SubmitButton buttonText='Login'/>
           </form>
        </div>
    )
}