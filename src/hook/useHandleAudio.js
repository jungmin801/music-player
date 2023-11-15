import { useCallback } from "react";
import basicImg from "../image/basic.jpg";

export const useHandleAudio = (setSongs) => {
  const handleAudio = useCallback(
    (event) => {
      const files = event.target.files;
      for (let i = 0; i < files.length; i += 1) {
        const file = event.target.files[i];
        const urlObj = URL.createObjectURL(file);
        const src = urlObj;
        const id = src.slice(-12);

        window.jsmediatags.read(file, {
          onSuccess: function (tag) {
            const title = tag.tags.title || "제목 없음";
            const artist = tag.tags.artist || "알 수 없는 음악가";
            let albumCover = tag.tags.picture;

            if (albumCover) {
              const albumCoverBlob = new Blob(
                [new Uint8Array(albumCover.data)],
                { type: albumCover.format }
              );
              albumCover = URL.createObjectURL(albumCoverBlob);
            } else {
              albumCover = basicImg;
            }

            const data = {
              id: id,
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
    },
    [setSongs]
  );

  return handleAudio;
};
