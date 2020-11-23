import React from 'react'
import './SubmitButton.css'

export default function SubmitButton(props){
    return (
        <div className='submit'>
            <button type='submit'>{props.buttonText}</button>
        </div>
    )
}