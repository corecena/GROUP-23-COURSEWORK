import React ,{useState} from 'react'
import Helmet from 'react-helmet'
import {Link } from 'react-router-dom'

import './homebar.css'
function Homebar() {
  const [search, setSearch] = useState('');
  
 
  return (
  

     <>
  <Helmet><script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script></Helmet>
   
    <nav  className='home'>
      <input  type="checkbox" id='check'/> 

      <label htmlFor="check" className='checkbtn'>
        <i className='fas fa-bars'></i>
      </label>
      <label className='logo'>News Everywhere</label>
      
        { <ul>
          <li><Link to="/weather" className='link'> Weather</Link></li>
           <li><Link to="/" className='active link'> Home</Link></li>
          <li><Link to="/politics" className="link"> Politics</Link></li>
          <li><Link to="/Education" className="link" >Education</Link></li>
           <li><Link to="/Sports" className="link"> Sports</Link></li>
            <li><Link to="/Health" className="link"> Health</Link></li>
            <li><Link to="/Business" className="link"> Business</Link></li>
            <li><Link to="/Entertainment" className="link"> Entertaintment</Link></li> 
    
        </ul>
        } 

    </nav>
    </>
    
  )
}
  
export default Homebar