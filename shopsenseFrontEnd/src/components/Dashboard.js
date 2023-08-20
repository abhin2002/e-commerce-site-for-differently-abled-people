import React, { useState, useEffect } from 'react';
import Navbard from "./Navbard";
import { FaHeart, FaShoppingCart, FaPlayCircle } from 'react-icons/fa';
import "./Dashboard.css";
import ProductCard from "./ProductCard";
import Footerdash from "./Footerdash";
import AdvertisementBox from "./AdvertisementBox";
import MobileImage1 from '../images/googlepixel4a-2.jpg';
import LaptopImage1 from '../images/HP-Laptop-15s-fq5111TU-3.jpg';
import sofaset1 from '../images/sofa-set-1.jpg';
import tomato1 from '../images/tomato-1.jpg';
import Redmi12 from '../images/redmi-12-3.jpeg';
import Philips1 from '../images/Philips-3.jpeg'
import { useFont } from '../routes/FontContext';
import { useColor } from '../routes/ColorContext'; // Adjust the path based on your actual folder structure
const Dashboard = () => {
  const { backgroundColor } = useColor();
  const { fontColor, fontSize } = useFont();
  const [products, setProducts] = useState([]);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/v1/products'); // Adjust the API endpoint
      const data = await res.json();
      setProducts(data); // Assuming the response contains an array of products
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  const handleClick1 = () => setShowMore1(!showMore1);
  const handleClick2 = () => setShowMore2(!showMore2);
  const handleClick3 = () => setShowMore3(!showMore3);
  const handleClick4 = () => setShowMore4(!showMore4);

  const renderProducts = (start, end) =>
    products.slice(start, end).map((product) => (
      <ProductCard
        key={product.id} // Assuming each product has a unique ID
        name={product.name}
        description={product.description}
        imageUrl={product.imageUrl}
      />
    ));

  return (
    <div style={{ backgroundColor }}>
      <Navbard />
      <AdvertisementBox />
      <h1 className="product-headings" style={{ color: fontColor, fontSize }}>
        Recently Added Items
      </h1>
      {/* Render recently viewed products */}
      <div className="product-row" style={{ color: fontColor, fontSize }}>
        {products.length > 0 ? renderProducts(0, 3) : null}
        {showMore1 ? renderProducts(3, 4) : null}
        {products.length > 3 && (
          <button className="view-more" onClick={handleClick1}>
            {showMore1 ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
      {/* ... (similar logic for other sections) */}
      <Footerdash />
    </div>
  );
};

export default Dashboard;