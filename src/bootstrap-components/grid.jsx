import React from "react";
import ImageGrid from "../imagegrid";
import YourNameImage from "../assets/Grid Images/YourName.jpg"
import DemonSlayerImage from "../assets/Grid Images/demon.jpg"
import TenkiNoKo from "../assets/Grid Images/tenki no ko.png"
import JujutsuImage from "../assets/Grid Images/jujutsu.jpg"
import NarutoImage from "../assets/Grid Images/naruto.jpg"
import HyoukaImage from "../assets/Grid Images/hyuoka.jpg"
import AOTImg from "../assets/Grid Images/AOT.jpg"
import HorimiyaImg from "../assets/Grid Images/horimiya.jpg"


function Grid() {
  return (
    <div id='Grid'>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <ImageGrid head='Your Name' img={YourNameImage}/>
        <ImageGrid head='Demon Slayer' img={DemonSlayerImage}/>
        <ImageGrid head='Tenki No Ko' img={TenkiNoKo}/>
      </div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <ImageGrid head='Jujutsu Kaisen' img={JujutsuImage}/>
        <ImageGrid head='Attack On Titans' img={AOTImg}/>
        <ImageGrid head='Naruto' img={NarutoImage}/>
      </div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" >
          <ImageGrid head='Hyouka' img={HyoukaImage}/>
          <ImageGrid head='Horimiya' img={HorimiyaImg}/>
      </div>
    </div>
  );
}

export default Grid;
