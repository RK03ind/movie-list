import { MdDeleteForever } from "react-icons/md";
import styles from "./styles/ListItem.module.css";

const ListItem = () => {
  return (
    <div>
      <span>List 1</span>
      <span>Public</span>
      <span>345 movies</span>
      <div>
        <MdDeleteForever />
      </div>
    </div>
  );
};
export default ListItem;
