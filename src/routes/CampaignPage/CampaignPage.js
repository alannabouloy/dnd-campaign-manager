import React from 'react'
import {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import NoteList from '../../components/NoteList/NoteList'
import Header from '../../components/Header/Header'
import './CampaignPage.css'
import UserContext from '../../context/UserContext'
import ApiService from '../../services/api-service'

export default class CampaignPage extends Component {

    static contextType = UserContext
    state = {
        campaign: {}
    }
    componentDidMount(){
        const campId = this.props.location.pathname.split('/')[2]
        ApiService.getCampaign(campId)
            .then(campaign => {
                this.setState({campaign})
                this.context.getNotes(campId)
            })
    }

    handleAddButton = e => {
        this.props.onClick(this.state.campaign.id)
    }
    
    render(){

        if(this.context.notes.length > 0){
            return (

                <div className='camp-dashboard'>
                    <Header className='dash' heading={this.state.campaign.campaign_name}/>
                    <NoteList/>
                    <AddButton buttonText='Add Note' onClick = {this.handleAddButton}/>
                </div>
            )
        } else {
            return (
                <div className='camp-dashboard'>
                    <Header className='dash' heading={this.state.campaign.campaign_name}/>
                    <h2 className='welcome'>Welcome to Your Campaign Notes</h2>
                    <p className='intro'>
                        Here, you'll find all of the notes you've taken for this campaign.
                        It looks like you don't have any notes yet for this campaign, so why don't 
                        you click the 'Add Note' button below to add your first Note.
                    </p>
                    <AddButton buttonText='Add Note' onClick={this.handleAddButton}/>
                </div>
            )
        } 
    }
}