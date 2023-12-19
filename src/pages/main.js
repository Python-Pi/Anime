import React from "react";
import {motion} from 'framer-motion'


import NavBar from "../components/navbar";
import Info from "../components/info";
import Grid from "../components/grid";
import Footer from "../components/footer";

import CycleImg from "../assets/cycle.jpg"
import JujutsuImage from '../assets/Black-White/jujutsu.png'

const title = `ANIME`;
const head = `Welcome To The World Of Anime`;
const para = `Embark on a captivating journey into the world of anime, where storytelling becomes an art form and emotions unfold in vibrant animation. Anime's greatness lies in its ability to transport you to fantastical realms, offering a diverse spectrum of genres from exhilarating adventures to poignant dramas. Explore the profound themes and intricate character developments that make anime a unique and compelling medium. Dive into the extraordinary and experience the magic of anime – a world where every frame tells a story and every emotion is beautifully animated.`;

function Main(){
    return(
        <motion.div
        initial={{opacity:0}} 
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
            <NavBar />

            <Info para = {para} head = {head} title = {title} displayImg = {CycleImg} bwImg = {JujutsuImage}/>

            <Grid />

            <Footer />
        </motion.div>
    );
};

export default Main;