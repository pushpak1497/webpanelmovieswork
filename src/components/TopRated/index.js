import {Component} from 'react'
import {IoChevronBack, IoChevronForward} from 'react-icons/io5'
import Loader from 'react-loader-spinner'
import MovieItem from '../MovieItem'
import Header from '../Header'

import './index.css'

class TopRated extends Component {
  state = {data: [], count: 1, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {count} = this.state
    const apiKey = 'ca3bf77d29d5c828ae2a4c596328af46'
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${count}
`)
    const data = await response.json()

    const {results} = data
    this.setState({
      data: results,
      isLoading: false,
    })
  }

  onClickIncrease = () => {
    this.setState(
      prevState => ({
        count: prevState.count + 1,
      }),
      this.getData,
    )
  }

  onClickDecrease = () => {
    const {count} = this.state
    if (count > 1) {
      this.setState(
        prevState => ({
          count: prevState.count - 1,
        }),
        this.getData,
      )
    }
  }

  render() {
    const {data, isLoading} = this.state

    return isLoading ? (
      <div className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    ) : (
      <div className="bg-container">
        <Header />
        <ul className="list-container">
          {data.map(each => (
            <MovieItem details={each} key={each.id} />
          ))}
        </ul>
        <div className="upcoming-button-container">
          <button
            type="button"
            aria-label="button"
            onClick={this.onClickDecrease}
            className="pagination-button"
          >
            <IoChevronBack className="pagination-icon" />
          </button>
          <button
            type="button"
            aria-label="button"
            onClick={this.onClickIncrease}
            className="pagination-button"
          >
            <IoChevronForward className="pagination-icon" />
          </button>
        </div>
      </div>
    )
  }
}
export default TopRated
