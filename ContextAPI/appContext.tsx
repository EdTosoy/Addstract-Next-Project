import React, { useState, createContext } from "react";

type ContextProps = {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<ContextProps>({
  darkmode: false,
  setDarkmode: () => {},
  openMenu: false,
  setOpenMenu: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: Props) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{ darkmode, setDarkmode, openMenu, setOpenMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};
