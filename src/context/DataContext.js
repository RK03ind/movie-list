import { createContext, useState } from "react";

export const DataContext = createContext({
  searchData: "",
  setSearchData: () => {},
  location: "",
  setLocation: () => {},
});

const DataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState();
  const [location, setLocation] = useState(
    window.location.pathname.replace("/", "")
  );

  const contextData = {
    searchData: searchData,
    setSearchData: setSearchData,
    location: location,
    setLocation: setLocation,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
