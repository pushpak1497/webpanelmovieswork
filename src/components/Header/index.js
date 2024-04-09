import {Link} from 'react-router-dom'
import './index.css'
import WebPanelContext from '../../context/WebPanelContext'

const Header = () => (
  <WebPanelContext.Consumer>
    {value => {
      const {searchInput, changeSearch} = value
      const onChangeInput = event => {
        changeSearch(event.target.value)
      }

      return (
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
            <input
              type="search"
              value={searchInput}
              className="input-search"
              placeholder="Search Name"
              onChange={onChangeInput}
            />
          </div>
        </div>
      )
    }}
  </WebPanelContext.Consumer>
)
export default Header
