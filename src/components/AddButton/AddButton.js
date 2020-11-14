import React from 'react'
import './AddButton.css'

export default function AddButton(props){
    return (
        <div className='add-button'>
            <button onClick = {e => props.onClick(e)}>
                {props.buttonText}
            </button>
        </div>
    )
}