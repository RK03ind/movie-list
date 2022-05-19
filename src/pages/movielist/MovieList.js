import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";
import useGetItems from "../../hooks/useGetItems";
import CreateList from "../../shared/CreateList/CreateList";
import ListItem from "../../shared/ListItem/ListItem";
import MovieCard from "../../shared/MovieCard/MovieCard";

const MovieList = () => {
  const { id } = useParams();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const movieListAPI = useGetItems(
    `http://localhost:5000/api/list/${id}`,
    authCtx.userData ? true : false,
    false,
    id
  );

  return (
    <>
      <HashLoader
        color="#20c997"
        css={{ marginTop: "calc(40vh - 100px)" }}
        loading={movieListAPI.isLoading}
        size={100}
      />
      {!movieListAPI.isLoading && (
        <>
          {movieListAPI.data.list.map((item) => {
            return <MovieCard {...item} key={item._id} delete={true} />;
          })}
        </>
      )}
    </>
  );
};
export default MovieList;
