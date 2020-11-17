import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import NoteTab from '../NoteTab/NoteTab'
import './NoteList.css'

export default class NoteList extends Component{
    static contextType = UserContext

    render(){
        let list = this.context.notes

        list = list && list.map(note => {
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
    
}