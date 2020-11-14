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
        Promise.all([
            fetch(`${config.API_ENDPOINT}/users/1/campaigns`),
            fetch(`${config.API_ENDPOINT}/campaigns/2/notes`)
        ])
            .then(([campsRes, notesRes]) => {
                if(!campsRes.ok)
                    return campsRes.json().then(e => Promise.reject(e));
                if(!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                return Promise.all([campsRes.json(), notesRes.json()]);
            })
            .then(([campaigns, notes]) => {
                this.setState({campaigns, notes});
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
        }

        return (
            <ApiContext.Provider value= {value}>
                <div className='dashboard'>
                    <Header className='dash' heading='My Campaigns' subheading='myusername'/>
                    <CampaignList/>
                    <AddButton buttonText='Add Campaign' onClick = {this.handleAddButton}/>
                </div>
            </ApiContext.Provider>
        )
    }
}