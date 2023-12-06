import { useState, useEffect, useRef } from "react";
import styles from "./css/card.module.css";
import basicImg from "../image/basic.jpg";
import { useRecoilValue } from "recoil";
import { SongItemsAtom, CurrentSongIndexAtom } from "../atoms/atomList";

function Card() {
  const songs = useRecoilValue(SongItemsAtom);
  const currentSongIndex = useRecoilValue(CurrentSongIndexAtom);
  const [scrollPosition, setScrollPosition] = useState(0);
  const titleEl = useRef(0);
  const cardEl = useRef(0);

  // 음악 타이틀의 길이가 컨테이너를 초과할 경우, 스크롤하기
  useEffect(() => {
    let cardWidth = cardEl.current.offsetWidth;
    let titleWidth = titleEl.current.offsetWidth;
    let scrollInterval;

    if (titleWidth > cardWidth) {
      scrollInterval = setInterval(() => {
        setScrollPosition((prev) => {
          if (Math.abs(prev) >= titleWidth) {
            return cardWidth;
          } else {
            return prev - 1;
          }
        });
      }, 80);
    }

    // currentSongIndex가 변경될때 초기화
    return () => {
      setScrollPosition(0);
      clearInterval(scrollInterval);
    };
  }, [songs, currentSongIndex]);

  console.log(songs);

  return (
    <div className={styles.card} ref={cardEl}>
      <h2 className="a11y-hidden">Current Music</h2>
      <img
        src={songs.length > 0 ? songs[currentSongIndex].image : basicImg}
        alt=""
        className={styles.albumImg}
      />
      <h3 style={{ transform: `translateX(${scrollPosition}px)` }}>
        <span ref={titleEl}>
          {songs.length > 0 ? songs[currentSongIndex]?.song : "No Songs"}
        </span>
      </h3>
      <p>{songs.length > 0 ? songs[currentSongIndex]?.artist : "No artist"}</p>
    </div>
  );
}
export default Card;
