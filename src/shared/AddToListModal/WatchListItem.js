/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import useGetItems from "../../hooks/useGetItems";
import usePostItems from "../../hooks/usePostItems";

const WatchListItem = (props) => {
  const addMovieAPI = usePostItems("http://localhost:5000/api/list/", true);

  const checkAPI = useGetItems(
    `http://localhost:5000/api/list/check/${props._id}/${props.movie.id}`,
    true,
    false,
    `${props._id}${props.movie.id}`
  );
  const [isAdded, setAdded] = useState(false);
  const postMovieData = () => {
    addMovieAPI.mutate({
      ...props.movie,
      _id: props._id,
    });
  };

  useEffect(() => {
    if (addMovieAPI.isSuccess) {
      setTimeout(() => {
        window.alert("Added Successfully");
      }, 800);
    }
  }, [addMovieAPI.isSuccess]);

  useEffect(() => {
    if (checkAPI.isSuccess) {
      setAdded(checkAPI.data);
    }
  }, [checkAPI.isSuccess]);

  return (
    <div>
      <span>{props.list_name}</span>
      {!addMovieAPI.isSuccess && !isAdded ? (
        <RiAddFill size={35} onClick={postMovieData} />
      ) : (
        <BsCheckLg size={30} style={{ fill: "var(--primary-color)" }} />
      )}
    </div>
  );
};
export default WatchListItem;
