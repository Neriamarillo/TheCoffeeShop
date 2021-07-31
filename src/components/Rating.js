import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const Rating = (props) => {
  function setStars() {
    const wholeRating = Math.floor(props.rating);
    const halfRating = props.rating % 1;
    let halfFlag = halfRating > 0 ? true : false;
    let stars = [];
    for (let i = 1; i < 6; i++) {
      if (i > wholeRating) {
        if (halfFlag) {
          stars.push(<FaStarHalf className="rating" />);
          halfFlag = false;
        } else {
          stars.push(<FaRegStar />);
        }
      } else {
        stars.push(<FaStar className="rating" />);
      }
    }
    return stars;
  }

  return setStars();
};

export default Rating;
