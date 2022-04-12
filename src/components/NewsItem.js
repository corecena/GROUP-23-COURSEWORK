import React from 'react'

import './NewsItem.css'


const NewsItem = ( {title,description, url, urlToImage ,datePublished } ) => {
  return (
     
     <div className='cardContainer'>
       <div className='news-item'>
       <img  className ="news-img"  src={urlToImage}/>
       <h3><a href={url} className='href'>{title}</a></h3>
       <div className='desc'>{description}</div>
     </div>
     </div>
  )
}


export default NewsItem
