import { useState } from "react"
import { NavLink } from "react-router-dom"



export function AppHeader({ onFilterChange }) {
  const [isDropDownFilterOpen, setIsDropDownFilterOpen] = useState(false)

  function toggleFilterMenu() {
    setIsDropDownFilterOpen((prevState) => !prevState)
  }

  function handleFilterClick(filter) {
    onFilterChange(filter)
  }


  return (
    <section className="app-header">
      <div>
        <h1>Gmail</h1>
        <img src="../src/assets/imgs/gmail-icon.png" alt="logo"/>
      </div>
      <button className="btn btn-compose">Compose</button>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
          <div className="dropdown-menu">
            <button className="btn btn-emails" onClick={toggleFilterMenu}>Emails
              <span className="dropdown-icon">
              {isDropDownFilterOpen ? '▲' : '▼'}
              </span>
          </button>
          
              {isDropDownFilterOpen && (
              <div className="dropdown-links">
                <button className="btn" onClick={() => handleFilterClick('inbox')}>Inbox</button>
                <button className="btn" onClick={() => handleFilterClick('isStarred')}>Starred</button>
                <button className="btn"onClick={() => handleFilterClick('sentAt')}>Sent</button>
              </div>
              )}
          </div>
          </nav>
        </section>
    )
}