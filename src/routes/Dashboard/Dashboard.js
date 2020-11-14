import React from 'react'
import {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import CampaignList from '../../components/CampaignList/CampaignList'
import Header from '../../components/Header/Header'
import ApiContext from '../../context/ApiContext'
import config from '../../config'
import './Dashboard.css'

export default class Dashboard extends Component{
    state = {
        campaigns: [],
        notes: [],
    }
    componentDidMount(){
        
        fetch(`${config.API_ENDPOINT}/users/1/campaigns`)
            .then(campsRes => {
                if(!campsRes.ok)
                    return campsRes.json().then(e => Promise.reject(e));
                return campsRes.json();
            })
            .then(campaigns => {
                this.setState({campaigns});
            })
            .catch(error => {
                console.log({error});
            })
    }
    
    handleAddButton = e => {
        this.props.onClick()
    }
    render(){
        const value = {
            campaigns: this.state.campaigns,
            notes: this.state.notes,
            getCampaignNotes: this.getCampaignNotes,
        }

        return (
            <ApiContext.Provider value= {value}>
                <div className='dashboard'>
                    <Header className='dash' heading='My Campaigns' subheading='myusername'/>
                    <CampaignList notes = {this.state.notes} />
                    <AddButton buttonText='Add Campaign' onClick = {this.handleAddButton}/>
                </div>
            </ApiContext.Provider>
        )
    }
}