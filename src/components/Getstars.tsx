import { FaStar, FaRegStar } from "react-icons/fa";
const getStars = (rating: number, filledStarColor: string, emptyStarColor: string) => {
  const stars= [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className={filledStarColor} />);
    } else {
      stars.push(<FaRegStar key={i} className={emptyStarColor} />);
    }
  }
  return stars;
};
export default getStars;
