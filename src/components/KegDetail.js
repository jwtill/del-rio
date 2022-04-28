import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingPour } = props;
  if(keg.pints === 0) {
    document.getElementById("pour").innerHTML = "keg empty";
    document.getElementById("pour").disabled = true; 
  }
  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <hr/>
      <h3>{keg.name} from {keg.brewery}</h3>
      <p>${keg.price} per pint</p>
      <p>{keg.alcohol}% Alcohol</p>
      <button id="pour" onClick={() => onClickingPour(keg.id)}>Pour</button>
      <h3>{keg.pints} pints left!</h3>
    </React.Fragment>
  );
}


KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingPour: PropTypes.func
};

export default KegDetail;