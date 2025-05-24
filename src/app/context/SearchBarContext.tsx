"use client";
import { createContext, useContext, useState } from "react";

const SearchBarContext = createContext({
  showSearchBar: false,
  setShowSearchBar: (_: boolean) => {},
});

export const useSearchBar = () => useContext(SearchBarContext);

export const SearchBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <SearchBarContext.Provider value={{ showSearchBar, setShowSearchBar }}>
      {children}
    </SearchBarContext.Provider>
  );
};
