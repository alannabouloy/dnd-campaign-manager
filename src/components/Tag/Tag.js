import React from 'react'

export default function Tag(props){
    const tag = props.tag
    return (
        <div className={`tag ${tag.color}`}>
            <p>{tag.tagName}</p>
        </div>
    )
}