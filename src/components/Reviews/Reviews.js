import MoviesApi from "../../services/moviesAPI";
import { useState, useEffect } from "react";

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
        reviews && (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )
      );
  }

  //return (

  // <div>
  //   {reviews && reviews.length !== 0 && (
  //     <ul>
  //       {reviews.map((review) => (
  //         <li key={review.id}>
  //           <h3>author {review.author}</h3>
  //           <p>{review.content}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   )}

  //   {reviews.lengh && <p>No reviews yet </p>}
  // </div>
  // );
}

export default Reviews;
