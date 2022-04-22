import React from 'react';
import Keg from './Keg';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,

    };
  }

  render() {
    

    return (
      <React.Fragment>
        <h1>Welcome to Keg Kontrol</h1>
        {<Keg />}
      </React.Fragment>
    );
  }
}

export default KegControl;