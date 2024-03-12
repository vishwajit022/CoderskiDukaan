import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Product() {
  const [data, setData] = useState([]);
  const id = useParams();
  let p = [];
  useSelector((e) => {
    p = e.products.data;
  });
  let d = p.find((e) => e._id == id);
  console.log(d);

  return <div>Product</div>;
}

export default Product;
