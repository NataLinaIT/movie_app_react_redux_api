import React from 'react'
import style from './Footer.module.css'

 let Footer = () =>  {
    return (
      <footer className={style.footer}>
          <div className={style.logo}>Movies DB</div>
          <div>
          <h5>THE BASICS</h5>
            <ul>
              <li>About TMDb</li>
              <li>Contact Us</li>
              <li>API</li>
              <li>System Status</li>
            </ul>
          </div>
          <div>
            <h5>LEGAL</h5>
            <ul>
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
      </footer>
    )
}

export default Footer