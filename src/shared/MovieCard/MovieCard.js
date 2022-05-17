import styles from "./styles/MovieCard.module.css";
import { RiAddFill } from "react-icons/ri";

const MovieCard = (props) => {
  return (
    <div className={styles.movieCard}>
      <img
        src="https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        alt=""
      />
      <div className={styles.movieCardContent}>
        <div className={styles.movieCardHeader}>
          <span>No Way Home</span>
          <span>Sci-Fi, Adventure</span>
        </div>

        <div className={styles.movieCardDetails}>
          <span>Synopsis</span>
          <span>
            Peter Parker is unmasked and no longer able to separate his normal
            life from the high-stakes of being a super-hero. When he asks for
            help from Doctor Strange the stakes become even more dangerous,
            forcing him to discover what it truly means to be Spider-Man.
          </span>
        </div>

        <div className={styles.movieCardFooter}>
          <div>8.1/10</div>
          <div>
            <RiAddFill size={38} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
