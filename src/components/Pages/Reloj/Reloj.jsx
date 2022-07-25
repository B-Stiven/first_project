import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';



export const Reloj = () => {
        const [clockState, setClockState] = useState();
      
        useEffect(() => {
          setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
          }, 1000);
        }, []);
        
        return <div>
            <h1 style={{ fontSize: "55px" }}>Reloj</h1>
            <div style={{ fontSize: "55px", margin: "30px" }}>{clockState}</div>
        </div>;
      
}
