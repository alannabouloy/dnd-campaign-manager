import config from '../config'

const TokenService = {
    makeBasicAuthToken(username, password){
        return window.btoa(`${username}:${password}`)
    },
    saveAuthToken(token){
        window.localStorage.setItem(config.TOKEN_KEY, token)
    }
}

export default TokenService