import React from 'react'
import {Link} from 'react-router-dom'
import './CampaignTab.css'

export default function CampaignTab(props){
    const campaign = props.campaign
    return(
        <li>
            <Link to={`/campaigns/${campaign.id}`}>
            <div className='campaign'>
                <h2>{campaign.campaignName}</h2>
                <p>Players: {campaign.players}</p>
                <p>Playing Since: {campaign.playingSince}</p>
            </div>
            </Link>
        </li>
    )
}