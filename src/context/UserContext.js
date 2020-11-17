import React from 'react'

export default React.createContext({
    user: {},
    campaigns : [],
    notes: [],
    addUser: () => {},
    login: () => {},
    campaignClick: () => {},
})