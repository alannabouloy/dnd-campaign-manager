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


class App extends Component {
  
  state = {

  }


  render(){
    return (
      <div className="App">
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/login' component = {LoginPage}/>
        <Route exact path = '/register' component = {RegistrationPage}/>
        <Route exact path = '/:user_name/dash' component = {Dashboard}/>
        <Route exact path = '/campaigns/:campaign_id' component = {CampaignPage}/>
        <Route exact path = '/campaigns/create-campaign' component={CampaignFormPage}/>
        <Route exact path = '/notes/:note_id' component = {NotePage}/>
        <Route exact path = '/notes/create-note' component = {NoteFormPage}/>
      </div>
    );
  }
  
}

export default App;
