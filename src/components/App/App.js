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


class App extends Component {
  
  state = {
        user: {
          username: '',
          first_name: '',
          last_name: '',
          email: ''
        },
        campaigns: [],
        notes: [],
        logOut : 'hidden'
  }

  componentDidMount(){
    if(TokenService.hasAuthToken()){
      this.setState({logOut: ''})
    }else {
      this.setState({logOut: 'hidden'})
    }
  }

  handleLogin = (username) => {
    this.setState({username})
    return ApiService.getUser(username)
        .then(user => {
          if(user){
            this.setState({user})
            this.setState({logOut: ''})
          } 
        })
  }
  renderCampaigns = username => {
    ApiService.getCampaignsByUser(username)
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
                onClickSubmit = {() => history.push(`/${this.state.user.username}/dash`)}
                />
            }}
          />
          <Route exact path = '/register' 
            render = {({history}) => {
              return <RegistrationPage
                onClickSubmit = {() => history.push(`/${this.state.user.username}/dash`)}
              />
            }}
          />
          <Route exact path = '/:user_name/dash' 
            render = {({history}) => {
              return <Dashboard
                onClick = {() => history.push(`/campaigns/${this.state.user.username}/create-campaign`)}
              />
            }}
          />
          <Route exact path = '/campaigns/:campaign_id'
             render = {({history}) => {
               return <CampaignPage
                location = {history.location}
                onClick = {(campId) => history.push(`/notes/${this.state.user.username}/${campId}/create-note`)}
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
