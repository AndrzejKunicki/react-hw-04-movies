import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview/MoviePreview';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    movies.length > 0 && (
      <ul className={styles.list}>
        {movies.map(({ poster_path, original_title, title, name, id }) => (
          <li key={id} className={styles.listItem}>
            <NavLink
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
              className={styles.listLink}
            >
              <MoviePreview
                img={poster_path}
                title={original_title || title || name}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    )
  );
};

MoviesList.defaultProps = {
  original_title: '',
  title: '',
  name: '',
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default withRouter(MoviesList);
