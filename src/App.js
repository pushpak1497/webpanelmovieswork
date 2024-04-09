import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TopRated from './components/TopRated'
import MovieDetail from './components/MovieDetail'
import UpComing from './components/UpComing'
import WebPanelContext from './context/WebPanelContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: ''}

  changeSearch = searchInput => {
    this.setState({
      searchInput,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <WebPanelContext.Provider
        value={{searchInput, changeSearch: this.changeSearch}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top-rated" component={TopRated} />
          <Route exact path="/upcoming" component={UpComing} />
          <Route exact path="/movie/:id" component={MovieDetail} />
        </Switch>
      </WebPanelContext.Provider>
    )
  }
}

export default App
