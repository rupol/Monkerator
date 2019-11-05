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
        <h2 className="episode-title">{props.monkEpisode.name}</h2>
        <div className="flex-container">
          <h3>(CC)&mdash;Comedy</h3>
          <h3>Season {props.monkEpisode.season_number}</h3>
          <h3>Air Date: {props.monkEpisode.air_date}</h3>
        </div>
        <p className="episode-overview">{props.monkEpisode.overview}</p>
        <div className="channels">
          <a
            className="channel"
            href="https://www.amazon.com/gp/video/detail/B002Z1NE14/ref=atv_dl_rdr"
            target="_blank"
          >
            AMZ
          </a>
          <a
            className="channel"
            href="https://www.youtube.com/playlist?list=ELZdpAo71s0rg"
            target="_blank"
          >
            YT
          </a>
          <a
            className="channel"
            href="https://itunes.apple.com/us/tv-season/monk-the-complete-series/id1438576775"
            target="_blank"
          >
            APL
          </a>
          <a
            className="channel"
            href="https://play.google.com/store/tv/show?id=fIoQgV-kwjg&cdid=tvseason-yp_38Pn2xi0&gdid=tvepisode-p2N5C5C7iJ0"
            target="_blank"
          >
            GGL
          </a>
        </div>
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
