import modalCSS from "./css/modal.css";

function VolumeModal({ volume, setVolume }) {
  return (
    <div className="volume-bar-bg">
      <input
        type="range"
        className="volume-bar"
        min="0"
        max="100"
        value={volume * 100}
        onChange={(e) => setVolume(e.target.value / 100)}
      />
    </div>
  );
}

export default VolumeModal;
