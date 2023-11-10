import { useState, useEffect } from "react";
import styles from "./css/nowPlaying.module.css";
import styled from "styled-components";
import { BaseButton } from "./Button";
import toggleImg from "../icon/list.png";
import jsmediatags from "../jsmediatags/dist/jsmediatags.min.js";

const ToggleBtn = styled(BaseButton)`
  width: 34px;
  height: 34px;
  background-image: url(${toggleImg});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 10px;
  padding: 0;

  @media screen and (max-width: 480px) {
    display: inline-block;
    position: relative;
  }
`;

function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/jpeg" });
}

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

function NowPlaying({ songs, setSongs }) {
  const [isOpened, setIsOpened] = useState(true);
  //songs 배열이 변경될 때마다 재렌더링
  useEffect(() => {}, [songs]);

  //재생목록 토글 여닫기

  const handleToggle = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  // 오디오 파일 받기
  const handleAudio = (e) => {
    let files = e.target.files;
    for (let i = 0; i < files.length; i += 1) {
      let file = e.target.files[i];
      const urlObj = URL.createObjectURL(file);
      let src = urlObj;

      jsmediatags.read(file, {
        onSuccess: function (tag) {
          const title = tag.tags.title;
          const artist = tag.tags.artist;
          let albumCover = tag.tags.picture;

          if (albumCover) {
            let base64String = "";
            albumCover.data.forEach((data) => {
              base64String += String.fromCharCode(data);
            });

            albumCover = `data:${albumCover.format};base64,${window.btoa(
              base64String
            )}`;
            albumCover = b64toBlob(albumCover);
            albumCover = URL.createObjectURL(albumCover);
          }

          let data = {
            id: i,
            artist: artist,
            song: title,
            image: albumCover,
            audio: src,
          };

          let copy = [...songs];
          copy.push(data);
          setSongs(copy);
        },
        onError: function (error) {
          alert(JSON.stringify(error));
        },
      });
    }
  };

  console.log(songs);
  return (
    <section
      className={`${styles.nowPlayingList} ${isOpened ? styles.active : ""}`}
    >
      <div type="button" className={styles.titleBtn} onClick={handleToggle}>
        <h2>Now Playing</h2>
        <ToggleBtn></ToggleBtn>
      </div>
      <PlayList songs={songs} isOpened={isOpened} />
      <input type="file" accept=".mp3" onChange={handleAudio} />
    </section>
  );
}

export default NowPlaying;
