import React, { useState } from 'react';
import './Customizeproduct.css';
import { Link, useNavigate } from "react-router-dom";


function Customizeproduct() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showDeleteProductForm, setShowDeleteProductForm] = useState(false);
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    productPrice: 0,
    productCategory: '',
  });
  const handleAddProductInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewProduct({...newProduct,[name]: value,});
  };
  // Handle form submission for adding a product
  const handleAddProductSubmit = async (e) => {
    e.preventDefault();
    
    const { productName, productPrice, productDescription, productCategory} = newProduct;
    if (!productName || !productPrice || !productDescription || !productCategory ) {
      window.alert('Please fill out all required fields.');
      return;
  }
  const formData = new FormData();
  formData.append('productName', productName);
  formData.append('productPrice', productPrice);
  formData.append('productDescription', productDescription);
  formData.append('productCategory', productCategory);
  
  try {
    const res = await fetch('http://localhost:4000/api/v1/product/new', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (res.status === 201) {
      window.alert('Product added successfully');
      // Reset the form and close it
      setNewProduct({
        productName: '',
        productPrice: 0,
        productDescription: '',
        productCategory: '',
      });
      setShowAddProductForm(false);
    } else {
      window.alert(data.message);
    }
  } catch (err) {
    console.error('Error adding product:', err);
    window.alert('An error occurred while adding the product.');
  } 
};
    
    
  

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
          <form onSubmit={handleAddProductSubmit}>
          <label>
              Product Name:
              <input type="text" name="productName" value={newProduct.productName} onChange={handleAddProductInput} />
            </label>
            <label>
              Product Price:
              <input type="number" name="productPrice" value={newProduct.productPrice} onChange={handleAddProductInput}/>
            </label>
            <label>
              Product Description:
              <textarea name="productDescription" value={newProduct.productDescription} onChange={handleAddProductInput}/>
            </label>
            <label>
              Product Category:
              <textarea name="productCategory" value={newProduct.productCategory} onChange={handleAddProductInput}/>
            </label>
            <label>
              Product Images (up to 3):
              <input type="file" name="productImages" multiple />
            </label>
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}
      {/* ... Other JSX ... */}
    </div>
  );
}

export default Customizeproduct;
