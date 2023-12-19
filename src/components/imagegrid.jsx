import React, { useEffect } from 'react';
import {handleScroll } from '../animation';

function ImageGrid(info){

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 
      
    const imageGrid = {
        borderRadius: '20px'
    }


      return <div className="ImageGrid reveal-element">
             <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={imageGrid} >
                <div className="my-3 p-3">
                    <h2 className="display-6">{info.head}</h2>
                </div>
                <a href={`/#/Anime${info.url}`}>
                  <img src={info.img} alt="Your Name" />
                </a>

            </div>
      </div> 

}

export default ImageGrid;