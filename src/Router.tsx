import { Switch, Route } from 'react-router-dom'

import HomeScreen from './pages/Home'
import RegisterPetScreen from './pages/NewPet'
import EditPetScreen from './pages/EditPet/index'
import NewPetForm from './pages/NewPetForm'

export default function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/register-pet" exact component={NewPetForm} />
      <Route path="/edit" exact component={EditPetScreen} />
    </Switch>
  )
}
