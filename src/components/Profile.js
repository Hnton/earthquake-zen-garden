import React from 'react';

import { data } from "../data";
 
const Profile = () => {
    return (
       <div style={{textAlign:'center', paddingLeft:'35%', marginRight:'35%'}}>
          <h2 >Profile</h2>
            <div style={{display:'flex', textAlign: 'left'}}>
               <div>
                  <img style={{width: '175px'}} src={data.profile.avatarImage} alt='Avatar'></img>
               </div>
               <div style={{width:'100%', justifyContent:'left', fontWeight:'bold', paddingLeft:'5%', marginRight:'-17.5%'}}>
                  <div style={{marginBottom: '5%'}}>
                     First Name:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Last Name:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Phone:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Email:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Bio:
                  </div>                
               </div>
               <div style={{width:'100%', justifyContent:'left'}}>
                  <div style={{marginBottom: '5%'}}>
                     {data.profile.firstName}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.profile.lastName}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.profile.phone}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.profile.email}
                  </div>
                  <div style={{marginBottom: '10%'}}>
                     {data.profile.bio}
                  </div>                
               </div>
            </div>      
       </div>
    );
}
 
export default Profile;