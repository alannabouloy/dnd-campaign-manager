import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './Header.css';

export default class Header extends Component {
    static contextType = UserContext
    render(){
        return (
            <header className={this.props.className}>
                <h1>{this.props.heading}</h1>
                <Link to={'/'} >
                    <div onClick={() => this.context.loggingOut()}>
                    <p className={this.context.logOut}>Log Out</p>
                    </div>
                </Link>
            </header>
    )
    }
    
}