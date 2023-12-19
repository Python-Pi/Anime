import React from "react";
import {motion} from 'framer-motion'

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import GridItem from "../components/charGridItem";
import ArtStyle from "../components/artStyle";

import JujutsuScreen from "../assets/Screen Images/jujutsu.jpg";
import JujutsuArt from "../assets/art style/jujutsu.jpg";
import jujutsuBw from "../assets/Black-White/jujutsu-bw.png";

// Yuji 
import M1 from "../assets/characters/yuji/1.avif";
import M2 from "../assets/characters/yuji/2.webp";
import M3 from "../assets/characters/yuji/3.png";
import M4 from "../assets/characters/yuji/4.webp";
import M5 from "../assets/characters/yuji/5.jpeg";
import M6 from "../assets/characters/yuji/6.jpeg";

// Megumi 
import T1 from "../assets/characters/megumi/1.png";
import T2 from "../assets/characters/megumi/2.jpeg";
import T3 from "../assets/characters/megumi/3.jpeg";
import T4 from "../assets/characters/megumi/4.jpeg";
import T5 from "../assets/characters/megumi/5.jpeg";
import T6 from "../assets/characters/megumi/6.jpeg";

// Gojo

import Z1 from "../assets/characters/gojo/1.jpeg";
import Z2 from "../assets/characters/gojo/2.jpeg";
import Z3 from "../assets/characters/gojo/3.jpeg";
import Z4 from "../assets/characters/gojo/4.png";
import Z5 from "../assets/characters/gojo/5.png";
import Z6 from "../assets/characters/gojo/6.png";


// Sukuna
import Q1 from "../assets/characters/sukuna/1.jpeg";
import Q2 from "../assets/characters/sukuna/2.jpg";
import Q3 from "../assets/characters/sukuna/3.jpg";
import Q4 from "../assets/characters/sukuna/4.jpeg";
import Q5 from "../assets/characters/sukuna/5.jpeg";
import Q6 from "../assets/characters/sukuna/6.png";

// Geto
import W1 from "../assets/characters/geto/1.jpeg";
import W2 from "../assets/characters/geto/2.jpeg";
import W3 from "../assets/characters/geto/3.jpg";
import W4 from "../assets/characters/geto/4.jpg";
import W5 from "../assets/characters/geto/5.png";
import W6 from "../assets/characters/geto/6.jpg";


function JujutsuK(){

    const title = `Jujutsu Kaisen`;
    const head = ` A Symphony of Curses and Courage`;
    const para = `"Jujutsu Kaisen" follows the story of Yuji Itadori, a high school student with remarkable physical abilities. When Yuji's grandfather passes away, he encounters a cursed object containing a malevolent Curse. In a series of events, Yuji and his friends unwittingly unleash a host of Curses upon themselves. To save his friends and protect others, Yuji decides to delve into the world of jujutsu sorcery. He joins Tokyo Metropolitan Jujutsu Technical High School, where he trains alongside other students under the guidance of skilled sorcerers like Satoru Gojo. The main objective is to collect and consume the fingers of Ryomen Sukuna, a powerful and malevolent Curse, to prevent the resurgence of Sukuna and the potential catastrophe it could bring. The series is known for its intense battles, intricate world-building, and exploration of themes like life, death, and the supernatural.`;

    const yuji=`The main protagonist of "Jujutsu Kaisen," Yuji is a high school student with remarkable physical abilities. He is athletic, kind-hearted, and initially uninvolved in the world of curses. His life takes a turn when he encounters a cursed object and gets entangled in the dangerous realm of jujutsu sorcery.`;
    const megumi = `A first-year student at Tokyo Metropolitan Jujutsu Technical High School, Megumi is a skilled jujutsu sorcerer with a serious and stoic demeanor. He possesses the ability to summon Shikigami, which are creatures with various abilities that aid him in battles against curses.`;
    const gojo = `Satoru Gojo is a teacher at the Jujutsu Technical High School and one of the most powerful jujutsu sorcerers in the series. Known for his charismatic personality and exceptional strength, Gojo is a mentor to the main characters. He employs the Limitless Cursed Technique and the Six Eyes, making him a formidable force.`;
    const sukuna = `Also known as Ryomen Sukuna, Sukuna is a legendary and immensely powerful curse. He was a malevolent sorcerer in the past who terrorized the world. After his defeat, Sukuna's remains were divided into cursed fingers. Yuji Itadori accidentally consumes one of these fingers, leading to the coexistence of Sukuna's consciousness within Yuji's body.`;
    const geto = `Suguru Geto is a former student of Tokyo Metropolitan Jujutsu Technical High School who turned antagonist. He is involved in dark activities related to curses and holds a complex philosophy about the relationship between humans and curses. Geto becomes a significant adversary in the series.`;

    const artStyle = `Jujutsu Kaisen boasts a distinctive and captivating art style characterized by detailed character designs, expressive facial features that convey a spectrum of emotions, and dynamic action sequences filled with impactful poses and creative panel layouts. The series excels in rendering detailed backgrounds that enrich the storytelling environment, and it effectively visualizes the concepts of cursed energy and jujutsu techniques through unique patterns and symbols. The artist, Gege Akutami, brings a harmonious blend of realism and stylization to create a visually engaging and immersive experience, especially during intense battles between jujutsu sorcerers and curses.`;

    return(
        <motion.div className="jujutsu"
        initial={{opacity:0}} e
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
        <NavBar></NavBar>

        <Info title={title} displayImg = {JujutsuScreen} head={head} para={para} bwImg={jujutsuBw}/>

        <div className="char-info">
            <h1>Character Info</h1>
            <GridItem name ='Yuji Itadori' des = {yuji} 
            img1={M1}
            img2={M2} 
            img3={M3} 
            img4={M4} 
            img5={M5} 
            img6={M6} 
            />
            <GridItem name = 'Megumi Fushiguro' des = {megumi}
            img1={T1}
            img2={T2} 
            img3={T3} 
            img4={T4} 
            img5={T5} 
            img6={T6} 
             />
            <GridItem name = 'Satoru Gojo' des={gojo}
            img1={Z1}
            img2={Z2} 
            img3={Z3} 
            img4={Z4} 
            img5={Z5} 
            img6={Z6} 
            />
            <GridItem name = 'Sukuna (Ryomen Sukuna)' des={sukuna}
            img1={Q1}
            img2={Q2} 
            img3={Q3} 
            img4={Q4} 
            img5={Q5} 
            img6={Q6} 
            />
            <GridItem name = 'Suguru Geto' des={geto}
            img1={W1}
            img2={W2} 
            img3={W3} 
            img4={W4} 
            img5={W5} 
            img6={W6} 
            />
        </div>

        <ArtStyle para={artStyle} img={JujutsuArt} />

        <Footer />
        </motion.div>

    );
};

export default JujutsuK;