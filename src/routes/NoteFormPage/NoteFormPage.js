import React from 'react'
import { Component } from 'react'
import NoteForm from '../../components/NoteForm/NoteForm'
import Header from '../../components/Header/Header'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ApiService from '../../services/api-service'

export default class NoteFormPage extends Component {
    state = {
        campaign: {}
    }
    componentDidMount(){
        const campId = this.props.location.pathname.split('/')[3]
        ApiService.getCampaign(campId)
            .then(campaign => {
                this.setState({campaign})
            })
    }

    render(){
        return (
            <div className='note-form-page'>
                <Header className='dash' heading={this.state.campaign.campaign_name}/>
                <SectionTitle className='section-heading' text='Add a New Note'/>
                <div className='form'>
                    <NoteForm location = {this.props.location} onClickSubmit = {this.props.onClickSubmit}/>
                </div>

            </div>
        )
    }
}