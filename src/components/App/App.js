import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import CampaignFormPage from '../../routes/CampaignFormPage/CampaignFormPage';
import CampaignPage from '../../routes/CampaignPage/CampaignPage'
import NotePage from '../../routes/NotePage/NotePage';
import NoteFormPage from '../../routes/NoteFormPage/NoteFormPage';
import { Route } from 'react-router-dom';
import { Component } from 'react';
import UserContext from '../../context/UserContext'
import ApiService from '../../services/api-service';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';


class App extends Component {
  
  state = {
        user: {
          username: '',
        },
        campaigns: [],
        notes: [],
        logOut : 'hidden'
  }

  componentDidMount(){
    if(TokenService.hasAuthToken()){
      this.setState({logOut: ''})
      const username = TokenService.getUsername()
      this.setState({username})
    }else {
      this.setState({logOut: 'hidden'})
    }
  }

  handleLogin = (username, password) => {
    return AuthApiService.postLogin({
      username,
      user_password: password
    })
     .then(res => {
        TokenService.saveAuthToken(res.authToken, username)
    })
    .then(() => {
      const username = TokenService.getUsername()
      this.setState({username})
    })
  }
  renderCampaigns = username => {
    ApiService.getCampaignsByUser()
            .then(campaigns => {
                this.setState({campaigns});
            })
            .catch(error => {
                console.log({error});
            })
  }
  handleCampaignClick = id => {
    ApiService.getCampaignNotes(id)
        .then(notes => {
            console.log('got notes from api', notes)
            this.setState({notes})
        })
}
handleLogOut = () => {
  TokenService.clearAuthToken()
  this.setState({username: ''})
  this.setState({logOut: 'hidden'})
}

  render(){

    const value = {
      user: this.state.user,
      campaigns: this.state.campaigns,
      notes: this.state.notes,
      logOut: this.state.logOut,
      loggingOut: this.handleLogOut,
      login: this.handleLogin,
      campaignClick: this.handleCampaignClick,
      renderCampaigns: this.renderCampaigns
    }

    return (
      <UserContext.Provider value = {value}>
          <div className="App">
          <Route exact path = '/' component = {LandingPage}/>
          <Route exact path = '/login' 
            render = {({history}) => {
              return <LoginPage
                onClickSubmit = {() => history.push(`/${TokenService.getUsername()}/dash`)}
                />
            }}
          />
          <Route exact path = '/register' 
            render = {({history}) => {
              return <RegistrationPage
                onClickSubmit = {() => history.push(`/${TokenService.getUsername()}/dash`)}
              />
            }}
          />
          <Route exact path = '/:username/dash' 
            render = {({history}) => {
              return <Dashboard
                onClick = {() => history.push(`/campaigns/${TokenService.getUsername()}/create-campaign`)}
              />
            }}
          />
          <Route exact path = '/campaigns/:campaign_id'
             render = {({history}) => {
               return <CampaignPage
                location = {history.location}
                onClick = {(campId) => history.push(`/notes/${TokenService.getUsername()}/${campId}/create-note`)}
              />
             }}
            />
          <Route exact path = '/campaigns/:user_name/create-campaign'
             render = {({history}) => {
               return <CampaignFormPage
                onClickSubmit = {() => history.goBack()}
              />
            }}
          />
          <Route exact path = '/notes/:note_id' component = {NotePage}/>
          <Route exact path = '/notes/:user_name/:campaign_id/create-note'
           render = {({history}) => {
             return <NoteFormPage
              location = {history.location}
              onClickSubmit = {() => history.goBack()}
              />
           }}
          />
        </div>
      </UserContext.Provider>
      
    );
  }
  
}

export default App;
