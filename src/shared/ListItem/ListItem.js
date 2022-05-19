import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "./styles/ListItem.module.css";

const ListItem = ({ _id, list_name, visibility, movie_count }) => {
  const [showDel, setDelVisibility] = useState(false);

  return (
    <div
      className={styles.listItem}
      onMouseEnter={() => setDelVisibility(true)}
      onMouseLeave={() => setDelVisibility(false)}
    >
      <span>{list_name}</span>
      <span>{`${movie_count} movies`}</span>
      <span>{visibility}</span>
      {showDel && (
        <div>
          <MdDeleteForever size={30} />
        </div>
      )}
    </div>
  );
};
export default ListItem;
