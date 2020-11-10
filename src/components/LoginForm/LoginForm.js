import React from 'react';
import './LoginForm.css';

export default function LoginForm(props){
    return (
        <div>
           <form id='login-form'>
               <div className='form-field'>
                   <label htmlFor='username'>Username: </label>
                   <input type='text' id='username' placeholder='enter username'/>
               </div>
               <div className="form-field">
                    <label htmlFor='password'>Password: </label>
                    <input type="text" id='password'/>
                </div>
                <div className='submit'>
                    <button type='submit'>Login</button>
                </div>   
           </form>
        </div>
    )
}