import "./App.css";
import data from "../src/data/Response.json";
import { useState } from "react";
import Drpdown_lokasi from "./components/drpdown_lokasi";
import Dropdown_start from "./components/dropdown_start";

function App() {
  const getData =
    data.Envelope.Body.HotelSearchResponse.HotelResultList.HotelResult;

  console.log(getData);

  const [search, setSearch] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [starts, sertStarts] = useState("Bintang Hotel");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 2;

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

  const filterBintang_5 = filterLoaksi.filter((hotel) =>
        hotel.HotelInfo.Rating  === 'FiveStar'
    )
  const filterBintang_4 = filterBintang_5.filter((hotel) =>
        hotel.HotelInfo.Rating  === 'FourStar'
    )

  const lastIndex = currentPage * recordPerPage;
  const forstIndex = lastIndex - recordPerPage;
  const record = filterLoaksi.slice(forstIndex, lastIndex);

  return (
    <div className="App">
      <div className="container my-5">
        <div className="d-flex">
           {/* filter  lokasi*/}
        <Drpdown_lokasi lokasi={lokasi} setLokasi={setLokasi} />

        {/* filter start */}
        <Dropdown_start filterBintang_1={filterBintang_5} filterBintang_4={filterBintang_4} starts={starts} sertStarts={sertStarts} />

        
       
        </div>
        
        {/* search */}
        <input
          type="text"
          className="form-control my-3 col-2"
          id="search"
          placeholder="Search Hotel"
          style={{ height: "auto" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="mb-3 p-2 ">
          {record.map((p) => (
            <div
              key={p.ResultIndex}
              className="cart_hotel bg-white d-lg-flex justify-content-between"
            >
              <div className="image col-lg-4">
                <img
                  src={p.HotelInfo.HotelPicture}
                  alt={p.HotelInfo.HotelName}
                />
              </div>
              <div className="detail_hotel col-6">
                <h2 className="mt-2 bg-white"> {p.HotelInfo.HotelName}</h2>
                <div className="d-flex  col-12 bg-white">
                  {/* bintang */}
                  <div className="start bg-white">
                    {p.HotelInfo.Rating === "FiveStar"
                      ? p.HotelInfo.Rating === "*****"
                      : p.HotelInfo.Rating === "FourStar"
                      ? "****"
                      : p.HotelInfo.Rating === "ThreeStar"
                      ? "***"
                      : p.HotelInfo.Rating === "TwoStar"
                      ? "**"
                      : p.HotelInfo.Rating === "OneStar"
                      ? "*"
                      : "none"}
                  </div>
                  <p className="address bg-white">{p.HotelInfo.HotelAddress}</p>
                </div>
                <p className="rating col-1">
                  {p.HotelInfo.TripAdvisorRating
                    ? p.HotelInfo.TripAdvisorRating
                    : 0.0}
                </p>
              </div>

              <div className="bg-white ">
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
      {/* <a href="#" onClick={prePage}>
        prev
      </a>

      <a href="#">{currentPage}</a>

      <a href="#" onClick={nextPage}>
        next
      </a> */}
      <div className="paginations">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" onClick={prePage}>
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                {currentPage}
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={nextPage}>
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
