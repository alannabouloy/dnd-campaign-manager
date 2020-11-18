import React, { Component } from 'react'
import TextFormField from '../TextFormField/TextFormField'
import TextArea from '../TextArea/TextArea'
import TagSection from '../TagSection/TagSection'
import SubmitButton from '../SubmitButton/SubmitButton'
import AddButton from '../AddButton/AddButton'
import RadioButton from '../PrivacyButtons/PrivacyButtons'
import ApiService from '../../services/api-service'
import ValidationError from '../ValidationError/ValidationError'

export default class NoteForm extends Component{
    state = {
        noteTitle: {
            label: 'note title',
            value: '',
            touched: false,
            error: ''
        },
        noteContent: {
            label: 'some content',
            value: '',
            touched: false,
            error: ''
        },
        privateNote: {
            value: false,
        },
        errorMessage: ''
    }

    handleFormSubmit = e => {
        e.preventDefault()
        if(!this.state.noteTitle.value || !this.state.noteContent.value){
            this.setState({
                errorMessage: `New notes must have a title and some content to be submitted`
            })
            return
        }
        const keys = Object.keys(this.state)
        for(let i = 0; i < keys.length; i++){
            if(this.state[keys[i]].error){
                return
            }
        }

        const newNote = {
            note_title: this.state.noteTitle.value,
            note_content: this.state.noteContent.value,
            private_note: this.state.privateNote.value
        }

        const campId = parseInt(this.props.location.pathname.split('/')[3])


        ApiService.postNote(campId, newNote)
            .then(res => {
                console.log(res)
                this.props.onClickSubmit()
            })
            .catch(e => this.setState({errorMessage: e}))
    }
    
    checkForError = key => {
        if(this.state[key].error){
            return this.state[key].error
        }
    }

    updateNoteTitle = noteTitle => {
        if(noteTitle.length < 4){
            this.setState({
                noteTitle: {...this.state.noteTitle, touched: true, error: 'note title must be at least 4 characters'},
            })
        }else{
            this.setState({
                noteTitle: {value: noteTitle, touched: true, error: ''}
            })
        }
    }

    updateNoteContent = noteContent => {
        if(noteContent.length < 1){
            this.setState({
                noteContent: {...this.state.noteContent, touched: true, error: `don't forget to add some content!`}
            })
        }
        this.setState({
            noteContent: {value: noteContent, touched: true, error: ''}
        })
    }

    changePrivacySetting = setting => {
        this.setState({
            privateNote: {value: !!setting}
        })
    }

    render(){
        const noteTitleErrorMessage = this.checkForError('noteTitle')
        const noteContentErrorMessage = this.checkForError('noteContent')
        
        return (
            <div>
                <form id='add-note-form' onSubmit = {e => this.handleFormSubmit(e)}>
                    <div>
                        <TextFormField formId='note-name' label='Note Title: ' placeholder='In the Caverns' onChange = {this.updateNoteTitle}required={true}/>
                        {this.state.noteTitle.touched && <ValidationError message = {noteTitleErrorMessage}/>}
                    </div>
                    <div>
                        <TextArea formId='note-content' label='Note Content: ' className='content-box' onChange = {this.updateNoteContent} required={true}/>
                        {this.state.noteContent.touched && <ValidationError message={noteContentErrorMessage}/>}
                    </div>
                    <div>
                        <RadioButton onChange={this.changePrivacySetting}/>
                    </div>
                    <div>
                        <TagSection/>
                        <TextFormField formId='new-tags' label='Add a tag: ' placeholder='dungeon crawl'/>
                        <AddButton buttonText='Add Tag'/>
                    </div>
                    <div>
                        <ValidationError message={this.state.errorMessage}/>
                    </div>
                    <SubmitButton buttonText='Add Note'/>
                </form>
            </div>
        )
    }
}