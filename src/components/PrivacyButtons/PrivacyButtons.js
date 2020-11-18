import React from 'react'

export default function RadioButton(props){

    return (
        <div className='form-field'>
            <div>
                <input type='radio' id='private' name='privacy-set' value='true' onChange={e => props.onChange(e.target.value)}/>
                <label htmlFor='private'>Private</label>
            </div>
            <div>
                <input type='radio' id='public' name='privacy-set' value='' onChange={e => props.onChange(e.target.value)}/>
                <label htmlFor='public'>Public</label>
            </div>
        </div>
    )
}