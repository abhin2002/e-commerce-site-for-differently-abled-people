import React, { useState } from 'react';
import './Customizeproduct.css';

function Customizeproduct() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showDeleteProductForm, setShowDeleteProductForm] = useState(false);
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === 'add') {
      setShowAddProductForm(!showAddProductForm);
      setShowDeleteProductForm(false);
      setShowUpdateProductForm(false);
    } else if (option === 'delete') {
      setShowDeleteProductForm(!showDeleteProductForm);
      setShowAddProductForm(false);
      setShowUpdateProductForm(false);
    } else if (option === 'update') {
      setShowUpdateProductForm(!showUpdateProductForm);
      setShowAddProductForm(false);
      setShowDeleteProductForm(false);
    }
  };

  return (
    <div className="Productsettings">
      <header className="product-header">
        <h1>Product Customization Page</h1>
      </header>
      <div className="options-container">
        <button
        className={`option-button ${selectedOption === 'add' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('add')}
      >
        Add Product
      </button>
      <button
        className={`option-button ${selectedOption === 'delete' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('delete')}
      >
        Delete Product
      </button>
      <button
        className={`option-button ${selectedOption === 'update' ? 'selected' : ''}`}
        onClick={() => handleOptionClick('update')}
      >
        Update Product
      </button>
      </div>
      {showAddProductForm && (
        <div className="add-product-form">
          <h2>Add Product</h2>
          <form>
            <label>
              Product Name:
              <input type="text" name="productName" />
            </label>
            <label>
              Product Price:
              <input type="number" name="productPrice" />
            </label>
            <label>
              Product Description:
              <textarea name="productDescription" />
            </label>
            <label>
              Product Category:
              <select name="productCategory">
                <option value="groceries">Groceries</option>
                <option value="beauty">Beauty</option>
                <option value="fashion">Fashion</option>
                <option value="electronics">Electronics</option>
              </select>
            </label>
            <label>
              Product Images (up to 3):
              <input type="file" name="productImages" multiple />
            </label>
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}
     {showDeleteProductForm && (
      <div className="delete-product-form">
        <h2>Delete Product</h2>
        {/* ... Delete Product Form ... */}
      </div>
    )}
    {showUpdateProductForm && (
      <div className="update-product-form">
        <h2>Update Product</h2>
        {/* ... Update Product Form ... */}
      </div>
    )}
    </div>
  );
}

export default Customizeproduct;
