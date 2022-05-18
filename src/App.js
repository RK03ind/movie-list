import { useContext } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { DataContext } from "./context/DataContext";
import Search from "./pages/search/Search";
import Trending from "./pages/trending/Trending";
import WatchList from "./pages/watchlist/WatchList";
import ListItem from "./shared/ListItem/ListItem";
import SideBar from "./shared/SideBar/SideBar";
import TitleHeader from "./shared/TitleHeader/TitleHeader";

function App() {
  const dataCtx = useContext(DataContext);

  return (
    //1064
    <>
      <Router>
        <div className="main-wrapper">
          <SideBar />
          <div className="content-wrapper">
            <TitleHeader />
            <main id="mainList">
              <Routes>
                <Route path="/" element={<WatchList />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
