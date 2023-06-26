import "./App.css";
import data from "../src/data/Response.json";
import { useEffect, useState } from "react";
import Drpdown_lokasi from "./components/drpdown_lokasi";
import Dropdown_start from "./components/dropdown_start";
import Dropdown_price from "./components/dropdown_price";
import { FiSearch } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";

function App() {
  const getData =
    data.Envelope.Body.HotelSearchResponse.HotelResultList.HotelResult;

  console.log(getData);

  const [search, setSearch] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [starts, sertStarts] = useState("FiveStar");
  const [price, setPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 2;

  useEffect(() => {}, [starts]);

  console.log(starts);

  //searching
  const filterCategory = getData.filter((hotel) => {
    return hotel.HotelInfo.HotelName.toLowerCase().includes(
      search.toLowerCase()
    );
  });

  //filter lokasi
  const filterLoaksi = filterCategory.filter((hotel) => {
    return hotel.HotelInfo.HotelAddress.toLowerCase().includes(
      lokasi.toLowerCase()
    );
  });

  // filter bintang
  const filterBintang_5 = filterLoaksi.filter(
    (hotel) => hotel.HotelInfo.Rating === starts
  );

  console.log(starts);

  const lastIndex = currentPage * recordPerPage;
  const forstIndex = lastIndex - recordPerPage;
  const record = filterBintang_5.slice(forstIndex, lastIndex);

  return (
    <div className="App">
      <div className="container my-5">
        <div className="d-flex">
          {/* filter  lokasi*/}
          <Drpdown_lokasi lokasi={lokasi} setLokasi={setLokasi} />

          {/* filter start */}
          <Dropdown_start starts={starts} sertStarts={sertStarts} />
        </div>

        {/* search */}
        <div className="d-flex bg-white my-2 search">
          <FiSearch className="mt-2 ms-2 bg-white" />
          <input
            type="text"
            className="form-control border-white"
            id="search"
            placeholder="Search Hotel"
            style={{ height: "auto" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="d-lg-flex justify-content-between mx-2">
          <p>
            Menampilkan lebih dari {getData.length} akomodasi terbaik dengan
            harga terbaik
          </p>
          {/* <Dropdown_price price={price} setPrice={setPrice} tPrice={price} /> */}
        </div>

        <div className="mb-3 p-2">
          {record.map((p) => (
            <div
              key={p.ResultIndex}
              className="cart_hotel d-lg-flex justify-content-between"
            >
              <div className="image col-lg-4">
                <img
                  src={p.HotelInfo.HotelPicture}
                  alt={p.HotelInfo.HotelName}
                />
              </div>
              <div className="detail_hotel col-lg-5">
                <h2 className="mt-2 bg-white"> {p.HotelInfo.HotelName}</h2>
                <div className="d-lg-flex  col-11 bg-white">
                  {/* bintang */}
                  <div className="start bg-white col-lg-3">
                    {p.HotelInfo.Rating === "FiveStar" ? (
                      <div className="d-flex bg-white">
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                      </div>
                    ) : p.HotelInfo.Rating === "FourStar" ? (
                      <>
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                      </>
                    ) : p.HotelInfo.Rating === "ThreeStar" ? (
                      <>
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                      </>
                    ) : p.HotelInfo.Rating === "TwoStar" ? (
                      <>
                        <BsFillStarFill className="bg-white" />
                        <BsFillStarFill className="bg-white" />
                      </>
                    ) : p.HotelInfo.Rating === "OneStar" ? (
                      <BsFillStarFill className="bg-white" />
                    ) : (
                      "none"
                    )}
                  </div>
                  <p className="address bg-white col-lg-9">
                    <u className="bg-white">{p.HotelInfo.HotelAddress}</u>
                  </p>
                </div>
                <div className="d-flex bg-white rating_info">
                  <div className="rating col-lg-1 text-white">
                    {p.HotelInfo.TripAdvisorRating > 3.0 ? (
                      <p className="bg-primary text-white">
                        {p.HotelInfo.TripAdvisorRating}
                      </p>
                    ) : p.HotelInfo.TripAdvisorRating > 2.0 ? (
                      <p className="bg-warning ">
                        {p.HotelInfo.TripAdvisorRating}
                      </p>
                    ) : p.HotelInfo.TripAdvisorRating == "" ? (
                      <p className="bg-danger">
                        {p.HotelInfo.TripAdvisorRating}
                      </p>
                    ) : (
                      <p className="bg-danger">0.0</p>
                    )}
                  </div>
                  {p.HotelInfo.TripAdvisorRating > 3.0 ? (
                    <p className="pr-3 bg-white  text-primary bg-white px-3 border pt-1">
                      {/* <b className="bg-white"> */}
                      Good
                      {/* </b>{" "} */}
                    </p>
                  ) : p.HotelInfo.TripAdvisorRating > 2.0 ? (
                    <p className="text-warning bg-white px-3 border pt-1">
                      {/* <b className="bg-white"> */}
                      Cukup
                      {/* </b> */}
                    </p>
                  ) : (
                    <p className="text-danger bg-white px-3 border pt-1">
                      {/* <b className=" p-2 mt-2 border"> */}
                      Kurang/Belum ada rating
                      {/* </b> */}
                    </p>
                  )}
                </div>
              </div>
              <div className="bg-white col-lg-2 lg-border p-lg-2 p-3">
                <p className="price_title ">Holiday Best Deal</p>
                <h5 className="price bg-white">
                  {p.MinHotelPrice._Currency}{" "}
                  <strong className="bg-white">
                    {p.MinHotelPrice._TotalPrice}
                  </strong>
                </h5>
                <p className="bg-white">Per kamar per malam</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagination */}
      <div className="paginations">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link text-secondary"
                href="#"
                onClick={prePage}
              >
                Previous
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link text-secondary" href="#">
                {currentPage}
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link text-secondary"
                href="#"
                onClick={nextPage}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== forstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
}

export default App;
