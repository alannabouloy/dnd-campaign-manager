import React from 'react'
import './NoteTab.css'
import {Link} from 'react-router-dom'

export default function NoteTab(props){
    const note = props.note

    return (
        <li>
            <Link to={`/notes/${note.id}`}>
                <div className='note-tab'>
                    <h2>{note.noteTitle}</h2>
                    <p>Last Modified: {note.modified}</p>
                    <p>Author: {note.author}</p>
                </div>
            </Link>
        </li>
    )
}