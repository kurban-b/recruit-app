import { Switch, Route } from 'react-router-dom'
import Authorization from './Authorization'
import { AppBar, Typography } from '@material-ui/core'

function App() {
  return (
    <div className="app">
        <Switch>
          <Route path={'/'}>
            <Authorization />
          </Route>
          <Route path={'/main'}>

          </Route>
        </Switch>
    </div>
  )
}

export default App;
