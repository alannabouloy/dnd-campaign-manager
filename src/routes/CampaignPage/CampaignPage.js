import React from 'react'
import {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import NoteList from '../../components/NoteList/NoteList'
import Header from '../../components/Header/Header'
import './CampaignPage.css'
import ApiContext from '../../context/ApiContext'

export default class CampaignPage extends Component {
    static contextType = ApiContext

    handleAddButton = e => {
        this.props.onClick()
    }
    
    render(){
        const notes = this.context.notes
        return (

                <div className='camp-dashboard'>
                    <Header className='dash' heading='Mighty Nein' subheading='myusername'/>
                    <NoteList notes = {notes} />
                    <AddButton buttonText='Add Note' onClick = {this.handleAddButton}/>
                </div>
        )
    }
}