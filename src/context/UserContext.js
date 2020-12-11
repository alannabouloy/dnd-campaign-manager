import React from 'react'

export default React.createContext({
    user: {},
    campaigns : [],
    notes: [],
    logOut: '',
    loggingOut: () => {},
    addUser: () => {},
    login: () => {},
    campaignClick: () => {},
    getCampaigns: () => {},
})