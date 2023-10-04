function Audio({ audioEl, songIndex, volume, onTimeUpdate, onEnded }) {

    return (
      <audio
        src={process.env.PUBLIC_URL + songIndex.audio}
        ref={audioEl}
        volume={volume}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
      ></audio>
    );
  }

  export default Audio