import React, { Component } from 'react'
import UserContext from '../../context/UserContext'
import CampaignTab from '../CampaignTab/CampaignTab'
import './CampaignList.css'

export default class CampaignList extends Component{
    static contextType = UserContext

    render(){
        let list = this.context.campaigns

        list = list && list.map(camp => {
            return (
                <CampaignTab campaign={camp} key={camp.id}/>
            )
        })
    
        return (
            <div className='campaign-list'>
                <ul className='campaigns'>
                    {list}
                </ul>
            </div>
        )
    }
    
}