import objData from "../objData.json"
import nowPlayingCSS from "./css/nowPlaying.css"

function Card({currentSong}){
    return (
        <section className="current-music">
            <h2 className="a11y-hidden">Current Music</h2>
            <img src={process.env.PUBLIC_URL + currentSong.image} alt='Divide' className="album-img"></img>
            <h3>{currentSong.song}</h3>
            <p>{currentSong.artist}</p>
        </section>
    )
}
export default Card