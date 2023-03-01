import { createContext, useContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  // disable scrool if sidebar open
  if (showSidebar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const values = {
    showSidebar,
    toggleSidebar,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useGlobalCxt = () => {
  return useContext(Context);
};

export default useGlobalCxt;
