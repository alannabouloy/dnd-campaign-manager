import React from 'react'
import {Component} from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Header from '../../components/Header/Header'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import TagSection from '../../components/TagSection/TagSection'
import StartingButton from '../../components/StartingButton/StartingButton'
import AddButton from '../../components/AddButton/AddButton'
import './NotePage.css'
import UserContext from '../../context/UserContext'

export default class NotePage extends Component {
    state = {
        note: null,
    }
    static contextType = UserContext

    componentDidMount() {
       const noteId = this.props.match.params
       const notes = this.context.notes
        console.log(notes)
       const note = notes.filter(note => note.id === noteId)
       console.log(note)
    }

    render(){
        return (
            <div className='note-page'>
                <Header className='note-head' heading='My Tragic Backstory' subheading='myusername'/>
                <SectionTitle className='camp-name' text='Campaign: Mighty Nein'/>
                <ContentBlock className='note-content'/>
                <TagSection/>
                <AddButton buttonText='Add Tag'/>
                <div className='nav-buttons'>
                    <StartingButton className='back-button' buttonText='Back to Notes'/>
                    <StartingButton className='edit-button' buttonText='Edit Note'/>
                </div>
            </div>
        )
    }
}