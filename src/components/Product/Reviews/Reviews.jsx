import "./Reviews.css";
import { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewTitle, setReviewTitle] = useState("");

  const onAddReviewHandler = () => {
    let newReview = {
      id: new Date(),
      txt: reviewTitle,
      time: reviewTime(),
    };
    setReviews([...reviews, newReview]);
    setReviewTitle("");
  };

  const onChangeHandler = (e) => {
    setReviewTitle(e.target.value);
  };

  const reviewTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )} (${addZero(day)}.${addZero(month)}.${year})`;
  };

  return (
    <>
      <h2>Reviews</h2>
      <div className="HeaderReviews">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          placeholder="Add Review"
          value={reviewTitle}
        />
        <button onClick={onAddReviewHandler}>Add Review</button>
      </div>
      <div className="Reviews">
        {reviews.map((review) => (
          <div className="Review" key={review.id}>
            <p>
              <small>{review.time}</small> <br />
              {review.txt}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
