import { useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();

  return (
    <>
      <header>
        {location.pathname === "/trending"
          ? "Trending"
          : location.pathname === "/search"
          ? "Search Results"
          : location.pathname === "/login" || location.pathname === "/register"
          ? ""
          : "Lists"}
      </header>
    </>
  );
};
export default PageHeader;
