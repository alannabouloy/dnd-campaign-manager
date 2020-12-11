import React from 'react';
import Header from '../../components/Header/Header';
import StartingLinks from '../../components/StartingLinks/StartingLinks';
import { Component } from 'react';
import './LandingPage.css'
import UserContext from '../../context/UserContext';
import TokenService from '../../services/token-service';

export default class LandingPage extends Component {

    static contextType = UserContext

    componentDidMount(){
        if(TokenService.hasAuthToken()){
            if(TokenService.getUsername() !== 'demoaccount'){
                this.props.history.push(`/${TokenService.getUsername()}/dash`)
            } else {
                this.context.loggingOut()
            }   
        }
    }    

    render(){
        return (
            <div className = 'landing-page'>
                <Header className = 'main-header' heading='Adventure Log'/>
                <StartingLinks onClick = {this.context.demoLogin}/>
            </div>
        )
    }
}