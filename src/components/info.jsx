import React, { useEffect } from "react";
import { handleScroll } from "../animation";

function Info(data){

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return <div>
        <div id='MainImageContainer'>
            <img id='MainImage' src={data.displayImg} alt='Anime'></img>
            <div className="centered reveal-element">{data.title}</div>
        </div>

        <div id='MainText'>
            <h1 className="reveal-element">{data.head}</h1>
            <div id='MainTextPara'>
                <p className="reveal-element">
                    {data.para}
                </p>
            </div>
            </div>
            
            <div id='MainCards'>
            <img src={data.bwImg} alt='jujutsu'></img>
        </div>
    </div>
};

export default Info;