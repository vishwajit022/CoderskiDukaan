import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useSelector } from "react-redux";

function Categories() {
  const [products, setProducts] = useState([]);

  const { data } = useSelector((state) => state.category);

  return (
    <div>
      <div className="flex items-center gap-10 p-3">
        <div className="flex items-center gap-4 text-lg text-black">
          <FaFilter />
          Filter
        </div>
        {data.map((e) => (
          <div key={e} className="p-2 text-md bg-zinc-100 rounded-2xl">
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
