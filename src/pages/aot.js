import React from "react";
import {motion} from 'framer-motion'
import { useEffect } from "react";
import { handleScroll, slideBottom } from "../animation";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import GridItem from "../components/charGridItem";
import ArtStyle from "../components/artStyle";

import aotScreen from "../assets/Screen Images/aotScrean.jpeg";
import aotbw from "../assets/Black-White/aotBw.png";
import aotArt from "../assets/art style/AOTArt.jpg";

// Eren
import E1 from "../assets/characters/eren/1.jpg";
import E2 from "../assets/characters/eren/2.jpg";
import E3 from "../assets/characters/eren/3.png";
import E4 from "../assets/characters/eren/4.jpg";

import AE1 from "../assets/characters/eren/a1.jpg";
import AE3 from "../assets/characters/eren/a3.jpg";
import AE4 from "../assets/characters/eren/a4.jpeg";

function Aot(data){

    const title = `Attack On Titan`;
    const head = `Beyond the Walls: Humanity's Last Stand`;
    const para = `
    "Attack on Titan" is a Japanese anime and manga series created by Hajime Isayama. The story is set in a world where humanity resides within enormous walled cities to protect themselves from the Titans, gigantic humanoid creatures that devour humans seemingly without reason. The narrative follows Eren Yeager, his adoptive sister Mikasa Ackerman, and their friend Armin Arlert, who witness the destruction of their hometown and the death of Eren's mother at the hands of the Titans.
    
    Driven by a desire for revenge and fueled by the mysterious power to transform into a Titan himself, Eren joins the military along with his friends to combat the Titan threat. As they uncover the secrets behind the Titans and the walls that protect humanity, they become entangled in a complex web of political intrigue, betrayals, and the mysteries of their own existence.
    
    The story explores themes of survival, freedom, sacrifice, and the consequences of humanity's actions. It takes unexpected turns, introducing new characters and revealing the intricate connections between the Titans and the history of the world. The narrative evolves into a gripping exploration of the human condition in the face of existential threats, questioning the nature of power and the lengths individuals will go to protect their freedom.`;
    const artStyle = `The art style of "Attack on Titan" by Hajime Isayama is characterized by sharp lines, detailed backgrounds, and expressive characters. Isayama's clean and precise linework adds a sense of clarity to the visuals, particularly during intense action sequences. The characters are drawn with a focus on conveying emotion, and facial expressions play a pivotal role in capturing the range of feelings experienced by the cast. Additionally, the detailed backgrounds, whether depicting the massive walled cities or the haunting landscapes beyond, contribute to the overall immersive experience. The art evolves throughout the series, becoming more refined and polished, while maintaining the series' signature intensity and impact.`;

    const eren= ``;
    const mikasa =``;
    const armin = ``;
    const levi = ``;
    const erwim = ``;
    const grisha = ``;
    const zeke = ``;
    const reiner = ``;
    const annie = ``;
    const ymir = ``;

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
        <motion.div className="aot"
        initial={{opacity:0}} e
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
        <NavBar></NavBar>

        <Info title={title} displayImg = {aotScreen} head={head} para={para} bwImg={aotbw}/>


        <div className="char-info">
            <h1>Character Info</h1>

            {/* Eren */}
            <div className="char-info-item">
                <h2>Eren Yeager</h2>
                <p className="reveal-element">
                    {eren}
                </p>
                <div className="image-grid-small">
                    <img className='slide-bottom' src={E1} alt="character 1"></img>
                    <img className='slide-bottom' src={E2} alt="character 2"></img>
                    <img className='slide-bottom' src={E3}alt="character 3"></img>
                    <img className='slide-bottom' src={E4}alt="character 3"></img>
                </div>
                <div className="image-grid-big">
                    <img className='slide-bottom' src={AE1} alt="character 1"></img>
                    <img className='slide-bottom' src={AE4} alt="character 2"></img>
                    <img className='slide-bottom' src={AE3}alt="character 3"></img>
                </div>
                <hr></hr>
            </div>


            <GridItem name = 'Mikasa Ackerman' des = {mikasa}
   
             />
            <GridItem name = 'Armin Arlert' des={armin}
 
            />
            <GridItem name = 'Levi Ackerman' des={levi}
 
            />
            <GridItem name = 'Erwin Smith' des={erwim}
 
            />
            <GridItem name = 'Grisha Yeager' des={grisha}
 
            />
            <GridItem name = 'Zeke Yeager' des={zeke}
 
            />
            <GridItem name = 'Reiner Braun' des={reiner}
 
            />
            <GridItem name = 'Annie Leonhart' des={annie}
 
            />
            <GridItem name = 'Ymir Fritz' des={ymir}
 
            />
        </div>

        <ArtStyle para={artStyle} img={aotArt} />

        <Footer />
        </motion.div>
    );
};

export default Aot;