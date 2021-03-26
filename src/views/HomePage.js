import React, { Component } from 'react';
import MoviesList from '../component/MoviesList';
import moviesApi from '../api/movies-api';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await moviesApi.fetchTrendingMovies();

    this.setState({ movies: response.data.results });
  }
  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
