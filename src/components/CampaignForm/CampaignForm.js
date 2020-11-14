import React, { Component } from 'react'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextArea from '../TextArea/TextArea'
import TextFormField from '../TextFormField/TextFormField'

export default class CampaignForm extends Component{
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.onClickSubmit()
    }

    render(){
        return(
            <div>
                <form id='add-campaign-form' onSubmit = {e => this.handleFormSubmit(e)}>
                    <TextFormField formId='camp-name' label='Enter your campaign name: ' placeholder='My Campaign'/>
                    <TextFormField formId='camp-num' label='How many players: ' placeholder='7'/>
                    <TextArea formId='camp-desc' label='Describe the campaign: ' className='description'/>
                    <SubmitButton buttonText='Start Campaign'/>
                </form>
            </div>
        )
    }
    
}