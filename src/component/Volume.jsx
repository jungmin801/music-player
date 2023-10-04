import styles from "./css/volume.module.css";

function VolumeModal({ volume, setVolume }) {
  const volumeBackground = {
    background: `linear-gradient(to right, #FF0060 ${volume * 100}%, #fff ${volume * 100}%)`,
  };

  return (
    <div className={styles.volumeSliderBg}>
      <input
        type="range"
        className={styles.volumeSlider}
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
