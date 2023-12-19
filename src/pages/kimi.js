import React from "react";
import {motion} from 'framer-motion'

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import GridItem from "../components/charGridItem";
import ArtStyle from "../components/artStyle";

import KimiScreenImg from "../assets/Screen Images/your-name.png";
import KimiBw from "../assets/Black-White/yourname-color.jpg";
import KimiArt from "../assets/art style/kimi.jpg";

// Mitsuha 
import M1 from "../assets/characters/Mitsuha/1.png";
import M2 from "../assets/characters/Mitsuha/2.jpg";
import M3 from "../assets/characters/Mitsuha/3.jpg";
import M4 from "../assets/characters/Mitsuha/4.jpg";
import M5 from "../assets/characters/Mitsuha/5.jpg";
import M6 from "../assets/characters/Mitsuha/6.jpg";

// Taki 
import T1 from "../assets/characters/Taki/1.jpg";
import T2 from "../assets/characters/Taki/2.jpg";
import T3 from "../assets/characters/Taki/3.jpg";
import T4 from "../assets/characters/Taki/4.jpg";
import T5 from "../assets/characters/Taki/5.jpg";
import T6 from "../assets/characters/Taki/6.jpg";


function Kimi(data){

    const title = `Your Name`;
    const head = `Two lives.. One connection.`;
    const para = `In the quiet town of Itomori, Mitsuha and Taki, two souls bound by an unexplainable connection, began swapping bodies across the expanse of rural simplicity and urban chaos. Through notes left in diaries and messages sent through time, they wove a unique bond that transcended the ordinary. As their connection deepened, they uncovered a tragic destiny looming over Itomori. In a race against time, they set out to rewrite fate, defying the forces that sought to tear them apart. In the delicate dance of love, moments became eternal, and the threads of time intertwined, leaving an enduring mark on their shared destiny.`;

    const Mistsuha = `Mitsuha is a high school girl living in the rural town of Itomori. She is deeply connected to the traditions and rituals of her family, who are the local caretakers of a Shinto shrine. Mitsuha yearns for a more exciting life and dreams of living in Tokyo. She is depicted as a spirited and independent young girl with a strong sense of responsibility to her community. Mitsuha's life takes an unexpected turn when she starts swapping bodies with Taki, a boy from Tokyo.`;
    const Taki = `Taki is a high school student living in Tokyo. He is passionate about architecture and works part-time at an Italian restaurant. Taki is a kind and hardworking individual, but he becomes confused and intrigued when he suddenly begins to experience Mitsuha's life through mysterious body-swapping episodes. Throughout the story, Taki is determined to unravel the mystery behind these inexplicable occurrences and find a way to reconnect with Mitsuha.`;
    
    const artStyle = `"Kimi No Na Wa," directed by Makoto Shinkai, is celebrated not only for its compelling storyline but also for its breathtaking and visually stunning art style. The film showcases a distinctive blend of traditional hand-drawn animation and modern digital techniques, resulting in a visually captivating and immersive experience.

    The art style of "Kimi No Na Wa" is characterized by its meticulous attention to detail, vibrant colors, and beautifully rendered landscapes. The film features picturesque scenes of both rural landscapes, capturing the serene beauty of Itomori, and the bustling urban environment of Tokyo. The attention to detail extends to the characters as well, with expressive faces and subtle nuances that add depth to their emotions and personalities.
    
    One of the standout aspects of the art style is the use of light and shadow to create mood and atmosphere. The play of light during various times of the day and in different settings contributes to the film's emotional resonance. Shinkai's use of visuals not only complements the narrative but also enhances the overall impact of the story.
    
    The animation in "Kimi No Na Wa" is fluid and dynamic, particularly during the surreal and fantastical sequences that explore the connection between the protagonists. The film seamlessly transitions between the everyday and the supernatural, creating a visually arresting experience that resonates with audiences.`;
    
    return(
        <motion.div className="your-name"
        initial={{opacity:0}} 
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
        <NavBar></NavBar>

        <Info title={title} displayImg = {KimiScreenImg} head={head} para={para} bwImg={KimiBw}/>

        <div className="char-info">
            <h1>Character Info</h1>
            <GridItem name ='Mitsuha Miyamizu' des = {Mistsuha} 
            img1={M1}
            img2={M2} 
            img3={M3} 
            img4={M4} 
            img5={M5} 
            img6={M6} 
            />
            <GridItem name = 'Taki Tachibana' des = {Taki}
            img1={T1}
            img2={T2} 
            img3={T3} 
            img4={T4} 
            img5={T5} 
            img6={T6} 
             />
        </div>

        <ArtStyle para={artStyle} img={KimiArt} />

        <Footer />
        </motion.div>
    );
};

export default Kimi;