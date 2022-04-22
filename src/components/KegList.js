import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg, index) =>
        <Keg names={keg.name}
          brewery={keg.brewery}
          price={keg.price}
          alcohol={keg.alcohol}
          key={index} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};



export default KegList;