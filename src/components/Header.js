import React from 'react'
import { data } from "../data";

function Header() {
  return (
    <div style={{backgroundColor: 'lightgrey', height:'125px', marginTop:'-21px'}}>
        <div style ={{display: 'flex', justifyContent: 'Center', alignItems: 'center', padding:'25px'}}>
            <h1 style={{color:'grey'}}>
                {data.site.title}
            </h1>
            <h5>
                {data.profile.firstName}
            </h5>
        </div>
    </div>
  )
}

export default Header