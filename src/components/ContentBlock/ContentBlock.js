import React from 'react'
import Content from '../Content/Content'
import ModifiedTag from '../ModifiedTag/ModifiedTag'
import './ContentBlock.css'

export default function ContentBlock(props){
    return (
        <div className={props.className}>
            <Content content={props.content}/>
            <ModifiedTag modified={props.modified}/>
        </div>  
    )
}