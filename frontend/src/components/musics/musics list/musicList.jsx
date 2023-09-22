import React, {useState } from "react";
import { BsPencil } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineDownload, AiOutlineCheck } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { DownloadMusic, DeleteMusic, UpdateMusic } from "../../../store/slice/musicSlice";

function MusicList({ music, index }) {
  const dispatch = useDispatch();
  const [artist, setArtist] = useState(music.artist);
  const [title, setTitle] = useState(music.title);

  const [isEditing, setIsEditing] = useState(false);
  const handleUpdating = () => {
    const data = {
      id: music._id,
      title: title,
      artist: artist,
    }
    dispatch(UpdateMusic(data));
    setIsEditing(false);
  };
  return (
    <div
      className="flex justify-between items-center w-[500px]  my-3"
      key={index}>
      <p className="text-white text-3xl">{index + 1}.</p>
      <div className=" text-3xl text-blue-500 font-bold w-[50px]">
        <AiOutlineDownload
          onClick={() => dispatch(DownloadMusic(music.fileName))}
          className="cursor-pointer"
        />
      </div>
      <div className="w-[150px]">
        <input
          style={isEditing ? { border: "1px solid cyan" } : null}
          className="text-white text-base bg-transparent w-[200px]  px-2"
          type="text"
          defaultValue={music.title}
          readOnly={!isEditing}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          style={isEditing ? { border: "1px solid cyan" } : null}
          className="text-gray-300 text-sm  bg-transparent w-[200px] my-2 px-2"
          type="text"
          defaultValue={music.artist}
          readOnly={!isEditing}
          onChange={e => setArtist(e.target.value)}
        />
      </div>
      <div className="flex text-white w-[100px]">
        <div className="text-2xl mx-2">
          {isEditing ? (
            <AiOutlineCheck
              className="cursor-pointer"
              onClick={handleUpdating}
            />
          ) : (
            <BsPencil
              className="cursor-pointer"
              onClick={() => setIsEditing(true)}
            />
          )}
        </div>
        <div className="text-2xl mx-2 text-red-600">
          {isEditing ? (
            <></>
          ) : (
            <MdDeleteForever
              className="cursor-pointer"
              onClick={() => dispatch(DeleteMusic(music._id))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MusicList;
