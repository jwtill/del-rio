import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} from {props.brewery}</h3>
        <p>{props.pints} pints left</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcohol: PropTypes.number.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func 
};

export default Keg;