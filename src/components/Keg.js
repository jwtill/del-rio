import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <li>
        <div onClick={() => props.whenKegClicked(props.id)}>
          <h2>{props.name} from {props.brewery}</h2>
          <p>{props.pints} pints left</p>
        </div>
      </li>
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