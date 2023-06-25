import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Dropdown_start({ starts, sertStarts }) {
  return (
    <div>
      <DropdownButton
        id="dropdown-item-button"
        title={starts ? starts : "Bintang Hotel"}
        variant="light"
      >
        <Dropdown.Item
          as="button"
          className="start_filter"
          value={starts}
          onClick={() => sertStarts("OneStar")}
        >
          Bintang Satu
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          className="start_filter"
          value={starts}
          onClick={() => sertStarts("TwoStar")}
        >
          Bintang Dua
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          className="start_filter"
          value={starts}
          onClick={() => sertStarts("ThreeStar")}
        >
          Bintang Tiga
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          className="start_filter"
          value={starts}
          onClick={() => sertStarts("FourStar")}
        >
          Bintang Empat
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          className="start_filter"
          value={starts}
          onClick={() => sertStarts("none")}
        >
          Hotel Biasa
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
