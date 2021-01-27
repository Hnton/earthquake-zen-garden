import React from 'react';
 
import { NavLink } from 'react-router-dom';
import { data } from '../data';
 
const Navigation = () => {
    return (
       
       <div style={{display: 'flex', backgroundColor: 'lightgrey', height:'125px', padding:'10px', alignItems: 'center'}}>
          <div style ={{marginRight: 'auto'}}>
               <NavLink to="/">
                  <img src={data.site.logoImage} alt="Realtor Logo">
                  </img>
               </NavLink>
            </div>
            <div style={{alignItems: 'center', color:'grey'}}>
               <h1>
                  {data.site.title}
               </h1>
            </div>
            <div style={{alignItems: 'center', marginLeft: 'auto'}}>
               <NavLink to="/Profile">Mikael Hinton Welcome {data.profile.firstName}</NavLink>
            </div>
       </div>
    );
}
 
export default Navigation;