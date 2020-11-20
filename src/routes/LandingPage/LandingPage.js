import React from 'react';
import Header from '../../components/Header/Header';
import StartingLinks from '../../components/StartingLinks/StartingLinks';
import { Component } from 'react';
import './LandingPage.css'

export default class LandingPage extends Component {
    render(){
        return (
            <div className = 'landing-page'>
                <Header className = 'main-header' heading='Adventure Log'/>
                <StartingLinks/>
            </div>
        )
    }
}