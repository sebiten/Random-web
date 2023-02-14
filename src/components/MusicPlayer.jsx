import React, { useState } from "react";

const MusicPlayer = ({ trackList }) => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);

  return (
    <div className=" text-white mx-auto mt-4 ">
      <div className=" mx-auto my-auto">
        <h3 className="font-bold uppercase">{currentTrack.title}</h3>
        <audio className="my-2" src={currentTrack.src} controls />
        <ul className="text-white flex gap-5">
          {trackList.map((track, index) => (
            <li key={track.src}>
              <button
              className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              onClick={() => setCurrentTrack(track)}>
                {track.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicPlayer;
