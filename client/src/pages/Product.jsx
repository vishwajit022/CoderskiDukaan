import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Product() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/products/${id}`
      );
      setData(response.data); // Assuming your data is in response.data
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the function to fetch data when the component mounts
  }, [id]); // Add 'id' as a dependency to re-fetch data when the id changes

  return (
    <div className="w-full h-screen">
      {/* Render your product data here */}

      <img src={data.image} alt="" />
    </div>
  );
}

export default Product;
