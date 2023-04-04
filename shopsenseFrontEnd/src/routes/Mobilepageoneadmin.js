import React, { useState } from "react";
import "./Mobilepageone.css";
import Navbard from "../components/Navbard";
const Mobilepageone = () => {
  // sample product data
  
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      image: "product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      image: "product3.jpg",
    },
  ];
  const [productData, setProductData] = useState([]);

  // form input state
  const [formInput, setFormInput] = useState({
    name: "",
    price: "",
    images: [],
  });
  
  // handle input change
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
  
    if (name === "images") {
      const images = Array.from(files);
      setFormInput({ ...formInput, images });
    } else {
      setFormInput({ ...formInput, [name]: value });
    }
  };
  
  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { name, price, images } = formInput;
    const product = { name, price, images };
  
    setProductData([...productData, product]);
    setFormInput({ name: "", price: "", images: [] });
  };
  
  return (
    
    <div className="container">
        <Navbard />
        <h8>Mobiles</h8>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Product Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={formInput.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Product Images</label>
          <input
            type="file"
            className="form-control-file"
            id="images"
            name="images"
            onChange={handleInputChange}
            multiple
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      <div className="row">
        {productData.map((product, index) => (
          <div key={index} className="col-sm-4">
            <div className="product">
              <h2>{product.name}</h2>
              {product.images.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt="" />
              ))}
              <div className="product-details">
                <p className="product-price">${product.price}</p>
                <div className="product-icons">
                  <i className="far fa-heart"></i>
                  <i className="fas fa-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 
};

export default Mobilepageone;
