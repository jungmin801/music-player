import { atom } from "recoil";

export const SongItemsAtom = atom({
  key: "SongItemsAtom",
  default: [],
});

export const CurrentSongIndexAtom = atom({
  key: "CurrentSongIndexAtom",
  default: 0,
});
