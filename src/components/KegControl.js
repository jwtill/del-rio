import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let addKegButton = null;
    if (this.state.formVisibleOnPage) { //if true show form
      currentlyVisibleState = <NewKegForm />
      addKegButton = <button onClick={this.handleClick}>Back</button>
    } else { //if false, show list, show add keg button
      currentlyVisibleState = <KegList />
      addKegButton = <button onClick={this.handleClick}>Add keg</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}
      </React.Fragment>
    );
  }
}

export default KegControl;