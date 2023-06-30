import { Switch, Route } from 'react-router-dom';

import RegisterScreen from './pages/Register/index';
import LoginScreen from './pages/Login/index';
import HomeScreen from './pages/Home';
import RegisterPetScreen from './pages/NewPet';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/" exact component={LoginScreen} />
      <Route path="/register-pet" exact component={RegisterPetScreen} />
      <Route path="/register" exact component={RegisterScreen} />
    </Switch>
  )
}