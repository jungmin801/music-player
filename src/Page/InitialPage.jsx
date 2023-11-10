import React from "react";
import { useHandleAudio } from "../hook/useHandleAudio.js";

function InitialPage({ setSongs }) {
  const handleAudio = useHandleAudio(setSongs);

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
