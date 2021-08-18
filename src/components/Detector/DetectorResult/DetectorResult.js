import React from "react";
import { Link, useParams } from "react-router-dom";
import { detectorRoute } from "Constants/routes";
import { container, mutant, notMutant, message } from "./style.css";

const DetectorResult = () => {
  const { result } = useParams();

  return (
    <div className={container}>
      <div className={message}>
        {!!result === true ? (
          <p className={mutant}>Mutante detectado!</p>
        ) : (
          <p className={notMutant}>El DNA ingresado no es mutante</p>
        )}
      </div>

      <Link to={detectorRoute}>Volver a analizar</Link>
    </div>
  );
};

export default DetectorResult;
