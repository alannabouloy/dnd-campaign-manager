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


class App extends Component {
  
  state = {
        user: {
          username: 'mattmercer',
          password: '',
          userCredentials: ''
        }
  }

  handleAddUser = newUser => {
    console.log('user added')
  }

  handleLogin = (userCredentials) => {
    this.setState({userCredentials : userCredentials});
    console.log(this.state.user.userCredentials)
  }

  render(){

    const value = {
      username: this.state.user.username,
      userCredentials: this.state.user.userCredentials,
      addUser: this.handleAddUser,
      login: this.handleLogin
    } 

    return (
      <UserContext.Provider value = {value}>
          <div className="App">
          <Route exact path = '/' component = {LandingPage}/>
          <Route exact path = '/login' 
            render = {({history}) => {
              return <LoginPage
                onClickSubmit = {() => history.push(`/${value.username}/dash`)}
                />
            }}
          />
          <Route exact path = '/register' 
            render = {({history}) => {
              return <RegistrationPage
                onClickSubmit = {() => history.push(`/${value.username}/dash`)}
              />
            }}
          />
          <Route exact path = '/:user_name/dash' 
            render = {({history}) => {
              return <Dashboard
                onClick = {() => history.push(`/campaigns/${value.username}/create-campaign`)}
              />
            }}
          />
          <Route exact path = '/campaigns/:campaign_id'
             render = {({history}, props) => {
               return <CampaignPage
                location = {history.location}
                onClick = {() => history.push(`/notes/${value.username}/create-note`)}
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
          <Route exact path = '/notes/:user_name/create-note'
           render = {({history}) => {
             return <NoteFormPage
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
