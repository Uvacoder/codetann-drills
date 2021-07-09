import { data } from "browserslist";
import React from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const baseURL = "https://practiceapi.devmountain.com/products/";

export default function Home() {
  const { data: products, error } = useFetch(baseURL);
  const history = useHistory();

  // event handler functions
  const handleClick = (e) => {
    history.push(`/details/${e.target.id}`);
  };

  // checks
  if (!products) return <p>Loading...</p>;

  return (
    <div>
      {products.map((item) => (
        <img
          style={{
            width: "200px",
            height: "200px",
            cursor: "pointer",
            margin: ".3rem",
          }}
          src={item.image}
          id={item.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
