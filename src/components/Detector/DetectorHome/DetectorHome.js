import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { detectMutantDNA } from "Services/api";

import { detectorResultRoute } from "Constants/routes";

import { container } from "./style.css";

const Detector = () => {
  const history = useHistory();
  const [dna, setDna] = useState([
    ["A", "T", "G", "C", "G", "A"],
    ["G", "A", "G", "T", "G", "C"],
    ["T", "T", "A", "T", "G", "T"],
    ["A", "G", "A", "A", "G", "G"],
    ["C", "C", "C", "C", "T", "A"],
    ["T", "C", "A", "C", "T", "G"],
  ]);

  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }, x, y) => {
    dna[x][y] = target.value;
    setDna([...dna]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await detectMutantDNA(dna.map((x) => x.join("")));
    setLoading(false);
    history.push(detectorResultRoute.replace(":result", result.body.isMutant));
  };

  return (
    <div className={container}>
      <form>
        <div>
          {dna.map((x, xIndex) =>
            x.map((y, yIndex) => (
              <input
                key={`${xIndex}${yIndex}`}
                type="text"
                value={y}
                maxLength={1}
                onChange={(e) => handleChange(e, xIndex, yIndex)}
              />
            ))
          )}
        </div>
        <button onClick={handleSubmit}>
          {!loading ? "Enviar" : "Procesando..."}
        </button>
      </form>
    </div>
  );
};

export default Detector;
