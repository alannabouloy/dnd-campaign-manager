import React from 'react'

export default function TextFormField(props){
    return (
        <div className='form-field'>
            <label htmlFor={props.formId}>
                {props.label}
            </label>
            <input type='text' id={props.formId} placeholder={props.placeholder}/>
        </div>
    )
}