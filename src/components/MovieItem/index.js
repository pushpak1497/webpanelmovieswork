import {Link} from 'react-router-dom'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const updatedData = {
    movieName: details.original_title,
    imageUrl: details.poster_path,
    rating: details.vote_average,
    id: details.id,
  }
  const {movieName, imageUrl, rating, id} = updatedData
  return (
    <Link to={`movie/${id}`} className="link">
      <li className="list-item">
        <img
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          alt={movieName}
          className="image"
        />
        <p className="name text">{movieName}</p>
        <p className="rating text">Rating: {rating}</p>
      </li>
    </Link>
  )
}
export default MovieItem
