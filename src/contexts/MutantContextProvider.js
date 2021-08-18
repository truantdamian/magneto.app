import React, { useState } from "react";
import PropTypes from "prop-types";

export const MutantContext = React.createContext(null);

const MutantContextProvider = ({ children }) => {
  const [mutants, setMutants] = useState({
    favouriteIds: [],
    list: [
      { id: 1, name: "wolverine", skill: "regeneración", level: 4 },
      { id: 2, name: "storm", skill: "controla el clima", level: 3 },
      { id: 3, name: "ciclope", skill: "rayos", level: 3 },
    ],
  });

  return (
    <MutantContext.Provider value={[mutants, setMutants]}>
      {children}
    </MutantContext.Provider>
  );
};

MutantContextProvider.propTypes = {
  children: PropTypes.element,
};

export default MutantContextProvider;
