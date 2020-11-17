import React from 'react'
import {Component} from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Header from '../../components/Header/Header'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import TagSection from '../../components/TagSection/TagSection'
import StartingButton from '../../components/StartingButton/StartingButton'
import AddButton from '../../components/AddButton/AddButton'
import ApiService from '../../services/api-service'
import './NotePage.css'
import UserContext from '../../context/UserContext'

export default class NotePage extends Component {
    state = {
        note: '',
        campaign: 0
    }
    static contextType = UserContext

    componentDidMount() {
       const noteId = parseInt(this.props.match.params.note_id)
       const notes = this.context.notes
       const note = notes.find(note => note.id === noteId)

       this.setState({note})
       ApiService.getCampaign(note.campaign)
        .then(campaign => {
            this.setState({campaign})
        })
    }

    render(){
        const note = this.state && this.state.note
        const campaign = this.state && this.state.campaign
        return (
            <div className='note-page'>
                <Header className='note-head' heading={note.note_title} subheading='myusername'/>
                <SectionTitle className='camp-name' text={`Campaign: ${campaign.campaign_name}`}/>
                <ContentBlock className='note-content' content ={note.note_content} modified = {note.modified}/>
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