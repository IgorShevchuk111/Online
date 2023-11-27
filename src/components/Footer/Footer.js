import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container body-2">
        &copy; {new Date().getFullYear()} My Shop
    </div>
  )
}

export default Footer