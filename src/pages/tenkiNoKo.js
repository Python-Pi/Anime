import React from "react";
import {motion} from 'framer-motion'

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import GridItem from "../components/charGridItem";
import ArtStyle from "../components/artStyle";

import TenkiImg from "../assets/Screen Images/tenki.jpg";
import TenkiArt from "../assets/art style/tenki.jpg";
import TenkiBw from "../assets/Black-White/hina.png"

// Hina
import M1 from "../assets/characters/hina/1.jpg";
import M2 from "../assets/characters/hina/2.jpg";
import M3 from "../assets/characters/hina/3.jpg";
import M4 from "../assets/characters/hina/4.jpg";
import M5 from "../assets/characters/hina/5.jpg";
import M6 from "../assets/characters/hina/6.jpg";

// Hodaka 
import T1 from "../assets/characters/hodaka/1.jpg";
import T2 from "../assets/characters/hodaka/2.jpg";
import T3 from "../assets/characters/hodaka/3.jpg";
import T4 from "../assets/characters/hodaka/4.jpg";
import T5 from "../assets/characters/hodaka/5.jpg";
import T6 from "../assets/characters/hodaka/6.jpg";

function Tenki(){

    const title = 'Tenki No Ko';
    const head = 'Beneath the Tokyo rain, a tale of sunshine unfolds';
    const para = `Step into the enchanting world of 'Tenki no Ko,' a poignant narrative that unfolds in the bustling streets of Tokyo. Hodaka, a runaway teenager escaping the confines of his island home, discovers a captivating secret when he encounters Hina, a mysterious girl with the extraordinary ability to manipulate the weather. As they forge an unlikely bond, they embark on a journey through the intricate tapestry of a city where rainfall isn't merely meteorological but a reflection of the human condition.

    In this tale of weather-wielding wonders, the duo navigates the fine line between the mundane and the miraculous, as sunshine and storm become metaphors for the complexities of life and love. The cityscape, painted with Makoto Shinkai's signature visual brilliance, serves as a canvas for emotions that range from the whimsical to the profound.
    
    Yet, as they explore the bounds of Hina's unique gift, a compelling narrative of sacrifice and resilience emerges. 'Tenki no Ko' delves into the consequences of altering the natural order, exploring the intricate dance between destiny and desire. Against the backdrop of Tokyo's skyscrapers and rain-soaked streets, the characters grapple with the profound implications of their choices, painting a tale that resonates with the ebb and flow of the elements and the human heart`;

    const artStyle = `"Tenki no Ko" features the distinctive art style of Makoto Shinkai, the acclaimed director and animator known for his visually stunning films. The art style in "Tenki no Ko" is characterized by its attention to detail, vibrant colors, and breathtaking background scenery. Shinkai is known for his ability to create visually captivating landscapes, and this film is no exception.

    The character designs are realistic and expressive, allowing the audience to connect emotionally with the characters. The animation is smooth and fluid, and the attention to atmospheric details, such as raindrops and sunlight, adds to the overall beauty of the film.
    
    Additionally, Shinkai often incorporates a blend of traditional hand-drawn animation and digital techniques, creating a seamless and visually rich cinematic experience. The art style plays a crucial role in conveying the mood and emotions of the story, enhancing the overall impact of "Tenki no Ko."`;
    
    const hina = `Hina is a mysterious and resilient girl with an extraordinary ability—she can manipulate the weather. A beacon of sunshine in a rainy world, she starts a unique business offering temporary moments of clear skies. Beneath her cheerful exterior, Hina carries the weight of her remarkable power and the responsibilities it entails. As she forms a deep connection with Hodaka, her character becomes a poignant symbol of hope amidst life's storms.`;
    const hodaka = `Hodaka, a runaway teenager seeking independence, finds himself in the bustling city of Tokyo. As the protagonist of the story, he is initially a stranger to the urban landscape but soon discovers a world beyond the ordinary. Hodaka's journey is one of self-discovery, love, and navigating the unpredictable elements of both the city and his own heart. His character evolves from a runaway seeking refuge to someone entangled in the extraordinary mysteries of Tokyo's weather, shaping the destiny of those around him.`;

    return(
        <motion.div className="tenki"
        initial={{opacity:0}} e
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
        <NavBar></NavBar>

        <Info title={title} displayImg = {TenkiImg} head={head} para={para} bwImg={TenkiBw}/>

        <div className="char-info">
            <h1>Character Info</h1>
            <GridItem name ='Hina Amano' des = {hina} 
            img1={M1}
            img2={M2} 
            img3={M3} 
            img4={M4} 
            img5={M5} 
            img6={M6} 
            />
            <GridItem name = 'Hodaka Morishima' des = {hodaka}
            img1={T1}
            img2={T2} 
            img3={T3} 
            img4={T4} 
            img5={T5} 
            img6={T6} 
             />
        </div>

        <ArtStyle para={artStyle} img={TenkiArt} />

        <Footer />
        </motion.div>
    );
};

export default Tenki;