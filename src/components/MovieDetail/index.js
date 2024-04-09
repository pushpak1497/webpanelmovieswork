import {Component} from 'react'
import Header from '../Header'

import './index.css'

class MovieDetail extends Component {
  state = {data: [], genres: [], cast: []}

  componentDidMount() {
    this.getData()
    this.getCastData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = 'ca3bf77d29d5c828ae2a4c596328af46'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
    )
    const data = await response.json()
    const {genres} = data
    this.setState({
      data,
      genres,
    })
  }

  getCastData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiKey = 'ca3bf77d29d5c828ae2a4c596328af46'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`,
    )
    const data = await response.json()
    const {cast} = data
    console.log(cast)
    this.setState({
      cast,
    })
  }

  render() {
    const {data, genres, cast} = this.state
    console.log(data)
    console.log(genres)
    const updatedData = {
      backgroundPath: data.backdrop_path,
      imageUrl: data.poster_path,
      name: data.original_title,
      rating: data.vote_average,
      runtime: data.runtime,
      releaseDate: data.release_date,
      overview: data.overview,
    }
    const updatedCastData = cast.map(each => ({
      castImageUrl: each.profile_path,
      castName: each.name,
      castCharacter: each.character,
    }))

    const {
      backgroundPath,
      imageUrl,
      name,
      rating,
      runtime,
      releaseDate,
      overview,
    } = updatedData

    return (
      <div className="detail-bg-container">
        <Header />
        <div className="card">
          <div className="img-name-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
              alt={name}
              className="detail-image"
            />
            <div>
              <h4>{name}</h4>
              <p>Rating: {rating}</p>
              <div>
                <ul className="list-container">
                  <p className="run-time">{runtime} min</p>
                  {genres.map(each => (
                    <li className="genre-type">{each.name}</li>
                  ))}
                </ul>
                <p>Release Date: {releaseDate}</p>
              </div>
            </div>
            <div className="overview-container">
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${backgroundPath}`}
              alt="image1"
              className="image1"
            />
          </div>
        </div>
        <div>
          <h1 className="heading">Cast</h1>
          <ul className="cast-list-container">
            {updatedCastData.map(each => (
              <li className="cast-list-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${each.castImageUrl}`}
                  alt={each.castName}
                  className="cast-image"
                />
                <p>{each.castName}</p>
                <p>{each.castCharacter}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MovieDetail
