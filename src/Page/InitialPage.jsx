import React, { useState } from "react";
import jsmediatags from "../jsmediatags/dist/jsmediatags.min.js";

function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/jpeg" });
}

function InitialPage({ songs, setSongs }) {
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

          setSongs((prev) => [...prev, data]);
        },
        onError: function (error) {
          alert(JSON.stringify(error));
        },
      });
    }
  };
  return (
    <>
      <div>음악 파일을 업로드하세요.</div>
      <form>
        <label htmlFor="fileUpload"></label>
        <input
          type="file"
          id="fileUpload"
          accept=".mp3"
          onChange={handleAudio}
          multiple
        />
      </form>
    </>
  );
}

export default InitialPage;
