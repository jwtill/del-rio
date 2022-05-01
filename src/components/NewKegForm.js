import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brewery: event.target.brewery.value,
      price: parseInt(event.target.price.value),
      alcohol: parseInt(event.target.alcohol.value),
      pints: parseInt(event.target.pints.value),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <div id="kegform-wrap">
        <div id="kegform">
          <form onSubmit={handleNewKegFormSubmission}>
            <h3>Enter Keg Information Here:</h3>
            <input
              type='text'
              name='name'
              placeholder='Beer or Cider Name' />
            <input
              type='text'
              name='brewery'
              placeholder='Brewery' />
            <input
              type='number'
              name='price'
              placeholder='Price per Pint' />
            <input
              min="0" max="15" step=".1"
              type='number'
              name='alcohol'
              placeholder='Alcohol Percentage' />
            <input
              type='hidden'
              name='pints'
              value='124' />
            <button type='submit'>Add</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
