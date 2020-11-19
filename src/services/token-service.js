import config from '../config'

const TokenService = {
    makeBasicAuthToken(username, password){
        return window.btoa(`${username}:${password}`)
    },
    saveAuthToken(token, username){
        window.localStorage.setItem(config.TOKEN_KEY, token)
        window.localStorage.setItem(config.USERNAME, username)
    },
    getAuthToken(){
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    getUsername(){
        return window.localStorage.getItem(config.USERNAME)
    },
    clearAuthToken(){
        window.localStorage.removeItem(config.TOKEN_KEY)
        window.localStorage.removeItem(config.USERNAME)
    },
    hasAuthToken(){
        return !!TokenService.getAuthToken()
    }

}

export default TokenService