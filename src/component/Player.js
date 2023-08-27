<<<<<<< HEAD
import playerCSS from './player.css'


function Player(){
    return(
        <footer>
            <div className='btn-play-group'>
                <button type="button" className='btn rewind' aria-label="이전 곡"></button>
                <button type="button" className='btn play' aria-label="재생"></button>
                <button type="button" className='btn fast-forward' aria-label="다음 곡"></button>
            </div>
            <div className='timeline'>
                <p>3:30</p>
                <div className="progress-bg"></div>
            </div>
            <div className='btn-utility-group'>
                <button type="button" className='btn restart' aria-label="다시 재생"></button>
                <button type="button" className='btn shuffle' aria-label="셔플"></button>
                <button type="button" className='btn volume' aria-label="볼륨"></button>
            </div>
        </footer>
    )
}

export default Player;
=======
import { useEffect, useState, useRef } from "react";
import playerCSS from "./css/player.css";


function Player({currentSong, setCurrentSong, isPlaying, setIsPlaying}) {
  const audioEl = useRef(null);
    
  useEffect(()=>{
    if(isPlaying) {
      audioEl.current.play();
    }else {
      audioEl.current.pause();
    }
  },[isPlaying])
  
  
  return (
    <footer>
      <audio src={currentSong} ref={audioEl}></audio>
      <div className="btn-play-group">
        <button
          type="button"
          className="btn backward"
          aria-label="이전 곡"
        ></button>
        <button type="button" className="btn play" aria-label="재생"></button>
        <button
          type="button"
          className="btn forward"
          aria-label="다음 곡"
        ></button>
      </div>
      <div className="timeline">
        <p>3:30</p>
        <div className="progress-bg"></div>
      </div>
      <div className="btn-utility-group">
        <button
          type="button"
          className="btn restart"
          aria-label="다시 재생"
        ></button>
        <button
          type="button"
          className="btn shuffle"
          aria-label="셔플"
        ></button>
        <button type="button" className="btn volume" aria-label="볼륨"></button>
      </div>
    </footer>
  );
}

export default Player;
>>>>>>> master
