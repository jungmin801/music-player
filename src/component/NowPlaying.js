import objData from "../objData.json"
import nowPlayingCSS from "./css/nowPlaying.css";

function NowPlaying(){
    return(
        <section className="nowPlaying-list">
            <div className="title">
                <h2>Now Playing</h2>
                <button type="button" className="btn-add" aria-label="추가하기"></button>
            </div>
            <ol>
                {
                    objData.map((item,i) => {
                        return(
                            <li key={i+1}>
                                <span>{`${i+1}.`}</span>
                                {`${item.song} - ${item.artist}`}</li>
                        )
                    })
                }
            </ol>
        </section>
    )
}

export default NowPlaying;