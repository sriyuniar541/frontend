import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "../App.css";

export default function Drpdown_lokasi({ lokasi, setLokasi }) {
  return (
    <div className="d-flex bg-white location ">
      <CiLocationOn className="mt-2 ms-2 bg-white" />
      <input
        type="text"
        className="form-control border-white"
        placeholder="Cari lokasi"
        style={{ height: "auto" }}
        value={lokasi}
        onChange={(e) => setLokasi(e.target.value)}
      />
    </div>
  );
}
