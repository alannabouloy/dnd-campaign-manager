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
          username: 'test',
        }
  }

  handleAddUser = newUser => {
    console.log('user added')
  }

  handleLogin = user => {
    console.log('user logged in')
  }

  render(){

    const value = {
      username: this.state.user.username,
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
          <Route exact path = '/:user_name/dash' component = {Dashboard}/>
          <Route exact path = '/campaigns/:campaign_id' component = {CampaignPage}/>
          <Route exact path = '/campaigns/create-campaign' component={CampaignFormPage}/>
          <Route exact path = '/notes/:note_id' component = {NotePage}/>
          <Route exact path = '/notes/create-note' component = {NoteFormPage}/>
        </div>
      </UserContext.Provider>
      
    );
  }
  
}

export default App;
