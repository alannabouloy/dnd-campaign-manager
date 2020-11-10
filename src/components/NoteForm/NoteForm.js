import React from 'react'
import TextFormField from '../TextFormField/TextFormField'
import TextArea from '../TextArea/TextArea'
import TagSection from '../TagSection/TagSection'
import SubmitButton from '../SubmitButton/SubmitButton'
import AddButton from '../AddButton/AddButton'

export default function NoteForm(props){
    return (
        <div>
            <form id='add-note-form'>
                <TextFormField formId='note-name' label='Note Title: ' placeholder='In the Caverns'/>
                <TextArea formId='note-content' label='Note Content: ' className='content-box'/>

                <TagSection/>
                <TextFormField formId='new-tags' label='Add a tag: ' placeholder='dungeon crawl'/>
                <AddButton buttonText='Add Tag'/>
                <SubmitButton buttonText='Add Note'/>
            </form>
        </div>
    )
}