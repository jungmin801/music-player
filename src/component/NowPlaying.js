import objData from "../objData.json"
import nowPlayingCSS from "./nowPlaying.css"

function NowPlaying(){
    return(
        <section className="nowPlaying-list">
            <div className="title">
                <h2>Now Playing</h2>
                <button type="button" className="btn-add" aria-label="추가하기"></button>
            </div>
            <ol>
                <li>{`${objData[0].song} - ${objData[0].artist}`}</li>
            </ol>
        </section>
    )
}

export default NowPlaying;