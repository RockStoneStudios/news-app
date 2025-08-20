import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>Opinion es un increíble tema de revista para Blogger que es fácil de personalizar según tus necesidades.</p>
            <i className='fa fa-envelope'></i>
            <span> rockstonestudios666@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +57 3206209817</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/iglesia-Sopetran.jpg' alt='' />
              <p>Sopetrán Uno de los mejores municipios turisticos</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className='box'>
            <h3>Etiquetas</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Politica</span> <label>(5)</label>
              </li>
              <li>
                <span>Moda</span> <label>(6)</label>
              </li>
              <li>
                <span>Salud</span> <label>(7)</label>
              </li>
              <li>
                <span>Naturaleza</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            Hecho por <i className='fa fa-heart'></i> by Omar Ortiz
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
