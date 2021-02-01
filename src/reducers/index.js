import { selectSong } from "../actions";

const songsReducer = () => {
  return [
    { title: "WAP", duration: "4:01" },
    { title: "The Steps", duration: "3:45" },
    { title: "Kyoto", duration: "3:22" },
    { title: "Safaera", duration: "4:13" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};
