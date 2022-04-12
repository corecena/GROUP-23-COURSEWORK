import React from 'react'
import './news.css'
import logo from './logo192.png'
function NewsComponent({imageUrl, title, description}) {
  return (
    <div className='container'>
        <img className="image " src={logo} alt ="hello"/>
        <p> {title }</p>
        <div>{description}</div>
    </div>
  )
}

export default NewsComponent