import React from "react";
import { v4 } from 'uuid';

function NewKegForm() {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brewery.value);
    console.log(event.target.price.value);
    console.log(event.target.alcohol.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}> {/*Call ^^^ function onSubmit*/}
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

export default NewKegForm;
