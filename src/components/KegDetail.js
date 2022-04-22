import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingPour } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <hr/>
      <h3>{keg.name} from {keg.brewery}</h3>
      <p><em>${keg.price} per pint </em>{keg.alcohol}% Alcohol</p>
      <button onClick={onClickingPour}>Pour</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingPour: PropTypes.func
};

export default KegDetail;