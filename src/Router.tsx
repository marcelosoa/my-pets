import { Switch, Route } from 'react-router-dom'

import HomeScreen from './pages/Home'
import RegisterPetScreen from './pages/NewPet'
import EditPetScreen from './pages/EditPet/index'

export default function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/register-pet" exact component={RegisterPetScreen} />
      <Route path="/edit" exact component={EditPetScreen} />
    </Switch>
  )
}
