import { Switch, Route } from 'react-router-dom'

import HomeScreen from './pages/Home'
import RegisterPetScreen from './pages/NewPet'

export default function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/register-pet" exact component={RegisterPetScreen} />
    </Switch>
  )
}
