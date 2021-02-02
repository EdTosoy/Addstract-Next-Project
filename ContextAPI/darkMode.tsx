import React, { useState, createContext } from "react";

type ContextProps = {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DarkModeContext = createContext<ContextProps>({
  darkmode: false,
  setDarkmode: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const DarkModeProvider = ({ children }: Props) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  return (
    <DarkModeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
