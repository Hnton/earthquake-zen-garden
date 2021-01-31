import React from 'react';

import { data } from "../data";
 
const Profile = () => {
    return (
      <div style={{paddingLeft:'35%', marginRight:'35%'}}>
         <h2 style={{textAlign:'center'}}>Profile</h2>
                     
            <div style={{display:'flex',width:'100%'}}>
               <img style={{height:'200px',width: '33.3%'}} src={data.profile.avatarImage} alt='Avatar'></img>
               
               <div style={{paddingLeft:'5%' , fontWeight:'bold', width:'40%', textAlign:'left'}}> 
                  <div style={{paddingBottom:'4%'}}>
                     First Name:
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     Last Name:
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     Phone:
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     Email:
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     Bio:
                  </div>
               </div> 
               <div style ={{width:'60%'}}>
               <div style={{paddingBottom:'4%'}}>
                     {data.profile.firstName}
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     {data.profile.lastName}
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     {data.profile.phone}
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     {data.profile.email}
                  </div>
                  <div style={{paddingBottom:'4%'}}>
                     {data.profile.bio}
                  </div>
               </div>       
            </div>      
         </div>
      );
   }
export default Profile;