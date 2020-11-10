import React from 'react'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextArea from '../TextArea/TextArea'
import TextFormField from '../TextFormField/TextFormField'

export default function CampaignForm(props){
    return(
        <div>
            <form id='add-campaign-form'>
                <TextFormField formId='camp-name' label='Enter your campaign name: ' placeholder='My Campaign'/>
                <TextFormField formId='camp-num' label='How many players: ' placeholder='7'/>
                <TextArea formId='camp-desc' label='Describe the campaign: ' className='description'/>
                <SubmitButton buttonText='Start Campaign'/>
            </form>
        </div>
    )
}