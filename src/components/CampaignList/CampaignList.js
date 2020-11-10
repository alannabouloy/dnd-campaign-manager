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
        },
        {
            campaignName: 'Mighty Nein',
            players: 7,
            DM: 'Matthew Mercer',
            playingSince: '01-14-18',
            private: false,
        },
        {
            campaignName: 'Merry Misfits',
            players: 5,
            DM: 'GalarzaCat',
            playingSince: '07-24-20',
            private: true,
        }
    ]

    list = list.map((camp, i) => {
        return (
            <CampaignTab campaign={camp} key={i}/>
        )
    })
    
    return (
        <div className='campaign-list'>
            <ul class='campaigns'>
                {list}
            </ul>
        </div>
    )
}