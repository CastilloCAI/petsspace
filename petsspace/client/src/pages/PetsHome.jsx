import React from "react";
import Header from "../components/Header";
import Pet_comp from "../components/Pet_comp";

export default function PetsHome() {
  return (
    <div className="limit__width">
      <Header />
      <Pet_comp />
    </div>
  );
}
