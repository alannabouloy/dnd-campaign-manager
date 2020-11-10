import React from 'react'
import './AddButton.css'

export default function AddButton(props){
    return (
        <div className='add-button'>
            <button>
                {props.buttonText}
            </button>
        </div>
    )
}