import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../component/Cast';
import Reviews from '../../component/Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';
import routes from '../../routes';
import moviesApi from '../../api/movies-api';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    genres: [],
    poster_path: null,
    overview: null,
    release_date: null,
    popularity: null,
  };

  async componentDidMount() {
    const response = await moviesApi.fetchDetailsMovie(
      this.props.match.params.movieId,
    );

    this.setState({ ...response.data });
  }

  hendlerGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  locationFrom = () => {
    const { location } = this.props;
    if (location && location.state && location.state.from) {
      return location.state.from;
    }
    return location;
  };

  render() {
    const {
      title,
      overview,
      poster_path,
      genres,
      release_date,
      vote_average,
    } = this.state;
    const { url, path } = this.props.match;

    return (
      <>
        <button type="button" onClick={this.hendlerGoBack}>
          Go back
        </button>
        <div className={styles.container}>
          <img
            width="240"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
          ></img>
          <div>
            <h1>
              {title} ({release_date && release_date.substr(0, 4)})
            </h1>
            <p>Vote average: {vote_average}</p>
            <h2>Overview </h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul className={styles.genres}>
              {genres.map(genr => (
                <li key={genr.name}>{genr.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: this.locationFrom() },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: this.locationFrom() },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </div>
        ;
      </>
    );
  }
}

export default MovieDetailsPage;
