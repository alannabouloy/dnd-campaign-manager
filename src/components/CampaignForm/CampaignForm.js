import React, { Component } from 'react'
import ApiService from '../../services/api-service'
import Dropdown from '../PlayersDropdown/PlayersDropdown'
import RadioButton from '../PrivacyButtons/PrivacyButtons'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextArea from '../TextArea/TextArea'
import TextFormField from '../TextFormField/TextFormField'
import ValidationError from '../ValidationError/ValidationError'

export default class CampaignForm extends Component{

    state = {
        campaignName: {
            value: '',
            touched: false,
            error: ''
        },
        players: {
            value: '1',
        },
        description: {
            value: '',
            touched: false,
            error: ''
        },
        privateGame: {
            value: false,
        },
        
        errorMessage: ''
    }
    handleFormSubmit = e => {
        e.preventDefault()
        if(!this.state.campaignName.value){
            this.setState({
                errorMessage: `A campaign name is required`
            })
            return
        }
        const keys = Object.keys(this.state)
        for(let i = 0; i < keys.length; i++){
            if(this.state[keys[i]].error){
                return
            }
        }
        const newCampaign = {
            campaign_name: this.state.campaignName.value,
            players: this.state.players.value,
            camp_desc: this.state.description.value,
            private_campaign: this.state.privateGame.value
        }

        ApiService.postCampaign(newCampaign)
            .then((res) => {
                console.log(res)
                this.props.onClickSubmit()
            })
            .catch(e =>  this.setState({errorMessage: e}))
    }

    checkForError = key => {
        if(this.state[key].error){
            return this.state[key].error
        }
    }

    updateCampaignName = campaignName => {
        if(campaignName.length < 6) {
            this.setState({
                campaignName: {...this.state.campaignName, touched: true, error: 'campaign name must be at least 6 characters in length'}
            })
        }else {
            this.setState({
                campaignName: {value: campaignName, touched: true, error: ''}
            })
        }
    }

    updatePlayers = players => {
        this.setState({
            players: {value: parseInt(players)}
        })
    }

    updateDescription = description => {
        if(description.length > 1000){
            this.setState({
                description: {...this.state.description, touched: true, error: 'description cannot exceed 1000 characters'}
            })
        }else{
            this.setState({
                description: {value: description, touched: true, error: ''}
            })
        }    
    }

    changePrivacySetting = setting => {
        this.setState({
            privateGame: {value: !!setting}
        })
    }





    render(){
        const campaignNameErrorMessage = this.checkForError('campaignName')
        const descriptionErrorMessage = this.checkForError('description')
        return(
            <div>
                <form id='add-campaign-form' onSubmit = {e => this.handleFormSubmit(e)}>
                    <div>
                        <TextFormField type='text' formId='camp-name' label='Enter your campaign name: ' placeholder='My Campaign' onChange={this.updateCampaignName} required={true}/>
                        {this.state.campaignName.touched && <ValidationError message={campaignNameErrorMessage}/>}
                    </div>
                    <div>
                        <Dropdown onChange={this.updatePlayers}/>
                    </div>
                    <div>
                        <TextArea formId='camp-desc' label='Describe the campaign: ' className='description' onChange={this.updateDescription}/>
                        {this.state.description.touched && <ValidationError message={descriptionErrorMessage}/>}
                    </div>
                    <div>
                        <RadioButton checkSetting={this.checkPrivacySetting} onChange={this.changePrivacySetting}/>
                    </div>
                    <div>
                        <ValidationError message = {this.state.errorMessage}/>
                    </div>
                    <SubmitButton buttonText='Start Campaign'/>
                </form>
            </div>
        )
    }
    
}