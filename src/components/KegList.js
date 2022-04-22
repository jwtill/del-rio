import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      
    </React.Fragment>
  );
}

KegList.propTypes = {
  KegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;