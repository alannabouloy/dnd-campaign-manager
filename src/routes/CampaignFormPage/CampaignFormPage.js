import React from 'react'
import {Component} from 'react'
import CampaignForm from '../../components/CampaignForm/CampaignForm'
import Header from '../../components/Header/Header'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './CampaignFormPage.css'

export default class CampaignFormPage extends Component {
    render(){
        return (
            <div className='campaign-form-page'>
                <Header className='dash' heading='My Campaigns'/>
                <SectionTitle className='section-heading' text='Add Your Campaign'/>
                <div className='form'>
                    <CampaignForm onClickSubmit = {this.props.onClickSubmit}/>
                </div>
            </div>
        )
    }
}