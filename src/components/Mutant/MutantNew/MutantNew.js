import React, { useContext, useState } from "react";

import { MutantContext } from "Contexts/MutantContextProvider";
import { useHistory } from "react-router-dom";

import { mutantsNewOkRoute } from "Constants/routes";

import { container, formInput, errorInput } from "./style.css";
import { button } from "Styles/base.css";

const MutantNew = () => {
  const [mutants, setMutants] = useContext(MutantContext);
  const history = useHistory();
  const [mutant, setMutant] = useState({ name: "", skill: "", level: "1" });
  const [mutantError, setMutantError] = useState({ name: "", skill: "" });

  const validateForm = () => {
    let name = "";
    let skill = "";
    let isOk = true;

    if (mutant.name.trim() === "") {
      name = "El nombre es requerido";
      isOk = false;
    }

    if (mutant.skill.trim() === "") {
      skill = "Ingrese una habilidad";
      isOk = false;
    }

    setMutantError({
      ...mutantError,
      name,
      skill,
    });

    return isOk;
  };

  const handleChange = ({ target }) => {
    setMutant({
      ...mutant,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setMutants({
      ...mutants,
      list: [
        ...mutants.list,
        {
          id: new Date().getTime(),
          name: mutant.name,
          skill: mutant.skill,
          level: mutant.level,
        },
      ],
    });

    history.push(mutantsNewOkRoute);
  };

  return (
    <form className={container} onSubmit={handleSubmit} noValidate={false}>
      <div className={formInput}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={mutant.name}
          onChange={handleChange}
        />
        {mutantError.name != "" && (
          <span className={errorInput}>{mutantError.name}</span>
        )}
      </div>
      <div className={formInput}>
        <label htmlFor="skill">Habilidad</label>
        <input
          type="text"
          id="skill"
          name="skill"
          value={mutant.skill}
          onChange={handleChange}
        />
        {mutantError.skill != "" && (
          <span className={errorInput}>{mutantError.skill}</span>
        )}
      </div>
      <div>
        <label htmlFor="level1">1</label>
        <input
          type="radio"
          id="level1"
          name="level"
          value="1"
          checked={mutant.level === "1"}
          onChange={handleChange}
        ></input>

        <label htmlFor="level2">2</label>
        <input
          type="radio"
          id="level2"
          name="level"
          value="2"
          checked={mutant.level === "2"}
          onChange={handleChange}
        ></input>

        <label htmlFor="level3">3</label>
        <input
          type="radio"
          id="level3"
          name="level"
          value="3"
          checked={mutant.level === "3"}
          onChange={handleChange}
        ></input>

        <label htmlFor="level4">4</label>
        <input
          type="radio"
          id="level4"
          name="level"
          value="4"
          checked={mutant.level === "4"}
          onChange={handleChange}
        ></input>

        <label htmlFor="level5">5</label>
        <input
          type="radio"
          id="level5"
          name="level"
          value="5"
          checked={mutant.level === "5"}
          onChange={handleChange}
        ></input>
      </div>

      <input className={button} type="submit" value="Guardar" />
    </form>
  );
};

export default MutantNew;
