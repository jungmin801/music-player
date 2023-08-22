import objData from "../objData.json"
import nowPlayingCSS from "./nowPlaying.css"

function Info(){
    return (
        <section className="current-music">
            <h2 className="a11y-hidden">Current Music</h2>
            <img src={process.env.PUBLIC_URL + objData[0].image} alt='Divide' className="album-img"></img>
            <h3>{objData[0].song}</h3>
            <p>{objData[0].artist}</p>
        </section>
    )
}
export default Info