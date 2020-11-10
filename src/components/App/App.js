import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import CampaignFormPage from '../../routes/CampaignFormPage/CampaignFormPage';
import CampaignPage from '../../routes/CampaignPage/CampaignPage'


function App() {
  return (
    <div className="App">
      <CampaignPage/>
    </div>
  );
}

export default App;
