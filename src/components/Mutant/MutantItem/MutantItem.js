import React, { useContext } from "react";
import PropTypes from "prop-types";

import { MutantContext } from "Contexts/MutantContextProvider";

import Favourite from "Components/Favourite/Favourite";

import { container, sectionFavourite, sectionName } from "./style.css";

const MutantDetail = ({ id, name, skill, level }) => {
  const [mutants, setMutants] = useContext(MutantContext);

  const { favouriteIds } = mutants;

  const validateAdd = () => {
    const { favouriteIds } = mutants;

    return favouriteIds.length < 5;
  };

  const handleAddFavourite = () => {
    if (!validateAdd()) return;

    setMutants({
      ...mutants,
      favouriteIds: [...favouriteIds, id],
    });
  };

  const handleRemoveFavourite = () => {
    setMutants({
      ...mutants,
      favouriteIds: [...favouriteIds.filter((x) => x !== id)],
    });
  };

  return (
    <div className={container}>
      <div className={sectionFavourite}>
        <Favourite
          id={id}
          favouriteList={favouriteIds}
          handleAdd={handleAddFavourite}
          handleRemove={handleRemoveFavourite}
        ></Favourite>
      </div>
      <div>
        <p className={sectionName}>{name}</p>
        <p>nivel:{level}</p>
      </div>
      <div>
        <p>{skill}</p>
      </div>
    </div>
  );
};

MutantDetail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default MutantDetail;
