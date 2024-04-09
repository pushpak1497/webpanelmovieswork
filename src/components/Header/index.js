import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <p className="logo">MovieDb</p>
    <div className="header-links-container">
      <Link to="/" className="link">
        <p className="header-text">Popular</p>
      </Link>
      <Link to="/top-rated" className="link">
        <p className="header-text">Top Rated</p>
      </Link>
      <Link to="/upcoming" className="link">
        <p className="header-text">Upcoming</p>
      </Link>
      <input type="search" className="input-search" placeholder="Search Name" />
      <button type="button" className="button-search">
        Search
      </button>
    </div>
  </div>
)
export default Header
