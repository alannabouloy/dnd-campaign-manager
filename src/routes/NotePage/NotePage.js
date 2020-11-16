import React from 'react'
import {Component} from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Header from '../../components/Header/Header'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import TagSection from '../../components/TagSection/TagSection'
import StartingButton from '../../components/StartingButton/StartingButton'
import AddButton from '../../components/AddButton/AddButton'
import './NotePage.css'

export default class NotePage extends Component {
    state = {
        note: null,
        campaign: null,
    }

    componentDidMount() {
       const path = this.props.match.params
       console.log(path) 
    }

    render(){
        return (
            <div className='note-page'>
                <Header className='note-head' heading='My Tragic Backstory' subheading='myusername'/>
                <SectionTitle className='camp-name' text='Campaign: Mighty Nein'/>
                <ContentBlock className='note-content'/>
                <TagSection/>
                <AddButton buttonText='Add Tag'/>
                <div className='nav-buttons'>
                    <StartingButton className='back-button' buttonText='Back to Notes'/>
                    <StartingButton className='edit-button' buttonText='Edit Note'/>
                </div>
            </div>
        )
    }
}