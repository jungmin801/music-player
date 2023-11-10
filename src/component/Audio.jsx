function Audio({ audioEl, songIndex, volume, onTimeUpdate, onEnded }) {
  return (
    <audio
      src={songIndex?.audio}
      ref={audioEl}
      volume={volume}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
    ></audio>
  );
}

export default Audio;
