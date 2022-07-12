import { createContext, useState } from "react";

const LinkDrawerContext = createContext({});

const LinkDrawerProvider = ({ children }) => {
  const [linkObjectArray, setLinkObjectArray] = useState([]);

  return (
    <LinkDrawerContext.Provider
      value={{
        linkObjectArray,
        setLinkObjectArray,
      }}
    >
      {children}
    </LinkDrawerContext.Provider>
  );
};

export { LinkDrawerContext, LinkDrawerProvider };
