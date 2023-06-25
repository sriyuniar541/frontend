import React from "react";

export default function Drpdown_lokasi({ lokasi, setLokasi }) {
  return (
    <div >
      <div>
        <input
          type="text"
          className="form-control "
          id="search"
          placeholder="Cari lokasi"
          style={{ height: "auto" }}
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
        />
      </div>
    </div>
  );
}
