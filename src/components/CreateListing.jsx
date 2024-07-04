import React from 'react';

const CreateListing = () => {
  function handleAddItem() {

  }

  function handleCreateListing() {

  }
  return (
    <section>CreateListing
      <form>
        <label htmlFor="listing">Title:</label>
        <input type="text" id="listing"></input>
        <label htmlFor="listingDesc">Description:</label>
        <input type="text" id="listingDesc"></input>
        <button onclick="{handleAddItem}">Add Item</button>

        <button type="submit">Create Listing</button>
      </form>
    </section>
  )
};

export default CreateListing;