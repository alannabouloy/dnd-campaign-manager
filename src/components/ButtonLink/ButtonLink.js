import React from 'react';
import './ButtonLink.css'
import {Link} from 'react-router-dom'

export default function ButtonLink(props) {
    return (
       
        <Link className='button' to={props.linkTo}>
            <div>
                <h4>{props.buttonText}</h4>
            </div>
        </Link>
        
    )
    
}
