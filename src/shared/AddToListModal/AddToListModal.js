import styles from "./styles/AddToList.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import useGetItems from "../../hooks/useGetItems";
import WatchListItem from "./WatchListItem";
import useOnClickOutside from "../../hooks/useOnClickOutSide";
import { useRef } from "react";
import { HashLoader } from "react-spinners";

const AddToListModal = (props) => {
  const listAPI = useGetItems(
    "http://localhost:5000/api/list/",
    true,
    false,
    "list-data"
  );
  const movie = {
    id: props.id,
    poster_path: props.poster_path,
    original_title: props.original_title,
    genre_ids: props.genre_ids,
    overview: props.overview,
    vote_average: props.vote_average,
  };
  const modalRef = useRef();
  useOnClickOutside(modalRef, props.toggler);
  return (
    <ModalWrapper>
      <div className={styles.addToListModal} ref={modalRef}>
        <span>Your Watchlists</span>
        <div>
          <HashLoader
            color="#20c997"
            css={{
              marginTop: "calc(50% - 80px)",
              marginLeft: "calc(50% - 40px)",
            }}
            loading={listAPI.isLoading}
            size={80}
          />
          {!listAPI.isLoading &&
            listAPI.data.map((item) => {
              return <WatchListItem {...item} movie={movie} />;
            })}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddToListModal;
