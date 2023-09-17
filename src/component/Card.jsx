import "./css/card.css"
import { useState, useEffect, useRef } from 'react';

function Card({songs, currentSongIndex}){
    const [scrollPosition, setScrollPosition] = useState(0);
    const titleEl = useRef(0);
    const cardEl = useRef(0);
    
    // 음악 타이틀의 길이가 컨테이너를 초과할 경우, 스크롤하기
    useEffect(()=>{
    let cardWidth = cardEl.current.offsetWidth;
    let titleWidth = titleEl.current.offsetWidth;
    let scrollInterval;

        if(titleWidth > cardWidth){
            scrollInterval = setInterval(()=>{
                setScrollPosition((prev) =>{
                    if(Math.abs(prev) >= titleWidth){
                        return cardWidth;
                    } else {
                        return prev - 1}
                })
            }, 80)
        }

        // currentSongIndex가 변경될때 초기화
        return ()=>{
            setScrollPosition(0);
            clearInterval(scrollInterval);
        }
    },[currentSongIndex])

    return (
        <section className="card" ref={cardEl}>
            <h2 className="a11y-hidden">Current Music</h2>
            <img src={process.env.PUBLIC_URL + songs[currentSongIndex].image} alt='' className="album-img"></img>
            <h3
            style={ {transform : `translateX(${scrollPosition}px)`} }
            >
                <span ref={titleEl}>{songs[currentSongIndex].song}</span>
            </h3>
            <p>{songs[currentSongIndex].artist}</p>
        </section>
    )
}
export default Card