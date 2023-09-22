import React from "react";
import Navbar from "../components/navbar/navbar";
import { Typewriter } from "react-simple-typewriter";
import NewMusic from "../components/new music/newMusic";
import SocialMedia from "../components/social media/socialMedia";
import Trending from "../components/musics/trending/trending";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-music-background bg-cover bg-fixed bg-center bg-no-repeat h-[100vh]">
      <Navbar />
      <div className="text-white mt-[350px] px-[80px]">
        <p className="text-6xl mb-7 font-bold">What we offer?</p>
        <p className="text-4xl font-bold text-amber-600">
          <Typewriter
            words={[
              "Quality Songs",
              "Different Artists",
              "Variety of Categories",
              "Lovely Sound",
              "Rock star music",
              "Night party music"
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div className="mt-[200px] bg-black flex justify-center items-center ">
        <NewMusic />
      </div>
      <div className="mt-[100px]">
        <Trending />
      </div>
      <div className="flex justify-center items-center">
        <button className="w-[260px] hover:scale-105 border-2 border-green-600 rounded-xl h-[45px] text-white text-xl"><Link to={"/musics"}>Get All</Link></button>
      </div>
      <SocialMedia />
      
    </div>
  );
}

export default LandingPage;
