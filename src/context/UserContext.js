import React from 'react'

export default React.createContext({
    username: '',
    userCredentials: '',
    addUser: () => {},
    login: () => {},
})