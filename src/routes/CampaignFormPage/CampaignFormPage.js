import React from 'react'
import {Component} from 'react'
import CampaignForm from '../../components/CampaignForm/CampaignForm'
import Header from '../../components/Header/Header'
import './CampaignFormPage.css'

export default class CampaignFormPage extends Component {
    render(){
        return (
            <div className='campaign-form-page'>
                <Header className='camp-form-head' heading='My Campaigns' subheading='myusername'/>
                <h2 className='section-heading'>Add Your Campaign</h2>
                <div className='form'>
                    <CampaignForm onClickSubmit = {this.props.onClickSubmit}/>
                </div>
            </div>
        )
    }
}