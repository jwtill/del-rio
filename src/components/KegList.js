import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      <div id="keg">
        {props.kegList.map((keg) =>
          <div>
            <Keg
              whenKegClicked={props.onKegSelection}
              name={keg.name}
              brewery={keg.brewery}
              price={keg.price}
              alcohol={keg.alcohol}
              pints={keg.pints}
              id={keg.id}
              key={keg.id} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};



export default KegList;