import React from 'react'

export default function TextFormField(props){
    if(props.required){
        return (
            <div className='form-field'>
                <label htmlFor={props.formId}>
                    {props.label}
                </label>
                <input type='text' id={props.formId} placeholder={props.placeholder} onChange = {e => props.onChange(e.target.value)} required/>
            </div>
        )
    }else {
        return (
            <div className='form-field'>
                <label htmlFor={props.formId}>
                    {props.label}
                </label>
                <input type='text' id={props.formId} placeholder={props.placeholder} onChange = {e => props.onChange(e.target.value)}/>
            </div>
        )
    }
    
}