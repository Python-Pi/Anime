import React from "react";
import {motion} from 'framer-motion'


import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import CharGrid from "../components/characterGridDemon";
import ArtStyle from "../components/artStyle";

import DemonImg from "../assets/Screen Images/demon.jpg";
import TanjiroBW from "../assets/Black-White/tanjiroImg.png";
import DemonArt from "../assets/art style/demon.jpg";


// Tanjiro Images
import T1 from "../assets/characters/tanjiro/1.jpg";
import T2 from "../assets/characters/tanjiro/2.png";
import T3 from "../assets/characters/tanjiro/3.jpg";
import T4 from "../assets/characters/tanjiro/4.jpg";
import T5 from "../assets/characters/tanjiro/5.jpg";
import T6 from "../assets/characters/tanjiro/6.jpg";

// Nezuko Images
import N1 from "../assets/characters/nezuko/1.jpg"
import N2 from "../assets/characters/nezuko/2.jpg"
import N3 from "../assets/characters/nezuko/3.jpg"
import N4 from "../assets/characters/nezuko/4.jpg"
import N5 from "../assets/characters/nezuko/5.jpg"
import N6 from "../assets/characters/nezuko/6.jpg"

// Zenitsu
import Z1 from "../assets/characters/zenitsu/1.jpg";
import Z2 from "../assets/characters/zenitsu/2.jpg";
import Z3 from "../assets/characters/zenitsu/3.png";
import Z4 from "../assets/characters/zenitsu/4.jpg";
import Z5 from "../assets/characters/zenitsu/5.jpg";
import Z6 from "../assets/characters/zenitsu/6.jpg";

// Insouke
import I1 from "../assets/characters/inosuke/1.jpg";
import I2 from "../assets/characters/inosuke/2.jpg";
import I3 from "../assets/characters/inosuke/3.jpg";
import I4 from "../assets/characters/inosuke/4.jpg";
import I5 from "../assets/characters/inosuke/5.jpg";
import I6 from "../assets/characters/inosuke/6.png";

// Muzan
import M1 from "../assets/characters/muzan/1.jpg";
import M2 from "../assets/characters/muzan/2.jpg";
import M3 from "../assets/characters/muzan/3.jpg";
import M4 from "../assets/characters/muzan/4.jpg";
import M5 from "../assets/characters/muzan/5.jpg";
import M6 from "../assets/characters/muzan/6.jpg";


const title = `DEMON 
SLAYER`;
const head = `Join The Epic Journey`;
const para = `Embark on an epic journey with Demon Slayer, where a young hero named Tanjiro Kamado battles demons to save his sister from a dark curse. Armed with a powerful sword and unwavering determination, Tanjiro joins the Demon Slayer Corps to face the shadows threatening humanity.

In a world of breathtaking animation and intense battles, Demon Slayer weaves a tale of bravery, friendship, and the quest for justice. Join Tanjiro as he slices through the darkness, bringing you into a captivating story that has captured the hearts of fans worldwide. Get ready for a thrilling adventure where every moment is packed with action and emotion. Welcome to the mesmerizing world of Demon Slayer!`;

const artStyle = `"Demon Slayer: Kimetsu no Yaiba" is known for its detailed and expressive art style. Character designs are intricate, emphasizing distinctive clothing and features that reflect personalities. The art excels in conveying emotions through expressive facial details, ranging from intense determination to subtle nuances. The series is particularly praised for its dynamic action sequences, which are visually striking and well-choreographed. The combination of detailed character designs, expressive faces, and dynamic action contributes to the overall visual appeal of Demon Slayer, making it a standout in the anime and manga world.`;
function Demon(){
    return(
        <motion.div className="demon-slayer"
        initial={{opacity:0}} 
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
            <NavBar />

            <Info title={title} displayImg = {DemonImg} head={head} para={para} bwImg = {TanjiroBW}/>

            <CharGrid 
            T1={T1}
            T2={T2}
            T3={T3}
            T4={T4}
            T5={T5}
            T6={T6}

            N1={N1}
            N2={N2}
            N3={N3}
            N4={N4}
            N5={N5}
            N6={N6}

            Z1={Z1}
            Z2={Z2}
            Z3={Z3}
            Z4={Z4}
            Z5={Z5}
            Z6={Z6}

            I1={I1}
            I2={I2}
            I3={I3}
            I4={I4}
            I5={I5}
            I6={I6}

            M1={M1}
            M2={M2}
            M3={M3}
            M4={M4}
            M5={M5}
            M6={M6}
            />

            <ArtStyle para={artStyle} img={DemonArt} />

            <Footer />
        </motion.div>
    );
};

export default Demon;