import { Switch, Route } from 'react-router-dom'

import HomeScreen from './pages/Home'
import EditPetScreen from './pages/EditPet/index'
import RegisterPetScreen from './pages/RegisterPet'

export default function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/register-pet" exact component={RegisterPetScreen} />
      <Route path="/edit/:id" exact component={EditPetScreen} />
    </Switch>
  )
}
