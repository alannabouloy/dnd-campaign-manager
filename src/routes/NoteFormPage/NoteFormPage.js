import React from 'react'
import { Component } from 'react'
import NoteForm from '../../components/NoteForm/NoteForm'
import Header from '../../components/Header/Header'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

export default class NoteFormPage extends Component {
    render(){
        return (
            <div className='note-form-page'>
                <Header className='dash' heading='Mighty Nein' subheading='myusername'/>
                <SectionTitle className='add-note-heading' text='Add a New Note'/>
                <div className='form'>
                    <NoteForm location = {this.props.location} onClickSubmit = {this.props.onClickSubmit}/>
                </div>

            </div>
        )
    }
}