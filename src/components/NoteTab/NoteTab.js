import React from 'react'
import './NoteTab.css'

export default function NoteTab(props){
    const note = props.note

    return (
        <li>
            <div className='note-tab'>
                <h2>{note.noteTitle}</h2>
                <p>Last Modified: {note.modified}</p>
                <p>Author: {note.author}</p>
            </div>
        </li>
    )
}