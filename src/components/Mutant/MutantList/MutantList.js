import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { mutantsNewRoute } from "Constants/routes";

import MutantItem from "Components/Mutant/MutantItem/MutantItem";

import { MutantContext } from "Contexts/MutantContextProvider";

import { container, containerList } from "./style.css";
import { button } from "Styles/base.css";

const MutantList = () => {
  const [mutants] = useContext(MutantContext);

  const { list } = mutants;

  return (
    <div className={container}>
      <div>
        <Link className={button} to={mutantsNewRoute}>
          Nuevo
        </Link>
      </div>
      <div className={containerList}>
        {list.map((x) => (
          <MutantItem
            key={x.id}
            id={x.id}
            name={x.name}
            skill={x.skill}
            level={x.level}
          />
        ))}
      </div>
    </div>
  );
};

export default MutantList;
