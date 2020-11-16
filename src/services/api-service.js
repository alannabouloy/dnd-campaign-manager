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
    getUser(userId){
        return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
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
    getCampaignsByUser(userId){
        return fetch(`${config.API_ENDPOINT}/users/${userId}/campaigns`, {
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
    getCampaign(userId, campId){
        return fetch(`${config.API_ENDPOINT}/users/${userId}/campaigns/${campId}`, {
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
    getCampaignNotes(userId, campId){
        return fetch(`${config.API_ENDPOINT}/campaigns/${campId}/notes`, {
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
        return fetch(`${config.API_ENDPOINT}/campaigns/${campId}/notes/${noteId}`, {
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
        return fetch(`${config.API_ENDPOINT}/campaigns/${campId}`, {
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
    postCampaign(userId, newCampaign){
        return fetch(`${config.API_ENDPOINT}/users/${userId}/campaigns`, {
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