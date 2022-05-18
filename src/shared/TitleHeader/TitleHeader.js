import { useLocation } from "react-router-dom";

const TitleHeader = () => {
  const location = useLocation();

  return (
    <>
      <header>
        {location.pathname === "/trending"
          ? "Trending"
          : location.pathname === "/search"
          ? "Search Results"
          : "Lists"}
      </header>
    </>
  );
};
export default TitleHeader;
