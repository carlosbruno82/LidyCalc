import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'
import Calc from './pages/Calc'
import Result from './pages/Result'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Calc,
    Result,
  })
)

export default Routes;