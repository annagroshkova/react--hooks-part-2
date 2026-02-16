import { createContext, useState, type Dispatch, type SetStateAction } from "react";

type AppContextType = {
  profileIndex: 0 | 1, 
  setProfileIndex: Dispatch<SetStateAction<0 | 1>>;
};

export const AppContext = createContext<AppContextType> ({
  profileIndex: 0,
  setProfileIndex: () => {}
})


