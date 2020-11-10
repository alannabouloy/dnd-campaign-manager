import React from 'react'
import CampaignTab from '../CampaignTab/CampaignTab'
import './CampaignList.css'

export default function CampaignList(props){
    let list = [
        {
            campaignName: 'Vox Machina',
            players: 7,
            DM: 'Matthew Mercer',
            playingSince: '03-12-15',
            private: false,
            id: 1,
        },
        {
            campaignName: 'Mighty Nein',
            players: 7,
            DM: 'Matthew Mercer',
            playingSince: '01-14-18',
            private: false,
            id: 2,
        },
        {
            campaignName: 'Merry Misfits',
            players: 5,
            DM: 'GalarzaCat',
            playingSince: '07-24-20',
            private: true,
            id: 3,
        }
    ]

    list = list.map(camp => {
        return (
            <CampaignTab campaign={camp} key={camp.id}/>
        )
    })
    
    return (
        <div className='campaign-list'>
            <ul className='campaigns'>
                {list}
            </ul>
        </div>
    )
}