import React from "react";
import {motion} from 'framer-motion'

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import GridItem from "../components/charGridItem";
import ArtStyle from "../components/artStyle";

import HorimiyaScreen from "../assets/Screen Images/horimiya.png";
import HoriBw from "../assets/Black-White/horimiya.png";
import HoriArt from "../assets/art style/horimiyaArt.jpeg";


// Miyamura 
import M1 from "../assets/characters/miyamura/1.jpg";
import M2 from "../assets/characters/miyamura/2.jpg";
import M3 from "../assets/characters/miyamura/3.webp";
import M4 from "../assets/characters/miyamura/4.png";
import M5 from "../assets/characters/miyamura/5.webp";
import M6 from "../assets/characters/miyamura/6.jpeg";

// Hori
import T1 from "../assets/characters/hori/1.webp";
import T2 from "../assets/characters/hori/2.jpeg";
import T3 from "../assets/characters/hori/3.jpeg";
import T4 from "../assets/characters/hori/4.jpg";
import T5 from "../assets/characters/hori/5.png";
import T6 from "../assets/characters/hori/6.jpeg";


function Horimiya(){

    const title = 'Horimiya';
    const head = `From hidden tattoos to unspoken emotions`;
    const para = `Enter the captivating world of 'Horimiya,' where the seemingly ordinary veneer of high school life conceals extraordinary secrets. Hori, the popular and responsible beauty, harbors a hidden life caring for her family. Miyamura, the quiet outcast, conceals a stunning alter ego beneath his unassuming exterior. As fate intertwines their paths, a heartwarming tale of love, friendship, and self-discovery unfolds. 'Horimiya' unveils the enchanting dance of two souls navigating the complexities of adolescence, proving that behind every smile, there's a story waiting to be told. Join them on a journey where appearances shatter, revealing the authentic connections that transform the mundane into the extraordinary.`;

    const hori = `Hori is one of the main characters in "Horimiya." On the surface, she appears to be a popular and outgoing high school girl, admired by her peers for her beauty and friendly demeanor. However, her true personality is revealed to be quite different when she's at home. Hori is a responsible and mature young woman who takes care of her younger brother Souta while their parents are often away working. She is known for her dedication to her family and her strong sense of responsibility.`;
    const miya = `Miyamura is another central character in "Horimiya." In contrast to Hori's public image, Miyamura is initially introduced as a quiet and somewhat introverted student with long, unkempt hair that covers much of his face. He is often seen wearing glasses and baggy clothing, contributing to his unassuming appearance.

    As the story progresses, it becomes clear that Miyamura is not as he seems. Outside of school, he sheds his glasses and transforms into a tattooed and pierced individual with a more alternative style. Despite his initial appearance, Miyamura is kind-hearted, sensitive, and compassionate. He struggles with self-esteem issues and a fear of being judged for his true self, but as he forms deeper connections with others, particularly Hori, he learns to embrace his authentic identity.`;
    
    const artStyle = `
    The art style of "Horimiya" is characterized by its clean and visually appealing aesthetics. The character designs are well-defined, with a focus on expressiveness that captures the emotions and personalities of each character. The artwork seamlessly transitions between comedic and heartfelt moments, utilizing a blend of charming and dynamic visuals. Backgrounds are detailed when necessary but often take a back seat to emphasize the characters and their interactions. Overall, "Horimiya" boasts a modern and visually engaging art style that complements the narrative, enhancing the overall viewing experience.`;
    return(
        <motion.div className="horimiya"
        initial={{opacity:0}} e
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
        <NavBar></NavBar>

        <Info title={title} displayImg = {HorimiyaScreen} head={head} para={para} bwImg={HoriBw}/>

        <div className="char-info">
            <h1>Character Info</h1>
            <GridItem name = 'Miyamura Izumi' des = {miya}
            img1={M1}
            img2={M2} 
            img3={M3} 
            img4={M4} 
            img5={M5} 
            img6={M6} 
            />

            <GridItem name ='Hori Kyouko' des = {hori} 
            img1={T1}
            img2={T2} 
            img3={T3} 
            img4={T4} 
            img5={T5} 
            img6={T6} 
            />
        </div>

        <ArtStyle para={artStyle} img={HoriArt} />

        <Footer />
        </motion.div>
    )
};

export default Horimiya;