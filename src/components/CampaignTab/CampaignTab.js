import React from 'react'
import './CampaignTab.css'

export default function CampaignTab(props){
    const campaign = props.campaign
    return(
        <li>
            <div className='campaign'>
                <h2>{campaign.campaignName}</h2>
                <p>Players: {campaign.players}</p>
                <p>Playing Since: {campaign.playingSince}</p>
            </div>
        </li>
    )
}