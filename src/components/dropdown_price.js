import React from "react";

export default function Dropdown_price({
  price, setPrice
}) {
  return (
    <div>
      <select className="btn bg-white dropdown-toggle">
        <option
          className="start_filter"
          value={price}
          style={{ height: "auto" }}
          onChange={(e) => setPrice(price)}
        >
          Per kamar per malam
        </option>
        <option
          className="start_filter"
          value={price}
          onChange={(e) => setPrice(price * 2)}
        >
          Per kamar dua malam
        </option>
      </select>
    </div>
  );
}
