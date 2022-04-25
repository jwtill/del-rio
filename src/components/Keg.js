import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name} from {props.brewery}</h3>
        <hr />
        <p>{props.pints}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired,
  pints: PropTypes.string,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func 
};

export default Keg;