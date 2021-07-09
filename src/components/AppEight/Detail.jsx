import React from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

const baseURL = "https://practiceapi.devmountain.com/products/";

export default function Detail() {
  const { id } = useParams();
  const { data, error } = useFetch(baseURL + id);

  // checks
  if (!data) return <p>Loading...</p>;
  const { desc, image, price, title } = data;

  return (
    <div>
      <h1>{title}</h1>
      <img style={{ width: "500px", height: "500px" }} src={image} />
      <p>{desc}</p>
      <h4>Price: ${price}</h4>
    </div>
  );
}
