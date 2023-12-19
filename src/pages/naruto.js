import React from "react";
import {motion} from 'framer-motion'

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Info from "../components/info";
import GridItem from "../components/charGridItem";
import ArtStyle from "../components/artStyle";

import NarutoScreen from "../assets/Screen Images/naruto.jpg";
import NarutoArt from "../assets/art style/narutoArt.jpeg";
import NarutoBw from "../assets/Black-White/itachi.jpg";


// Naruto 
import M1 from "../assets/characters/naruto/1.jpeg";
import M2 from "../assets/characters/naruto/2.jpeg";
import M3 from "../assets/characters/naruto/3.jpg";
import M4 from "../assets/characters/naruto/4.jpeg";
import M5 from "../assets/characters/naruto/5.png";
import M6 from "../assets/characters/naruto/6.jpeg";

function Naruto(){

    const title = 'Naruto';
    const head = `Believe in the Will of Fire`;
    const para = `The Naruto series follows the journey of Naruto Uzumaki, an orphaned ninja with dreams of becoming the strongest and earning the title of Hokage. From his early struggles as an outcast with the burden of being the Nine-Tailed Fox host to forming bonds with his teammates Sasuke and Sakura, Naruto faces numerous challenges, including the pursuit of Sasuke, the threat of powerful adversaries like Orochimaru, and the discovery of his own identity. The narrative unfolds as Naruto grows from a determined, mischievous youth into a powerful ninja, exploring themes of friendship, sacrifice, and the relentless pursuit of one's ideals, ultimately shaping the destiny of the Hidden Leaf Village and the ninja world.`;
    const artStyle = `The art style of Naruto, created by Masashi Kishimoto, is characterized by a dynamic blend of detailed character designs, intricate battle sequences, and vibrant landscapes. Kishimoto's art combines traditional manga aesthetics with a modern touch, featuring well-defined characters with distinct facial expressions and iconic, easily recognizable designs. The character designs range from the youthful and determined Naruto to the stoic and cool Sasuke, each reflecting their personalities and growth throughout the series. The action scenes are visually striking, with fluid movements and impactful jutsu techniques that convey the intensity of the battles. Additionally, Kishimoto's attention to world-building is evident in the diverse and imaginative settings, from hidden ninja villages to mystical landscapes. Overall, Naruto's art style is a key element in conveying the emotional depth, action, and rich storytelling of the series.`;

    const naruto = `Naruto Uzumaki, the indomitable protagonist, is a spirited and resilient ninja driven by a profound desire to earn the respect of his village, Konohagakure. Bearing the burden of the Nine-Tails fox within him, Naruto transforms from a lonely outcast into a charismatic and compassionate leader. His journey is a testament to the power of perseverance and the ability to forge connections, ultimately realizing his dream of becoming the Hokage.`;
    const sasuke = `Sasuke Uchiha, Naruto's complex rival, is a prodigious and brooding ninja with a tragic past. Fueled by a thirst for revenge against his brother, Sasuke treads a perilous path between light and darkness. His exceptional skills in fire and lightning jutsu, coupled with the Sharingan, make him a formidable force. Sasuke's evolution explores themes of identity, sacrifice, and redemption as he grapples with the shadows of his own legacy.`;
    const sakura = `Sakura Haruno, the third member of Team 7, begins as a seemingly delicate and infatuated girl. However, she undergoes significant growth, blossoming into a skilled medical ninja with formidable strength. Sakura's character development is marked by inner strength, independence, and an unwavering commitment to protecting her friends and village.`;
    const kakashi = `Kakashi Hatake, the enigmatic sensei of Team 7, is a highly skilled and calm strategist. Known for his mysterious Sharingan eye and mastery of countless jutsu, Kakashi imparts invaluable lessons to his students, blending discipline with a nuanced understanding of the human experience. His journey, marked by personal losses and resilience, adds depth to the narrative.`;
    const jiraya = `Jiraiya, the charismatic and perceptive Sannin, is a legendary figure known for his unorthodox methods and prowess in combat. As Naruto's mentor, he instills wisdom and a sense of responsibility, all while navigating the complex political landscape of the ninja world. Jiraiya's character is a blend of humor, mentorship, and an underlying seriousness that reflects the challenges of his time.`;
    const minato = `Minato Namikaze, the Fourth Hokage and Naruto's father, is a revered leader known for his unparalleled speed and the creation of the Rasengan. His sacrifice to protect the village and his family leaves a lasting impact on Naruto's journey, symbolizing the selflessness and duty inherent in leadership.`;
    const hashirama = `Hashirama Senju, the First Hokage and co-founder of Konohagakure, is a stoic and powerful ninja with a unique wood-style jutsu. As a visionary leader, Hashirama establishes peace between warring clans, laying the foundation for the Hidden Leaf Village. His character embodies the ideals of diplomacy, unity, and the enduring legacy of a leader committed to forging a better future.`;

    const itachi = `Itachi Uchiha, an enigmatic and tragic figure, is a prodigious ninja burdened by the duty to protect his village, even at the cost of his own happiness. Gifted with the Sharingan and mastering the art of genjutsu, Itachi's stoic demeanor conceals a complex inner struggle, marked by sacrifice and the haunting choices he makes for the greater good.`;
    const obito = `Madara Uchiha, a legendary and formidable presence, is a central figure in the history of the ninja world. As one of the co-founders of Konohagakure and a master of the Sharingan, Madara's ambition and pursuit of power shape the course of the series. His indomitable strength, strategic brilliance, and connection to the Nine-Tails contribute to his legacy as an iconic antagonist.`;
    const madara = `Obito Uchiha, initially portrayed as a friend and comrade, undergoes a profound transformation into one of the series' most complex villains. Manipulated by circumstances and driven by a skewed sense of justice, Obito becomes the mysterious and powerful force behind many of the world's conflicts. His journey explores themes of loss, redemption, and the consequences of a broken world.`;
    const pain = `Pain, also known as Nagato, serves as the leader of the organization Akatsuki. His character is defined by a tragic past and a misguided but fervent desire for world peace. Endowed with the Rinnegan, Pain possesses devastating power and a philosophy that challenges traditional notions of justice, creating a nuanced and thought-provoking antagonist.`;
    const kaguya = `Kaguya Ōtsutsuki, an ancient and otherworldly being, emerges as a deity-like force with immense power. The progenitor of chakra and mother to Hagoromo and Hamura, Kaguya's character represents a cosmic threat that transcends the conflicts of the ninja world. Her introduction adds a mythic dimension to the narrative, delving into the origins of the series' supernatural elements.`;

    return(
        <motion.div className="naruto"
        initial={{opacity:0}} e
        animate={{opacity: 1}} 
        exit={{opacity:0}}
        transition={{duration: 1.5}}
        >
        <NavBar></NavBar>

        <Info title={title} displayImg = {NarutoScreen} head={head} para={para} bwImg={NarutoBw}/>

        <div className="char-info">
            <h1>Character Info</h1>
            <GridItem name ='Naruto Uzumaki' des = {naruto} 
            img1={M1}
            img2={M2} 
            img3={M3} 
            img4={M4} 
            img5={M5} 
            img6={M6} 
            />
            <GridItem name ='Sasuke Uchiha:' des = {sasuke} 
 
            />
            <GridItem name ='Sakura Haruno:' des = {sakura} 
 
            />
            <GridItem name ='Kakashi Hatake' des = {kakashi} 
 
            />
            <GridItem name ='Jiraiya' des = {jiraya} 
 
            />
            <GridItem name ='Minato Namikaze' des = {minato} 
 
            />
            <GridItem name ='Hashirama Senju' des = {hashirama} 
 
            />
            


            <GridItem name ='Itachi Uchiha' des = {itachi} 
 
            />
            <GridItem name ='Madara Uchiha' des = {madara} 
 
            />
            <GridItem name ='Obito Uchiha' des = {obito} 
 
            />
            <GridItem name ='Pain (Nagato)' des = {pain} 
 
            />
            <GridItem name ='Kaguya Ōtsutsuki' des = {kaguya} 
 
            />

        </div>

        <ArtStyle para={artStyle} img={NarutoArt} />

        <Footer />
        </motion.div>
    );
};

export default Naruto;