import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingPour } = props;
  if (keg.pints === 0) {
    document.getElementById("pour").innerHTML = "keg empty";
    document.getElementById("pour").disabled = true;
  }
  return (
    <React.Fragment>
      <div id="details-wrap">
        <div id="details">
          <h1>{keg.name} from {keg.brewery}</h1>
          <h3>${keg.price} per pint</h3>
          <p><em>{keg.alcohol}% Alcohol</em></p>
          <button id="pour" onClick={() => onClickingPour(keg.id)}>Pour</button>
          <h3>{keg.pints} pints left!</h3>
        </div>
      </div>
    </React.Fragment>
  );
}


KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingPour: PropTypes.func
};

export default KegDetail;