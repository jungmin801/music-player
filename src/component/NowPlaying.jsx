import { useState, useEffect } from "react";
import styles from "./css/nowPlaying.module.css";
import { BaseButton } from "./Button";
import styled from "styled-components";
import toggleImg from "../icon/list.png"

const ToggleBtn = styled(BaseButton)`
    width: 34px;
    height: 34px;
    background-image: url(${toggleImg});
    background-position: 0 0 ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 10px;
    padding: 0;
`

function PlayList({ songs, isOpened }) {
    return (
    <ol className={isOpened ? styles.listOpened : styles.hidden}>
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
    <section className={`${styles.nowPlayingList} ${isOpened ? styles.active : ''}`}>
        <button type="button" className={styles.titleBtn} onClick={handleToggle}>
            <h2>Now Playing</h2>
            <ToggleBtn></ToggleBtn>
        </button>
        <PlayList songs={songs} isOpened={isOpened} />
    </section>
    );
}

export default NowPlaying;
