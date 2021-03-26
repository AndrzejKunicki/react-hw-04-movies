import React, { Component } from 'react';
import moviesApi from '../../api/movies-api';

class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await moviesApi.fetchCastMovie(movieId);
    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast.length > 0 && (
          <ul>
            {cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt=""
                  width="64"
                ></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
