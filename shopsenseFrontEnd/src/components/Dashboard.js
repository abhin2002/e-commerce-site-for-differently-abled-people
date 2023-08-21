// import React, { useState, useEffect } from "react";
// import Navbard from "./Navbard";
// import { FaHeart, FaShoppingCart, FaPlayCircle } from 'react-icons/fa';
// import "./Dashboard.css";
// import ProductCard from "./ProductCard";
// import Footerdash from "./Footerdash";
// import AdvertisementBox from "./AdvertisementBox";
// import MobileImage1 from '../images/googlepixel4a-2.jpg';
// import LaptopImage1 from '../images/HP-Laptop-15s-fq5111TU-3.jpg';
// import sofaset1 from '../images/sofa-set-1.jpg';
// import tomato1 from '../images/tomato-1.jpg';
// import Redmi12 from '../images/redmi-12-3.jpeg';
// import Philips1 from '../images/Philips-3.jpeg'
// import { useFont } from '../routes/FontContext';
// import { useColor } from '../routes/ColorContext'; // Adjust the path based on your actual folder structure
// // const initialProducts = [  {    id: 1,    name: 'Google Pixel 4a',    description: 'Everything you love about Google',    likes: 10,audio:"",imageUrl:MobileImage1 },  {    id: 2,    name: 'HP Laptop 15s-fq5111TU',    description: 'Stay connected to what matters',    likes: 5,audio:"",imageUrl:LaptopImage1  },  {    id: 3,    name: 'Wakefit Three Seater',    description: 'Wakefit for the modern Indian household.',    likes: 7,audio:"",imageUrl:sofaset1  },  {    id: 4,    name: 'Product 4',    description: 'This is product 4',    likes: 2,audio:""  },  {    id: 5,    name: 'Product 5',    description: 'This is product 5',    likes: 3, audio:"" },  {    id: 6,    name: 'Product 6',    description: 'This is product 6',    likes: 8,audio:""  },  {    id: 7,    name: 'Product 7',    description: 'This is product 7',    likes: 6, audio:"" },  {    id: 8,    name: 'Product 8',    description: 'This is product 8',    likes: 12,audio:""  },{    id: 9,    name: 'Product 9',    description: 'This is product 9',    likes: 12,audio:""  },{    id: 10,    name: 'Product 10',    description: 'This is product 10',    likes: 12, audio:"" },{    id: 11,    name: 'Tomato-Blaby Special',    description: 'Perfectly round and smooth',    likes: 12,audio:"",imageUrl:tomato1 },{    id: 12,    name: 'Redmi 12 5G',    description: 'REDMI NOTE 12 at an unbeatable price.',    likes: 12,audio:"",imageUrl:Redmi12 },{    id: 13,    name: 'Philips X2/27 Fidelio ',    description: 'Headphones for neutral sound listening',    likes: 12,audio:"",imageUrl:Philips1  },{    id: 14,    name: 'Product 14',    description: 'This is product 14',    likes: 12, audio:"" },{    id: 15,    name: 'Product 15',    description: 'This is product 15',    likes: 12,audio:""  },{    id: 16,    name: 'Product 16',    description: 'This is product 16',    likes: 12,audio:""  },{    id: 17,    name: 'Product 17',    description: 'This is product 17',    likes: 12, audio:"" },{    id: 18,    name: 'Product 18',    description: 'This is product 18',    likes: 12, audio:"" },{    id: 19,    name: 'Product 19',    description: 'This is product 19',    likes: 12, audio:"" }];
// const initialProducts = [];




// const Dashboard = () => {
//   const { backgroundColor } = useColor();
//   const { fontColor, fontSize } = useFont();
//   const [products, setProducts] = useState(initialProducts);
//   const [showMore1, setShowMore1] = useState(false);
//   const [showMore2, setShowMore2] = useState(false);
//   const [showMore3, setShowMore3] = useState(false);
//   const [showMore4, setShowMore4] = useState(false);

//   const handleClick1 = () => setShowMore1(!showMore1);
//   const handleClick2 = () => setShowMore2(!showMore2);
//   const handleClick3 = () => setShowMore3(!showMore3);
//   const handleClick4 = () => setShowMore4(!showMore4);

//   // const renderProducts = (start, end) =>
//   //   products.slice(start, end).map((product) => (
//   //     <ProductCard
//   //       key={product.id}
//   //       name={product.name}
//   //       description={product.description}
//   //       imageUrl={product.imageUrl}
//   //     />
//   //   ));

//   useEffect(() => {
//     // Fetch data from your API here and update the products state.
//     fetch("http://localhost:4000/api/v1/products")
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming your API returns an array of products.
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

  
//   return (
//     <div style={{ backgroundColor, color: fontColor, fontSize }}>
//       {/* Render your components using the retrieved products data */}
//       <Navbard />
//       <AdvertisementBox />
//       <h10 className="product-headings" style={{ color: fontColor, fontSize }}>
//         Recently Viewed Items
//       </h10>
//       <div className="product-row" style={{ color: fontColor, fontSize }}>
//         {/* Render products using the map function */}
//         {products.slice(0, 3).map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             description={product.description}
//             imageUrl={product.imageUrl}
//           />
//         ))}
//         {/* Add the "View More" button here */}
//       </div>
//       {/* Repeat the above code for other product sections */}
//       <Footerdash />
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import Navbard from "./Navbard";
import AdvertisementBox from "./AdvertisementBox";
import ProductCard from "./ProductCard";
import Footerdash from "./Footerdash";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [showMore1, setShowMore1] = useState(false);
  // Other showMore states and handlers

  useEffect(() => {
    // Fetch data from your API here and update the products state.
    fetch("http://localhost:4000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API returns an array of products.
        console.log("hi")
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Navbard />
      <AdvertisementBox />
      <h1>Recently Viewed Items</h1>
      <div className="product-row">
        {/* Map through the products and render ProductCard components */}
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            description={product.description}
            // Add other product properties here as needed
          />
        ))}
        {/* Add the "View More" button here */}
      </div>
      {/* Repeat the above code for other product sections */}
      <Footerdash />
    </div>
  );
};

export default Dashboard;
