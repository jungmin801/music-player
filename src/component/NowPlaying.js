import { useEffect } from "react";
import objData from "../objData.json"
import nowPlayingCSS from "./css/nowPlaying.css";

function NowPlaying({songs}){

    //songs 배열이 변경될 때마다 재렌더링
    useEffect(() => {}, [songs]); 

    return(        
        <section className="nowPlaying-list">
            <div className="title">
                <h2>Now Playing</h2>
                <button type="button" className="btn-add" aria-label="추가하기"></button>
            </div>
            <ol>
                {
                    songs.map((item,i) => {
                        return(
                            <li key={i+1} style={{whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>
                                <span>{`${i+1}.`}</span>
                                <span >{`${item.song} - ${item.artist}`}</span>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    )
}

export default NowPlaying;