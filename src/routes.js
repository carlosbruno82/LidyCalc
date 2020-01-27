import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'
import Calc from './pages/Calc'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Calc,
  })
)

export default Routes;