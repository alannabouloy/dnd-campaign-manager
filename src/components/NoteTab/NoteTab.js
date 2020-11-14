import React from 'react'
import './NoteTab.css'
import {Link} from 'react-router-dom'

export default function NoteTab(props){
    const {id, note_title, modified, admin } = props.note
    const note = {
        id,
        noteTitle: note_title,
        modified,
        author: admin
    }

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