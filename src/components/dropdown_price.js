import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";
import { BsFillStarFill } from "react-icons/bs";

export default function Dropdown_start({ starts, sertStarts }) {
  return (
    <div className="text-secondary bg-white star">
      <DropdownButton
        id="dropdown-item-button"
        title="Per kamar per malam"
        variant="white text-secondary border-white"
        className="dropdown_button mx-2"
      >
        <Dropdown.Item
          as="button"
          className="start_filter"
          // value={starts}
          // onClick={() => sertStarts("OneStar")}
        >
          Per kamar per malam
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          className="start_filter"
          // value={starts}
          // onClick={() => sertStarts("OneStar")}
        >
          Per kamar per 2 malam
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
