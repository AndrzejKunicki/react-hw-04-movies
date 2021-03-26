import React from 'react';
import PropTypes from 'prop-types';

const MoviePreview = ({ img, title }) => {
  return (
    <>
      <img
        width="100"
        src={`https://image.tmdb.org/t/p/original/${img}`}
        alt={title}
      ></img>
      {title}
    </>
  );
};

MoviePreview.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MoviePreview;
