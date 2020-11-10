import React from 'react'

export default function SubmitButton(props){
    return (
        <div className='submit'>
            <button type='submit'>{props.buttonText}</button>
        </div>
    )
}