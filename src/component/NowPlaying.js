import { useState, useEffect } from "react";
import "./css/nowPlaying.css";

function RenderPlayList({ songs, isOpened }) {
    return (
    <ol className={isOpened ? "list-opened" : "hidden"}>
        {songs.map((item, i) => {
        return (
            <li key={i + 1}>
            <span>{`${i + 1}.`}</span>
            <span>{`${item.song} - ${item.artist}`}</span>
            </li>
        );
        })}
    </ol>
    );
}

function NowPlaying({ songs }) {
    const [isOpened, setIsOpened] = useState(true);
    //songs 배열이 변경될 때마다 재렌더링
    useEffect(() => {}, [songs]);

    //재생목록 토글 여닫기

    const handleToggle = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
    };

    return (
    <section className={`nowPlaying-list ${isOpened ? "active" : ""}`}>
        <button type="button" className="title" onClick={handleToggle}>
        <h2>Now Playing</h2>
        <div className={`btn toggle`}></div>
        </button>
        <RenderPlayList songs={songs} isOpened={isOpened} />
    </section>
    );
}

export default NowPlaying;
