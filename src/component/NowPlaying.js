import objData from "../objData.json"
<<<<<<< HEAD
import nowPlayingCSS from "./nowPlaying.css"
=======
import nowPlayingCSS from "./css/nowPlaying.css";
>>>>>>> master

function NowPlaying(){
    return(
        <section className="nowPlaying-list">
            <div className="title">
                <h2>Now Playing</h2>
                <button type="button" className="btn-add" aria-label="추가하기"></button>
            </div>
            <ol>
<<<<<<< HEAD
                <li>{`${objData[0].song} - ${objData[0].artist}`}</li>
=======
                {
                    objData.map((item,i) => {
                        return(
                            <li key={i+1}>
                                <span>{`${i+1}.`}</span>
                                {`${item.song} - ${item.artist}`}</li>
                        )
                    })
                }
>>>>>>> master
            </ol>
        </section>
    )
}

export default NowPlaying;