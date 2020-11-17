import TokenService from '../services/token-service'
import config from '../config'

const ApiService = {
    getUsers(){
        return fetch(`${config.API_ENDPOINT}/users`, {
            headers: {
                'authorization' : `basics:${TokenService.getAuthToken()},`
            },
        })
        .then(res =>  
            (!res.ok)
                ?res.json().then(e => Promise.reject(e))
                :res.json()
                )
    },
    getUser(username){
        return fetch(`${config.API_ENDPOINT}/users/${username}`, {
            headers: {
                'authorization': `basic:${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>  
                (!res.ok)
                    ?res.json().then(e => Promise.reject(e))
                    :res.json()
                    )
    },
    getCampaignsByUser(username){
        return fetch(`${config.API_ENDPOINT}/user_campaigns/${username}`, {
            headers: {
                'authorization': `basic${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )
    },
    getCampaign(campId){
        return fetch(`${config.API_ENDPOINT}/user_campaigns/${campId}`, {
            headers: {
                'authorization': `basic${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )

    },
    getCampaignNotes(campId){
        return fetch(`${config.API_ENDPOINT}/user_notes/${campId}`, {
            headers: {
                'authorization': `basic${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )   
    },
    getNote(campId, noteId){
        return fetch(`${config.API_ENDPOINT}/user_notes/${campId}/${noteId}`, {
            headers: {
                'authorization': `basic${TokenService.getAuthToken()}`,
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )

    },
    postNote(campId, newNote){
        return fetch(`${config.API_ENDPOINT}/user_notes/${campId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newNote),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )

    },
    postCampaign(newCampaign){
        return fetch(`${config.API_ENDPOINT}/user_campaigns`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newCampaign),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                    )

    }

}

export default ApiService;