import { Switch, Route } from 'react-router-dom'

import HomeScreen from './pages/Home'
import RegisterPetScreen from './pages/NewPet'
import PetInfoScreen from './pages/PetInfo/index'

export default function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/register-pet" exact component={RegisterPetScreen} />
      <Route path="/pet-info" exact component={PetInfoScreen} />
    </Switch>
  )
}
