import React from 'react';
import { data } from "../data";

const Details = (props) => {
   
   var PROPID = props.location.aboutProps.name;
   
   return (
       <div style={{textAlign:'center', paddingLeft:'35%', marginRight:'35%'}}>                       
         {data.data.features.filter(x => x.id === PROPID).map((data) => (         
            <div key = {data.id} style ={{paddingLeft:'10%', paddingRight:'10%'}}>
               <h2 style={{paddingBottom:'2%', textAlign:'center'}}>{data.properties.title}</h2>
            <div style={{display: 'flex', paddingLeft:'10%'}}>
               <div style={{width:'100%', textAlign:'left', justifyContent:'left', fontWeight:'bold', paddingLeft:'5%', marginRight:'-40%'}}>
                  <div style={{marginBottom: '5%'}}>
                     Place:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Magnitude:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Time:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Status:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Tsunami:
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     Type:
                  </div>   
               </div>
               <div style={{width:'100%', textAlign:'left', justifyContent:'left', paddingLeft:'0%', marginRight:'-17.5%'}}>
                  <div style={{marginBottom: '5%'}}>
                     {data.properties.place}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.properties.mag}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.properties.time}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.properties.status}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.properties.tsunami}
                  </div>
                  <div style={{marginBottom: '5%'}}>
                     {data.properties.type}
                  </div>   
               </div>
            </div>
            </div>
         ))}
      </div>
    );
}
export default Details;