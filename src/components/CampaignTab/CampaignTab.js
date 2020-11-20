import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../context/UserContext'
import './CampaignTab.css'

export default class CampaignTab extends Component {
    static contextType = UserContext

    render(){
        const {id, campaign_name, players, playingSince} = this.props.campaign
        const campaign = {
            id, 
            campaignName: campaign_name,
            players, 
            playingSince
        }
 
        return(
            <li onClick = {e => this.context.campaignClick(campaign.id)}>
                <Link to={`/campaigns/${campaign.id}`}>
                <div className='campaign tab'>
                    <h2>{campaign.campaignName}</h2>
                    <p>Players: {campaign.players}</p>
                    <p>Playing Since: {campaign.playingSince}</p>
                </div>
                </Link>
            </li>
        )
    }
}