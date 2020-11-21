import React from 'react'
import './AddButton.css'

export default function AddButton(props){
    return (
        <div className='add-button'>
            <button id={props.id} onClick = {e => props.onClick(e)}>
                {props.buttonText}
            </button>
        </div>
    )
}