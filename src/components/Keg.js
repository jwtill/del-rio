import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
        <h3>{props.name} from {props.brewery}</h3>
        <p><em>${props.price} per pint </em>{props.alcohol}% Alcohol</p>
        <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired
};

export default Keg;