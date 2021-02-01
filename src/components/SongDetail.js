import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song.title) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details about:</h3>
      <h4>{song.title}</h4>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
