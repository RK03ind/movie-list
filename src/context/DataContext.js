import { createContext, useState } from "react";

export const DataContext = createContext({
  searchData: "",
  setSearchData: () => {},
});

const DataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState();

  const contextData = {
    searchData: searchData,
    setSearchData: setSearchData,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
