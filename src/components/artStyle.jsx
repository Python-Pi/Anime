import React, { useEffect } from 'react';
import {handleScroll } from '../animation';

function ArtStyle(data){
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 
      
    return(
        <div className="art-style">
            <h1 className='reveal-element'>Art Style</h1>
            <img src={data.img} alt="Demon-Slayer"></img>
            <p className='reveal-element'>
                {data.para}
            </p>
        </div>
    );
};

export default ArtStyle;