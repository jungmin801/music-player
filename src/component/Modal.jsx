import modalCSS from "./css/modal.css";

function VolumeModal({ volume, setVolume }) {
  const volumeBackground = {
    background: `linear-gradient(to right, #FF0060 ${volume * 100}%, #fff ${volume * 100}%)`,
  };

  return (
    <div className="volume-slider-bg">
      <input
        type="range"
        className="volume-slider"
        min="0"
        max="100"
        value={volume * 100}
        onChange={(e) => setVolume(e.target.value / 100)}
        style = {volumeBackground}
      />
    </div>
  );
}

export default VolumeModal;
