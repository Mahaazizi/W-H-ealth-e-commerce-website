import React, { useEffect } from "react";

import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import axios from "axios";
import Card from "./Card";

export default function Cardy() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => console.log("res", res.data))
      .catch((err) => console.error(err));
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Card key={product._id} product={product}></Card>
          ))}
        </div>
      )}
    </div>
  );
}
