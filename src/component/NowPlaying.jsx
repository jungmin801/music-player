import { useState, useEffect } from "react";
import "./css/nowPlaying.css";



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
        <PlayList songs={songs} isOpened={isOpened} />
    </section>
    );
}

export default NowPlaying;
