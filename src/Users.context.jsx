import React, { Children } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export default function Users({ children }) {
  const Users = [
    { id: 1, name: "ozodbek" },
    { id: 2, name: "ozodbek" },
    { id: 3, name: "ozodbek" },
    { id: 4, name: "ozodbek" },
  ];
  const [data, setData] = useState(Users);
  return (
    <UserContext.Provider value={[data, setData]}>
      {children}
    </UserContext.Provider>
  );
}
