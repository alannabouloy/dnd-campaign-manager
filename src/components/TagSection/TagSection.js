import React from 'react'
import Tag from '../Tag/Tag'
import './TagSection.css'

export default function TagSection(props){
    let list = [
        {
            tagName: 'zadash',
            color: 'blue',
        },
        {
            tagName: 'backstory',
            color: 'red',
        }
    ]

    list = list.map(tag => {
        return (
           <Tag tag={tag}/>
        )
    })

    return(
        <div className='tag-section'>
            <h2>Tags: </h2>
            {list}
        </div>
    )
}