import React from 'react'
import {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import NoteList from '../../components/NoteList/NoteList'
import Header from '../../components/Header/Header'
import './CampaignPage.css'

export default class CampaignPage extends Component {


    handleAddButton = e => {
        const campId = this.props.location.pathname.split('/')[2]
        this.props.onClick(campId)
    }
    
    render(){
        return (

                <div className='camp-dashboard'>
                    <Header className='dash' heading='Mighty Nein' subheading='myusername'/>
                    <NoteList/>
                    <AddButton buttonText='Add Note' onClick = {this.handleAddButton}/>
                </div>
        )
    }
}