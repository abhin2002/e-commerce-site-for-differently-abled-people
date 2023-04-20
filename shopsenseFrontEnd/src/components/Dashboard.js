import React,{useState} from "react";
import Navbard from "./Navbard";
import { FaHeart, FaShoppingCart, FaPlayCircle } from 'react-icons/fa';
import "./Dashboard.css";
import ProductCard from "./ProductCard";
import Footerdash from "./Footerdash";
import AdvertisementBox from "./AdvertisementBox";
const initialProducts = [  {    id: 1,    name: 'Product 1',    description: 'This is product 1',    likes: 10,audio:""   },  {    id: 2,    name: 'Product 2',    description: 'This is product 2',    likes: 5,audio:""  },  {    id: 3,    name: 'Product 3',    description: 'This is product 3',    likes: 7,audio:""  },  {    id: 4,    name: 'Product 4',    description: 'This is product 4',    likes: 2,audio:""  },  {    id: 5,    name: 'Product 5',    description: 'This is product 5',    likes: 3, audio:"" },  {    id: 6,    name: 'Product 6',    description: 'This is product 6',    likes: 8,audio:""  },  {    id: 7,    name: 'Product 7',    description: 'This is product 7',    likes: 6, audio:"" },  {    id: 8,    name: 'Product 8',    description: 'This is product 8',    likes: 12,audio:""  },{    id: 9,    name: 'Product 9',    description: 'This is product 9',    likes: 12,audio:""  },{    id: 10,    name: 'Product 10',    description: 'This is product 10',    likes: 12, audio:"" },{    id: 11,    name: 'Product 11',    description: 'This is product 11',    likes: 12,audio:""  },{    id: 12,    name: 'Product 12',    description: 'This is product 12',    likes: 12,audio:""  },{    id: 13,    name: 'Product 13',    description: 'This is product 13',    likes: 12,audio:""  },{    id: 14,    name: 'Product 14',    description: 'This is product 14',    likes: 12, audio:"" },{    id: 15,    name: 'Product 15',    description: 'This is product 15',    likes: 12,audio:""  },{    id: 16,    name: 'Product 16',    description: 'This is product 16',    likes: 12,audio:""  },{    id: 17,    name: 'Product 17',    description: 'This is product 17',    likes: 12, audio:"" },{    id: 18,    name: 'Product 18',    description: 'This is product 18',    likes: 12, audio:"" },{    id: 19,    name: 'Product 19',    description: 'This is product 19',    likes: 12, audio:"" }];
const Dashboard = () => {
    const [products, setProducts] = useState(initialProducts);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  const handleClick1 = () => setShowMore1(!showMore1);
  const handleClick2 = () => setShowMore2(!showMore2);
  const handleClick3 = () => setShowMore3(!showMore3);
  const handleClick4 = () => setShowMore4(!showMore4);

  const renderProducts = (start, end) =>
    products.slice(start, end).map((product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        description={product.description}
        imageUrl={product.imageUrl}
      />
    ));
    return (
        <div>
            <Navbard/>
            <AdvertisementBox/>
            <h10 className="product-headings">Recently Viewed Items</h10>
            <div className="product-row">
        {renderProducts(0, 3)}
        {showMore1 ? renderProducts(3, 4) : null}
        {products.length > 3 && (
          <button className="view-more" onClick={handleClick1}>
            {showMore1 ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
      <h10 className="product-headings">Recommended Items</h10>
      <div className="product-row">
        {renderProducts(5, 8)}
        {showMore2 ? renderProducts(8, 9) : null}
        {products.length > 8 && (
          <button className="view-more" onClick={handleClick2}>
            {showMore2 ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
      <h10 className="product-headings">Bestselling Items</h10>
      <div className="product-row">
        {renderProducts(10, 13)}
        {showMore3 ? renderProducts(13, 14) : null}
        {products.length > 13 && (
          <button  className="view-more" onClick={handleClick3}>
            {showMore3 ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
      <h10 className="product-headings">Great on deals</h10>
    <div className="product-row">
  {renderProducts(15, 18)}
  {showMore4 ? renderProducts(18, 19) : null}
  {products.length > 18 && (
    <button className="view-more" onClick={handleClick4}>
      {showMore4 ? 'View Less' : 'View More'}
    </button>
  )}
</div>
<Footerdash/>
 </div>
    );};
    export default Dashboard;