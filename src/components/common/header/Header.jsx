import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Cultura</Link>
              </li>
              <li>
                <Link to='/politics'>Politica</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Deportes</Link>
              </li>
              <li>
                <Link to='/boxed'>Economia</Link>
              </li>
              <li>
                <Link to='/reviews'>Opiniones</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
