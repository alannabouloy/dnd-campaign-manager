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
        if(this.context.campaigns){
            return (
                    <div className='dashboard'>
                        <Header className='dash' heading='My Campaigns' subheading='myusername'/>
                        <CampaignList/>
                        <AddButton buttonText='Add Campaign' onClick = {this.handleAddButton}/>
                    </div>
        
            )
        }
        
    }
}