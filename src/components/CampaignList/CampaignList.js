import React, { Component } from 'react'
import ApiContext from '../../context/ApiContext'
import CampaignTab from '../CampaignTab/CampaignTab'
import './CampaignList.css'

export default class CampaignList extends Component{
    static contextType = ApiContext

    render(){
        let list = this.context.campaigns

        list = list.map(camp => {
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