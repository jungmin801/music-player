import React from "react";
import AudioForm from "../component/AudioForm.jsx";
import { useHandleAudio } from "../hook/useHandleAudio.js";

function InitialPage({ setSongs }) {
  const handleAudio = useHandleAudio(setSongs);

  return (
    <>
      <p>음악 파일을 업로드하세요.</p>
      <AudioForm handleAudio={handleAudio} />
    </>
  );
}

export default InitialPage;
