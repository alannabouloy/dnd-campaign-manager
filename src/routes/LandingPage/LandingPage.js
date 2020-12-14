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
                <Header className = 'main-header' heading='Scribe'/>
                <h2 className='welcome'>Welcome to Scribe!</h2>
                <div className='intro'>
                    <p>
                        Scribe is a handy tool you can use to keep track of all of your RPG related notes.
                        To get started, simply register for an account and add your first campaign! Already have an account?
                        Then go ahead and login and let the adventuring begin!
                    </p>
                </div>
                <StartingLinks onClick = {this.context.demoLogin}/>
            </div>
        )
    }
}