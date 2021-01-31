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
            <div style={{width:'100%', display:'flex'}}>

                <div style={{ width:'33.3%', textAlign: 'center'}}>
                    <h4> Place</h4>
                </div>
                <div style={{ width:'33.3%', textAlign: 'center'}}>
                    <h4> Magnitude</h4>
                </div>
                <div style={{ width:'33.3%', textAlign: 'center'}}>
                    <h4> Time</h4>
                </div>

            </div>
            <div style={{width:'100%', display:'flex'}}>

                <div style={{ width:'100%', textAlign: 'center'}}>
                {data.data.features.map(data => (                  
                    <div style={{paddingBottom:'2%', display:'flex', textAlign:'left'}} key={data.id}>
                        
                        <Link style={{width:'33.3%'}} to ={{pathname:'/Details', aboutProps:{name: data.id}}}>
                        {data.properties.place}
                        </Link>

                        <div style={{width:'33.3%', textAlign:'center'}}> {data.properties.mag}</div>

                        <div style={{width:'33.3%', textAlign:'center'}}> {convertTime(data.properties.time)}</div>
                    </div>
                ))}
                </div>
            </div>            
        </div>    
    );
}
export default home;