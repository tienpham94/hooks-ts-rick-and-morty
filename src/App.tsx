import React from "react";
import { Store } from "./Store";

export default function App() {
  const store = React.useContext(Store);
  console.log({store})
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick fav episode</p>
    </>
  );
}
