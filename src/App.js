import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TopRated from './components/TopRated'
import MovieDetail from './components/MovieDetail'
import UpComing from './components/UpComing'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/top-rated" component={TopRated} />
    <Route exact path="/upcoming" component={UpComing} />
    <Route exact path="/movie/:id" component={MovieDetail} />
  </Switch>
)

export default App