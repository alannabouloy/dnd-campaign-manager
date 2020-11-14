import React from 'react'
import {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import NoteList from '../../components/NoteList/NoteList'
import Header from '../../components/Header/Header'
import './CampaignPage.css'
import ApiContext from '../../context/ApiContext'
import config from '../../config'

export default class CampaignPage extends Component {
    state = {
        notes: [],
        campaign: null
    }
    static contextType = ApiContext

    getCampaignNotes = campId => {
        console.log('getting campaign notes')
        fetch(`${config.API_ENDPOINT}/campaigns/${campId}/notes`)
            .then(notesRes => {
                if(!notesRes.ok){
                      return notesRes.json().then(e => Promise.reject(e))
                }
                return notesRes.json()
            })
            .then(notes => {
                this.setState({notes});
                console.log(this.state.notes)
            })
        
    }

    componentDidMount(){
        const path = this.props.location.pathname.split('/')
        const campaign = path[2]
        this.setState({campaign})
        
        this.getCampaignNotes(campaign)
    }

    handleAddButton = e => {
        this.props.onClick()
    }
    
    render(){
        return (
            <div className='camp-dashboard'>
                <Header className='dash' heading='Mighty Nein' subheading='myusername'/>
                <NoteList notes = {this.state.notes} />
                <AddButton buttonText='Add Note' onClick = {this.handleAddButton}/>
            </div>
        )
    }
}