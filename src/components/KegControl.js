import React from 'react';

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
      </React.Fragment>
    );
  }
}