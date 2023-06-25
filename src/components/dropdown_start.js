import React from "react";

export default function Dropdown_start({
  filterBintang_5,
  filterBintang_4,
  starts,
  sertStarts,
}) {
  return (
    <div>
      <select className="btn bg-white dropdown-toggle">
        <option
          className="start_filter"
          value={starts}
          style={{ height: "auto" }}
          onChange={(e) => sertStarts(filterBintang_5)}
        >
          Bintang Satu
        </option>
        <option
          className="start_filter"
          value={starts}
          onChange={(e) => sertStarts(filterBintang_4)}
        >
          Bintang Dua
        </option>
        <option
          className="start_filter"
          value={starts}
          onChange={(e) => sertStarts(filterBintang_4)}
        >
          Bintang Tiga
        </option>
        <option
          className="start_filter"
          value={starts}
          onChange={(e) => sertStarts(filterBintang_4)}
        >
          Bintang Empat
        </option>
        <option
          className="start_filter"
          value={starts}
          onChange={(e) => sertStarts(filterBintang_4)}
        >
          Bintang Lima
        </option>
      </select>
    </div>
  );
}
