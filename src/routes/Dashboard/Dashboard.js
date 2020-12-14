import React from 'react'
import {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import CampaignList from '../../components/CampaignList/CampaignList'
import Header from '../../components/Header/Header'
import './Dashboard.css'
import UserContext from '../../context/UserContext'
import TokenService from '../../services/token-service'

export default class Dashboard extends Component{
    static contextType = UserContext

    componentDidMount(){
        if(TokenService.hasAuthToken()){
            this.context.getCampaigns()
        }
    }

    handleAddButton = e => {
        this.props.onClick()
    }
    render(){
        if(this.context.campaigns.length > 0){
            return (
                    <div className='dashboard'>
                        <Header className='dash' heading='My Campaigns'/>
                        <CampaignList/>
                        <AddButton buttonText='Add Campaign' onClick = {this.handleAddButton}/>
                    </div>
        
            )
        } else {
            return (
                <div className='dashboard'>
                    <Header className='dash' heading='My Campaigns'/>
                    <h2 className='welcome'>Welcome to Your Dashboard</h2>
                    <div className='intro'>
                        <p>
                            Here, you'll find all of your active campaigns. You can click on a campaign tab to view 
                            that campaign's notes. It looks like you don't have any campaigns just yet. How about clicking the add button
                            down below to add your first campaign?
                        </p>
                    </div>
                    <AddButton buttonText='Add Campaign' onClick= {this.handleAddButton}/>
                </div>
            )
        }
        
    }
}