import React from 'react';
import { data } from "../data";

const Details = (props) => {
   
   var PROPID = props.location.aboutProps.name;
   
   return (
      <div style={{textAlign:'center'}}>                               
         {data.data.features.filter(x => x.id === PROPID).map((data) => (         
            <div key = {data.id} style ={{}}>
               <h2 style={{ textAlign:'center'}}>{data.properties.title}</h2> 
               <div style={{display: 'flex'}}>
                  <div style={{paddingLeft:'40%', paddingRight:'40%', width:'100%'}}>
                     
                     <div style={{paddingBottom:'2%', display:'flex'}}>
                        <div style={{ fontWeight:'bold', width:'30%', textAlign: 'left'}}>
                           <span>Place</span>    
                        </div>
                        <div style={{ width:'70%', textAlign: 'Left'}}>
                           {data.properties.place}
                        </div>
                     </div>
                     
                     <div style={{paddingBottom:'2%',display:'flex'}}>
                        <div style={{ fontWeight:'bold', width:'30%', textAlign: 'left'}}>
                           <span>Magnitude</span>    
                        </div>
                        <div style={{ width:'70%', textAlign: 'Left'}}>
                           {data.properties.mag}
                        </div>
                     </div>

                     <div style={{paddingBottom:'2%',display:'flex'}}>
                        <div style={{ fontWeight:'bold', width:'30%', textAlign: 'left'}}>
                           <span>Time</span>    
                        </div>
                        <div style={{ width:'70%', textAlign: 'Left'}}>
                           {data.properties.time}
                        </div>
                     </div>

                     <div style={{paddingBottom:'2%',display:'flex'}}>
                        <div style={{ fontWeight:'bold', width:'30%', textAlign: 'left'}}>
                           <span>Status</span>    
                        </div>
                        <div style={{ width:'70%', textAlign: 'Left'}}>
                           {data.properties.status}
                        </div>
                     </div>

                     <div style={{paddingBottom:'2%',display:'flex'}}>
                        <div style={{ fontWeight:'bold', width:'30%', textAlign: 'left'}}>
                           <span>Tsunami</span>    
                        </div>
                        <div style={{ width:'70%', textAlign: 'Left'}}>
                           {data.properties.tsunami}
                        </div>
                     </div>

                     <div style={{paddingBottom:'2%',display:'flex'}}>
                        <div style={{ fontWeight:'bold', width:'30%', textAlign: 'left'}}>
                           <span>Type</span>    
                        </div>
                        <div style={{ width:'70%', textAlign: 'Left'}}>
                           {data.properties.type}
                        </div>
                     </div>
                  </div>             
               </div>
            </div>
         ))}
      </div>
   );
}
export default Details;