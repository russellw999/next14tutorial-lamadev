'use client'
import { useState, useEffect } from 'react'
const hydrationText = () => {

    useEffect(() => {
        setIsClient(true);
      },[])
    
      const a = Math.random();
    
      console.log(a)

  return (
    <div>
       {a}
    </div>
  );
}

export default hydrationText;
