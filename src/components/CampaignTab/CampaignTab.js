import React from 'react'
import {Link} from 'react-router-dom'
import './CampaignTab.css'

export default function CampaignTab(props){
    const {id, campaign_name, players, playingSince} = props.campaign
    const campaign = {
        id, 
        campaignName: campaign_name,
        players, 
        playingSince
    }
    
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