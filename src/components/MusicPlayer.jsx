import React, { useState } from "react";

const MusicPlayer = ({ trackList }) => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);

  return (
    <div className="bg-black text-white mx-auto">
      <div className="w-1/2 mx-auto">
        <h3>{currentTrack.title}</h3>
        <audio src={currentTrack.src} controls />
        <ul className="text-white flex gap-5">
          {trackList.map((track, index) => (
            <li key={track.src}>
              <button
              className="text-center"
              onClick={() => setCurrentTrack(track)}>
                <img
                className="w-[55px]"
                src={track.srcImg} alt={track.title} />
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
