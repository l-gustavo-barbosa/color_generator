import { createContext, useState } from "react";
import { CMYKContextProps } from "../types";

export const CMYKContext = createContext({} as CMYKContextProps);

export function CMYKProvider({ children }: any) {
  const [cyan, setCyan] = useState(0);
  const [magenta, setMagenta] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [key, setKey] = useState(0);
  const r = 255 * (1 - cyan/100) * (1 - key/100);
  const g = 255 * (1 - magenta/100) * (1 - key/100);
  const b = 255 * (1 - yellow/100) * (1 - key/100);
  const color = `rgb(${r}, ${g}, ${b})`;
  return (
    <CMYKContext.Provider
      value={{
        cyan,
        magenta,
        yellow,
        key,
        setCyan,
        setMagenta,
        setYellow,
        setKey,
        color,

      }}
    >
      
      {children}
    </CMYKContext.Provider>
    
  );
}
