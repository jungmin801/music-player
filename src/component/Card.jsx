import "./css/card.css"
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CardSection = styled.section`
    box-sizing: border-box;
  width: 280px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const CoverImg = styled.img`
    aspect-ratio: 1 / 1;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
`

const SongTitle = styled.h3`
    text-align: center;
  padding: 1rem 0 0.5rem 0;
  font-family: Roboto;
  font-size: 2.25em;
  font-weight: 700;
  white-space: nowrap;
`

const Artist = styled.p`
    text-align: center;
  font-family: Roboto;
  font-size: 1.13em;
  font-weight: 700;
`


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
        <CardSection className="card" ref={cardEl}>
            <h2 className="a11y-hidden">Current Music</h2>
            <CoverImg src={process.env.PUBLIC_URL + songs[currentSongIndex].image} alt='' className="album-img"/>
            <SongTitle
            style={ {transform : `translateX(${scrollPosition}px)`} }
            >
                <span ref={titleEl}>{songs[currentSongIndex].song}</span>
            </SongTitle>
            <Artist>{songs[currentSongIndex].artist}</Artist>
        </CardSection>
    )
}
export default Card