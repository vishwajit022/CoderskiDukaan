import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

function Categories() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/categories/"
      );

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center gap-10 p-3">
        <div className="flex items-center gap-4 text-black text-lg">
          <FaFilter />
          Filter
        </div>
        {products.map((e) => (
          <div key={e} className="text-md bg-zinc-100 rounded-2xl p-2">
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
