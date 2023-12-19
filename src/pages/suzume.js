import React from "react";
import {motion} from 'framer-motion'

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import GridItem from "../components/charGridItem";
import ArtStyle from "../components/artStyle";

import suzumeDis from "../assets/Screen Images/suzume.jpg";
import suzumeBw from "../assets/Black-White/suzume.png";
import suzumeArt from "../assets/art style/suzume.jpg";

// Suzume 
import M1 from "../assets/characters/suzume/1.jpg";
import M2 from "../assets/characters/suzume/2.jpg";
import M3 from "../assets/characters/suzume/3.jpg";
import M4 from "../assets/characters/suzume/4.jpg";
import M5 from "../assets/characters/suzume/5.jpg";
import M6 from "../assets/characters/suzume/6.jpg";

// Souta 
import T1 from "../assets/characters/souta/1.jpg";
import T2 from "../assets/characters/souta/2.jpg";
import T3 from "../assets/characters/souta/3.jpg";
import T4 from "../assets/characters/souta/4.jpg";
import T5 from "../assets/characters/souta/5.webp";
import T6 from "../assets/characters/souta/6.png";

// Daijin
import Z1 from "../assets/characters/daijin/1.png";
import Z2 from "../assets/characters/daijin/2.jpg";
import Z3 from "../assets/characters/daijin/3.jpg";
import Z4 from "../assets/characters/daijin/4.jpg";
import Z5 from "../assets/characters/daijin/5.jpg";
import Z6 from "../assets/characters/daijin/6.jpg";

function Suzume(data){

    const title = `Suzume`;
    const head = `Doors to the Under World`;
    const para = `Suzume is a 17-year-old girl who lives with her aunt in Kyushu. She finds a talking cat named Daijin, who is actually a stone keystone that protects a door from a worm that causes earthquakes. He asks her to help him close the doors that are standing alone on their frames across Japan. She agrees and meets Souta, a young man who can sense the doors and their contents. He is also a keystone himself, and Daijin transfers his responsibility to him. Suzume and Souta become friends and fall in love. They also learn that Suzume's sister Tamaki, a journalist, has a secret connection to one of the doors that is being worshipped by a cult led by a famous actor named Minoru Okabe. He wants to use the doors for his own purposes and tries to stop Suzume and Souta from closing them. Suzume and Souta face many challenges and dangers as they try to close the doors. They also discover that the doors are reflections of their own identities, destinies, loves, and sacrifices. They have to make difficult choices and face the consequences of their actions. Daijin sacrifices himself to save Suzume and Souta's lives. The story is a fantasy adventure that explores themes such as courage, friendship, romance, and sacrifice.`;
   
    const suzume = `A 17-year-old high school girl who lives with her aunt in a quiet town in Kyushu. She is curious, adventurous, and kind-hearted. She meets a young man named Souta Munakata who is looking for doors that lead to different worlds. She decides to help him close the doors that are causing disasters across Japan.`;
    const souta = `A mysterious young man who travels around Japan looking for doors that are standing alone on their frames. He has a special ability to sense the presence of the doors and their contents. He is calm, intelligent, and loyal. He forms a bond with Suzume and teaches her about the doors and their origins.`;
    const daijin = `Daijin is a talking cat that Suzume finds at an abandoned resort. He is actually a keystone, a stone statue that protects a door from a worm that causes earthquakes. He asks Suzume to help him close the doors that are standing alone on their frames across Japan. He also transfers his responsibility as a keystone to Souta, a young man who can sense the doors and their contents. He forms a bond with Suzume and teaches her about the doors and their origins. He sacrifices himself to save Suzume and Souta's lives by returning to his original form as a keystone.`;
    const artStyle = `The film features a variety of art styles, such as traditional Japanese painting, manga, and digital art. The character designs are inspired by Shinkai’s previous works, such as Your Name and Weathering with You, as well as by the 2011 Tōhoku earthquake and tsunami, which was the main source of inspiration for the film’s plot. The film uses vibrant colors, dynamic lighting, and expressive facial expressions to convey the emotions and personalities of the characters. The film also incorporates elements of fantasy and surrealism, such as doors that lead to different worlds, a talking chair that acts as a guide, and a colossal worm that causes earthquakes. The film’s art style reflects its themes of adventure, friendship, courage, and healing`;
    return(
        <motion.div className="suzume"
        initial={{opacity:0}} e
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
        <NavBar></NavBar>

        <Info title={title} displayImg = {suzumeDis} head={head} para={para} bwImg={suzumeBw}/>

        <div className="char-info">
            <h1>Character Info</h1>
            <GridItem name ='Suzume Iwato' des = {suzume} 
            img1={M1}
            img2={M2} 
            img3={M3} 
            img4={M4} 
            img5={M5} 
            img6={M6} 
            />
            <GridItem name = 'Souta Munakata' des = {souta}
            img1={T1}
            img2={T2} 
            img3={T3} 
            img4={T4} 
            img5={T5} 
            img6={T6} 
             />
            <GridItem name = 'Daijin' des={daijin}
            img1={Z1}
            img2={Z2} 
            img3={Z3} 
            img4={Z4} 
            img5={Z5} 
            img6={Z6} 
            />
        </div>

        <ArtStyle para={artStyle} img={suzumeArt} />

        <Footer />
        </motion.div>
    );
};

export default Suzume;