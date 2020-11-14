import React from 'react'
import Content from '../Content/Content'
import ModifiedTag from '../ModifiedTag/ModifiedTag'
import './ContentBlock.css'

export default function ContentBlock(props){
    const note = {
        content: 'Caleb tells Beau all about the way that he was abused and brainwashed into murdering his parents in a brutal fashion before being confined to a madhouse for eleven years.',
        modified: '11-09-20'
    }
    return (
        <div className={props.className}>
            <Content content={note.content}/>
            <ModifiedTag modified={note.modified}/>
        </div>  
    )
}