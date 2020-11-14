import React, { Component } from 'react'
import ApiContext from '../../context/ApiContext'
import NoteTab from '../NoteTab/NoteTab'
import './NoteList.css'

export default class NoteList extends Component{
    static contextType = ApiContext

    render(){
        let list = this.props.notes

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
    
}