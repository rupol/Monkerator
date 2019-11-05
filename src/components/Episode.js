import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchEpisode } from "../actions/episode";

const Episode = props => {
  const [randomSeason, setRandomSeason] = useState(1);
  const [randomEpisode, setRandomEpisode] = useState(1);

  const generateEpisode = e => {
    e.preventDefault();
    const seasonNum = Math.ceil(Math.random() * 8);
    const episodeNum = Math.ceil(Math.random() * 13);

    setRandomSeason(seasonNum);
    setRandomEpisode(episodeNum);
  };

  useEffect(() => {
    props.fetchEpisode({ season: randomSeason, episode: randomEpisode });
  }, [randomSeason, randomEpisode]);

  return (
    <div className="container">
      <div className="tv">
        <div className="antenna"></div>
        <div className="tv-screen">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.monkEpisode.still_path}`}
            alt="monk episode still"
          />
        </div>
        <div className="tv-controls">
          <button onClick={generateEpisode}>random</button>
        </div>
      </div>
      <div className="episode-details">
        <h2>{props.monkEpisode.name}</h2>
        <h3>season {props.monkEpisode.season_number}</h3>
        <h3>air date: {props.monkEpisode.air_date}</h3>
        <p>{props.monkEpisode.overview}</p>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isEpisodeLoading: state.isLoading,
    monkEpisode: state.episode,
    episodeError: state.error
  };
}

const mapDispatchToProps = {
  fetchEpisode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episode);
