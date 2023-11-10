import React from "react";

export default function AudioForm({ handleAudio }) {
  return (
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
  );
}
