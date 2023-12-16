import React from 'react';
import {createRoot} from 'react-dom/client';
import Navbar from './bootstrap-components/navbar';
import Footer from './bootstrap-components/footer';
import Grid from './bootstrap-components/grid';
import CycleImage from './assets/cycle.jpg'
import JujutsuImage from './assets/jujutsu.png'


const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />

    <div id='MainImageContainer'>
      <img id='MainImage' src={CycleImage} alt='Anime'></img>
      <div className="centered">ANIME</div>
    </div>

    <div id='MainText'>
      <h1>Welcome To The World Of Anime</h1>
      <div id='MainTextPara'>
        <p>
        Embark on a captivating journey into the world of anime, where storytelling becomes an art form and emotions unfold in vibrant animation. Anime's greatness lies in its ability to transport you to fantastical realms, offering a diverse spectrum of genres from exhilarating adventures to poignant dramas. Explore the profound themes and intricate character developments that make anime a unique and compelling medium. Dive into the extraordinary and experience the magic of anime – a world where every frame tells a story and every emotion is beautifully animated.
        </p>
      </div>
    </div>
    
    <div id='MainCards'>
      <img src={JujutsuImage} alt='jujutsu'></img>

    </div>

    <div id='GridText'>
      <h1>My Anime Picks</h1>
    </div>
    <Grid />

    <div id='MoreText'>
      <h1>And Countless Others...</h1>
    </div>

    <Footer />
  </div>
);
