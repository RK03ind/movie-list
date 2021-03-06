import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";
import useGetItems from "../../hooks/useGetItems";
import CreateList from "../../shared/CreateList/CreateList";
import ListItem from "../../shared/ListItem/ListItem";

const WatchList = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const listAPI = useGetItems(
    "http://localhost:5000/api/list/",
    true,
    false,
    "list-data"
  );

  return (
    <>
      <HashLoader
        color="#20c997"
        css={{ marginTop: "calc(40vh - 100px)" }}
        loading={listAPI.isLoading}
        size={100}
      />
      {!listAPI.isLoading && (
        <>
          <CreateList />
          {listAPI.data.map((item) => {
            return <ListItem {...item} key={item._id} />;
          })}
        </>
      )}
    </>
  );
};
export default WatchList;
