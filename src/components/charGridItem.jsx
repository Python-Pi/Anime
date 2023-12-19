import React from "react";
import { useEffect } from "react";
import { handleScroll, slideBottom } from "../animation";


function GridItem(data){
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(()=>{
        window.addEventListener('scroll', slideBottom);
        slideBottom();
        return()=>{
            window.removeEventListener('scroll', slideBottom);
        }
    }, [])
    return(
         <div className="char-info-item">
            <h2>{data.name}</h2>
            <p className="reveal-element">
                {data.des}
            </p>
            <div className="image-grid">
                <img className='slide-bottom' src={data.img1} alt="character 1"></img>
                <img className='slide-bottom' src={data.img2} alt="character 2"></img>
                <img className='slide-bottom' src={data.img3}alt="character 3"></img>
                <img className='slide-bottom'src={data.img4} alt="character 4"></img>
                <img className='slide-bottom' src={data.img5} alt="character 5"></img>
                <img className='slide-bottom' src={data.img6} alt="character 6"></img>
            </div>
            <hr></hr>
        </div>
    );
};

export default GridItem;