import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-5 fw-bold shadow-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='dashboard'>Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='new'>Add Book & Author</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav