import React from "react";
import { Link } from "react-router-dom";
import { mutantsNewRoute } from "Constants/routes";

import { container } from "./style.css";

const MutantNewOk = () => {
  return (
    <div className={container}>
      <p>Se agrego con exito!</p>
      <Link to={mutantsNewRoute}>Cargar otro</Link>
    </div>
  );
};

export default MutantNewOk;
