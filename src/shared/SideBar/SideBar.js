import styles from "./styles/SideBar.module.css";

import { BiCameraMovie, BiHome } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const dataCtx = useContext(DataContext);
  const navigate = useNavigate();

  const navigateTo = (path) => {
    dataCtx.setLocation(path);
    navigate(path);
  };

  return (
    <aside className={styles.sideBar}>
      <header>
        <BiCameraMovie size={40} /> MovieList
      </header>
      <SearchBar />
      <div className={styles.sidebarItem} onClick={() => navigateTo("/")}>
        <BiHome size={30} />
        Home
      </div>
      <div
        className={styles.sidebarItem}
        onClick={() => navigateTo("trending")}
      >
        <AiFillFire size={30} /> Trending
      </div>
    </aside>
  );
};

export default SideBar;
