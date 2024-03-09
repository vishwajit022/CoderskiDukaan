import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useSelector } from "react-redux";

function Categories() {
  const [products, setProducts] = useState([]);

  const { data } = useSelector((state) => state.category);

  return (
    <div>
      <div className="flex text-gray-700 dark:text-gray-300 items-center gap-10 p-3">
        <div className="flex items-center gap-4 text-lg">
          <FaFilter />
          Filter
        </div>
        {data.map((e) => (
          <div key={e} className="badge h-[2rem]  px-4  badge-accent">
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
