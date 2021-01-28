import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';

function convertTime(time) {
    var t = new Date(time);
    var formatted = t.toISOString();
    return formatted;
};

const home = () => {
    return (
       <div style={{ paddingLeft:'30%', paddingRight:'30%'}}>
          <h1 style={{textAlign:'center'}}>{data.data.metadata.title}</h1>
            <div style={{display:'flex'}}>                
                <div style={{width:'100%', textAlign:'center'}}>
                    <h4>
                        Place
                        {data.data.features.map(data => (
                        
                            <div style={{paddingBottom:'2%', textAlign:'left'}} key={data.id}>
                                
                                <Link to ={{pathname:'/Details', aboutProps:{name: data.id}}}>
                                {data.properties.place}
                                </Link>
                            </div>
                        ))}
                    </h4>
                </div>
                <div style={{width:'100%', textAlign:'center'}}>
                    <h4>
                        Magnitude
                        {data.data.features.map(data => (
                            <div style={{paddingBottom:'2%', textAlign:'center'}} key={data.id}>{data.properties.mag}</div>
                        ))}
                    </h4>
                </div>
                <div style={{width:'100%', textAlign:'center'}}>
                    <h4>
                        Time
                        {data.data.features.map(data => (
                            
                            <div style={{paddingBottom:'2%', textAlign:'center'}} key={data.id}>{convertTime(data.properties.time)}</div>
                        ))}
                    </h4>
                </div>
            </div>
       </div>    
    );
}
export default home;