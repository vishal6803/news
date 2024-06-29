import React from "react";
import loading from "../load.gif";
export default function Spiner() {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" style={{ width: "30px" }} />
    </div>
  );
}
