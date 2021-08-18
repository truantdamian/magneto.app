import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Heart from "Icons/Heart";

import { container, heartIcon, active } from "./style.css";

const Favourite = ({ id, favouriteList, handleAdd, handleRemove }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const isFavourite = favouriteList.some((x) => x === id);
    setIsFavourite(isFavourite);
  }, [favouriteList, id]);

  const addFavourite = () => handleAdd();

  const removeFavourite = () => handleRemove();

  const handleFavourite = () =>
    !isFavourite ? addFavourite() : removeFavourite();

  return (
    <button className={container} onClick={handleFavourite}>
      <Heart className={`${heartIcon} ${isFavourite ? active : ""}`} />
    </button>
  );
};

Favourite.propTypes = {
  favouriteList: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  handleAdd: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default Favourite;
