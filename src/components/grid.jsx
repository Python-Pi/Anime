import React from "react";
import ImageGrid from "./imagegrid";
import YourNameImage from "../assets/Grid Images/YourName.jpg"
import DemonSlayerImage from "../assets/Grid Images/demon.jpg"
import TenkiNoKo from "../assets/Grid Images/tenki no ko.png"
import JujutsuImage from "../assets/Grid Images/jujutsu.jpg"
import NarutoImage from "../assets/Grid Images/naruto.jpg"
import AOTImg from "../assets/Grid Images/AOT.jpg"
import HorimiyaImg from "../assets/Grid Images/horimiya.jpg"
import SuzumeImg from "../assets/Grid Images/suzume.jpg"
function Grid() {

  return (
    <div>
      <div id='GridText'>
        <h1>My Anime Picks</h1>
      </div>
      <div id='Grid'>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 tryFlex" >
          <ImageGrid head='Your Name' img={YourNameImage} url='/your-name'/>
          <ImageGrid head='Suzume' img={SuzumeImg} url='/suzume'/>
          <ImageGrid head='Tenki No Ko' img={TenkiNoKo} url='/tenki'/>
          <ImageGrid head='Jujutsu Kaisen' img={JujutsuImage} url='/jujutsu'/>
          <ImageGrid head='Demon Slayer' img={DemonSlayerImage} url='/demon-slayer'/>
          <ImageGrid head='Attack On Titans' img={AOTImg} url='/aot'/>
          <ImageGrid head='Naruto' img={NarutoImage} url='/naruto'/>
          <ImageGrid head='Horimiya' img={HorimiyaImg} url='/horimiya'/>
        </div>
      </div>
      <div id='MoreText'>
        <h1>And Countless Others...</h1>
      </div>
    </div>
  );
}

export default Grid;
