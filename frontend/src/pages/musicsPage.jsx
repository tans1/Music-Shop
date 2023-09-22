import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import MusicIntro from "../components/intro/musicIntro";
import MusicList from "../components/musics/musics list/musicList";
import { useDispatch, useSelector } from "react-redux";
import { GetAllMusic } from "../store/slice/musicSlice";

function MusicsPage() {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music);
  const [musics, setMusics] = useState([]);
  useEffect(() => {
    dispatch(GetAllMusic());
    setMusics(music.value);
  }, [music.value]);

  return (
    <div className=" px-[100px]">
      <Navbar />
      <MusicIntro />
      <div className="my-[50px] ">
        {musics.map((music, index) => (
          <MusicList music={music} index={index} />
        ))}
      </div>
    </div>
  );
}

export default MusicsPage;
