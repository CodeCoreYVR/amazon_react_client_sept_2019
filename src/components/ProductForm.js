import React from "react";

function ProductForm(props) {
  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    const price = Math.floor(Math.random() * 100);
    props.onSubmit({
      title: formData.get("title"),
      description: formData.get("description"),
      price
    });
    currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input name="title" id="title" />
      </div>
      <div>
        <label>Product Body</label>
        <textarea name="description" id="description" rows="2" />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
}

export default ProductForm;
