import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../App.css";
import { BsFillStarFill } from "react-icons/bs";

export default function Dropdown_start({ starts, sertStarts }) {
  return (
    <div className="text-secondary bg-white d-flex mx-2 star">
      <BsFillStarFill className="bg-white m-2" />
      <DropdownButton
        id="dropdown-item-button"
        title="Bintang Hotel"
        variant="white text-secondary border-white"
        className="dropdown_button mx-2"
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
          className="start_filter "
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
          onClick={() => sertStarts("FiveStar")}
        >
          Bintang Lima
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
