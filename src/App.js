
import { Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";

import './App.css'
import Homebar from './components/navbar/Homebar';

import Weatherapi from '../src/components/Weatherapi'
import Business from '../src/components/center/Business'
import Entertainment from '../src/components/center/Entertainment'
import Education from '../src/components/center/Education'
import Health from '../src/components/center/Health'

import Global from '../src/components/center/Global'
import Sports from '../src/components/center/Sports'
import Politics from '../src/components/center/Politics'
function App() {

  
  return (
    <>
    <Helmet><script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script></Helmet>
   <div  style={{marginBottom:90}}>
     <Homebar/>
   </div>
   
 
    <Switch>
      <Route path="/weather">
         <Weatherapi/>
      </Route>
     <Route path="/" exact>
        <Global/>
     </Route>
     <Route path="/politics" exact>
       <Politics/>
     </Route>
     <Route path="/Health" exact>
       <Health/>
     </Route>
     <Route path="/Education" exact>
       <Education/>
     </Route>
      <Route path="/Business" exact>
       <Business/>
     </Route>
      <Route path="/Sports" exact>
       <Sports/>
     </Route>
      <Route path="/Entertainment" exact>
       <Entertainment/>
     </Route>

    </Switch>

     
    
     
   
    </>
  );
}

export default App;
