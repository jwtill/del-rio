import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brewery: event.target.brewery.value, 
      price: event.target.price.value, 
      alcohol: event.target.alcohol.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
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
          type='number'
          name='alcohol'
          placeholder='Alcohol Percentage' />
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
