import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
        <h3>{props.name} from {props.brewery}</h3>
        <p><em>${props.price} </em>{props.alcohol}%</p>
        <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.number,
  alcohol: PropTypes.number
};

export default Keg;