import React, { Component } from 'react';
import './ButtonLink.css'
import {Link} from 'react-router-dom'
import UserContext from '../../context/UserContext';


export default class ButtonLink extends Component{
    static contextType = UserContext

    handleDemoClick = e => {
        this.context.login('demoaccount', 'rollthedice')
    }
    
    render(){
        if(this.props.id === 'demo'){
            return (
                <Link id = {this.props.id} className = 'button' onClick = {e => this.handleDemoClick(e)} to={this.props.linkTo}>
                    <div>
                         <h4>{this.props.buttonText}</h4>
                    </div> 
                </Link>
            )

        } else {
            return (
       
                <Link className='button' id={this.props.id} to={this.props.linkTo}>
                    <div>
                        <h4>{this.props.buttonText}</h4>
                    </div>
                </Link>
                
            )
        }
        
    }
    
    
}
