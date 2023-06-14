import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 ">
            <h3>Hubungi Saya</h3>
            <p>
              Alamat : Air Besar Batu-Merah RT 05/ RW 17, Sirimau, Ambon, Maluku
            </p>
            <div className="footer_content">
              <p>No Contack : +6285236171070</p>
              <p>Email : sriyuniar541@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <h3>Ikuti Saya</h3>
            <div className="sosial_media">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Telegram</a>
              <a href="">Twiter</a>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <h3>Tautan</h3>
            <div className="footer_content">
              <a href="">Beranda</a>
              <a href="">Artikel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
