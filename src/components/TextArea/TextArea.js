import React from 'react'

export default function TextArea(props){
    return(
        <div className='form-field'>
            <label htmlFor={props.formId}>
                {props.label}
            </label>
            <textarea id={props.formId} className={props.className}>

            </textarea>
        </div>
    )
}