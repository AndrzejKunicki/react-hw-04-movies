import React, { Component } from "react";
import moviesApi from "../../api/movies-api";
import queryString from "query-string";
import MoviesList from "../../component/MoviesList";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = { query: "", movies: [] };

  async componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (queryParams.search) {
      const response = await moviesApi.fetchSearchMovies(queryParams.search);

      this.setState({ movies: response.data.results });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    moviesApi
      .fetchSearchMovies(this.state.query)
      .then((response) => this.setState({ movies: response.data.results }));

    this.props.history.push({
      search: `search=${this.state.query}`,
    });

    this.resetForm();
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  resetForm = () => {
    this.setState({ query: "" });
  };

  render() {
    const { query, movies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            value={query}
            name="query"
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className={styles.button}>
            <span>Search</span>
          </button>
        </form>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
