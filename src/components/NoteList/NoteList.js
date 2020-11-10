import React from 'react'
import NoteTab from '../NoteTab/NoteTab'
import './NoteList.css'

export default function NoteList(props){
    let list = [
        {
            noteTitle: 'Last Session',
            noteContent: 'lorem ipsum dolor',
            modified: '11-09-2020',
            private: false,
            author: 'marishanosleevesray',
            id: 1
        },
        {
            noteTitle: 'Nott Got Drunk',
            noteContent: 'no one is surprised',
            modified: '11-03-2020',
            private: false,
            author: 'marishanosleevesray',
            id: 2
        },
        {
            noteTitle: 'My Tragic Backstory',
            noteContent: `spoiler alert, I'm a monster`,
            modified: '10-24-20',
            private: false,
            author: 'tragicbackstoryliam',
            id: 3
        }
    ]

    list = list.map(note => {
        return (
            <NoteTab note={note} key={note.id}/>
        )
    })

    return (
        <div className='note-list'>
            <ul className='notes'>
                {list}
            </ul>
        </div>
    )
}