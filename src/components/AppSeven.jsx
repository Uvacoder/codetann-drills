import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const URL = "https://swapi.dev/api/people/1/";

export default function AppSeven() {
  const { data, error, loaded } = useFetch(URL);

  // checks

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {error && <p>{error}</p>}

      <h1>Name: {data.name}</h1>
      <h1>Birth Year: {data.birth_year}</h1>
      <h1>Height: {data.height}</h1>
      <h1>Eye Color: {data.ey_color}</h1>
    </div>
  );
}
