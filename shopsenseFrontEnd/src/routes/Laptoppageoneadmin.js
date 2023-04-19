import React, { useState } from "react";
import "./Laptoppageone.css";
import Navbard from "../components/Navbard";
import { useNavigate } from "react-router-dom";
const Laptoppageoneadmin = () => {
  // sample product data
     const navigate=useNavigate();
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "product1.jpg",
      category: "Category 1",
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: "Product 2",
      image: "product2.jpg",
      category: "Category 2",
      price: 200,
      stock: 5,
    },
    {
      id: 3,
      name: "Product 3",
      image: "product3.jpg",
      category: "Category 1",
      price: 150,
      stock: 20,
    },
  ];
  const [productData, setProductData] = useState([]);

  // form input state
  const [formInput, setFormInput] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    images: [],
    description:"",
  });
   let name,value;
  // handle input change
  const handleInputChange = (event) => {
    console.log(event);
    const { name, value, files } = event.target;
  
    if (name === "images") {
      const images = Array.from(files);
      setFormInput({ ...formInput, images });
    } else {
      setFormInput({ ...formInput, [name]: value });
    }
  };
  
  // handle form submit
  const handleSubmit = async (event) => {
    console.log("Product has been added")
    event.preventDefault();
  
    const { name, category, price, stock, images,description } = formInput;
    const product = { name, category, price, stock, images,description };
    // Send POST request to backend API to add product
    const response= await fetch("/api/v1/product/new", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
    });
    const data = await response.json();
    if (response.status === 201 ||!data) {
      window.alert("Products cannot be added!");
      window.alert(response.statusText)
      console.log("Products cannot be added!");
    } else {
      console.log(data)
      window.alert("Products have been added!!");
      console.log("Products have been added!!");
      
    }
    // return axios.post("http://localhost:4000/api/v1/register")

      /*.then((response) => response.json())
      .then((data) => {
        // Add the new product to the state
        setProductData([...productData, data]);
        setFormInput({ name: "", category: "", price: "", stock: "", images: [] });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
    setProductData([...productData, product]);
    setFormInput({ name: "", category: "", price: "", stock: "", images: [],description:"" });
    */
   
  };
  
  return (
    <div>
    <Navbard />
    <div className="add-container">
       
        <h8>Add Laptop</h8>
      <form method="POST" onSubmit={handleSubmit}>
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
          <div className="form-group">
            <label htmlFor="category">Product Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={formInput.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="stock">Product Stock</label>
            <input
              type="text"
              className="form-control"
              id="stock"
              name="stock"
              value={formInput.stock}
              onChange={handleInputChange}
              required
            />
            <div className="form-group">
  <label htmlFor="description">Product Description</label>
  <textarea
    className="form-control"
    id="description"
    name="description"
    value={formInput.description}
    onChange={handleInputChange}
    required
  />
</div>

          </div>
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
    </div>
    
  );
    
  };

export default Laptoppageoneadmin;
