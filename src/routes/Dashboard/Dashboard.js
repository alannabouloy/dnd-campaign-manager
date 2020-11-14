import React from 'react'
import {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import CampaignList from '../../components/CampaignList/CampaignList'
import Header from '../../components/Header/Header'
import './Dashboard.css'

export default class Dashboard extends Component{

    handleAddButton = e => {
        this.props.onClick()
    }
    render(){
        return (
            <div className='dashboard'>
                <Header className='dash' heading='My Campaigns' subheading='myusername'/>
                <CampaignList/>
                <AddButton buttonText='Add Campaign' onClick = {this.handleAddButton}/>
            </div>
        )
    }
}