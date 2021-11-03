import MoviesApi from "../../services/moviesAPI";
import { useState, useEffect } from "react";

import s from "./Reviews.module.css";

const moviesApi = new MoviesApi();

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesApi.fetchReviews(movieId).then((r) => {
      setReviews(r.results);
    });
  }, [movieId]);

  switch (reviews.length) {
    case 0:
      return <p>there are yet no reviews...</p>;

    default:
      return (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3 className={s.name}>
                <span className={s.author}>author:</span> {review.author}
              </h3>
              <p className={s.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      );
  }
}

export default Reviews;
