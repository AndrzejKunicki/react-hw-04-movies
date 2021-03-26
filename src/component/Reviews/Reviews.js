import React, { Component } from 'react';
import moviesApi from '../../api/movies-api';

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await moviesApi.fetchReviesMovie(movieId);
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          "We don't have any reviews for this movie."
        )}
      </>
    );
  }
}

export default Reviews;
