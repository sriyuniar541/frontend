import React from "react";
// import NavbarLandingPage from "../../component/navbar/navbar";
import gambar1 from "../../aset/lappan.jpg";
// import skripsi from "../../aset/skripsi.jpg";
import "./home.css";
import Footer from '../../components/Footer/footer'


const Home = () => {
  return (
    <div>
      <div className="container cont_landing">
        {/* <NavbarLandingPage /> */}
        <div className="row">
          <div className="col-lg-8 main_content">
            <img
              src={gambar1}
              alt="bacground"
              className="bg_landing img-fluid"
            />
            <p className="text-center">
              Gambar oleh{" "}
              <a href="https://pixabay.com/id/users/silviarita-3142410/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4118058">
                Silvia
              </a>{" "}
              dari{" "}
              <a href="https://pixabay.com/id//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4118058">
                Pixabay
              </a>
            </p> 
            <h2>
              Tips dan Trik bagi Mahasiswa Akhir dalam Menyelesaikan Skripsi dan
              Proses Pengolahan Data  
            </h2>
            <p className="text-secondary author">Author : Beatric Tayanan</p>
            <div className="content">
              <p>
                Mahasiswa akhir adalah fase terakhir dalam menempuh pendidikan
                tinggi sebelum akhirnya lulus dan memasuki dunia kerja. Salah
                satu tantangan terbesar bagi mahasiswa akhir adalah
                menyelesaikan skripsi dan proses pengolahan data. Proses ini
                membutuhkan waktu, dedikasi, dan kemampuan dalam mengelola waktu
                serta mood yang stabil. Namun, terkadang ada beberapa faktor
                yang membuat proses tersebut menjadi terhambat.
              </p>
              <p>
                Untuk itu, penulis ingin membagikan beberapa tips dan trik bagi
                mahasiswa akhir dalam menyelesaikan skripsi dan proses
                pengolahan data dengan lebih baik:
              </p>
              <ol>
                <li>
                  <h6>
                    Komunikasi yang efektif dengan dosen pembimbing dan
                    teman-teman
                  </h6>
                </li>
                <p>
                  Komunikasi yang baik dengan dosen pembimbing sangat penting
                  dalam proses pengolahan data dan menyelesaikan skripsi. Dengan
                  terus berkomunikasi, mahasiswa bisa mendapatkan masukan dan
                  saran yang bermanfaat dalam proses penyelesaian skripsi.
                  Selain itu, bertanya kepada teman atau kakak tingkat yang
                  sudah menyelesaikan proses skripsi juga bisa menjadi solusi
                  bagi masalah yang dihadapi.
                </p>
                <li>
                  <h6>Rajin membaca jurnal, buku dan artikel terkait</h6>
                </li>
                <p>
                  Membaca jurnal, buku, dan artikel terkait dengan penelitian
                  teman-teman bisa membantu memperkaya pengetahuan dan pemahaman
                  tentang topik penelitian yang sedang dijalankan. Selain itu,
                  menonton video di YouTube atau Tiktok yang berkaitan dengan
                  topik penelitian juga bisa menjadi referensi dan memudahkan
                  dalam memahami konsep yang sulit.
                </p>
                <li>
                  <h6>Melawan perubahan mood</h6>
                </li>
                <p>
                  Mood atau perasaan seseorang seringkali berubah-ubah, hal
                  tersebut dapat mempengaruhi proses penyelesaian pengolahan
                  data dan skripsi. Oleh karena itu, mahasiswa akhir perlu untuk
                  memanajemen perubahan perasaan agar tidak mengganggu proses
                  pengolahan data dan penyelesaian skripsi. Beberapa cara yang
                  bisa dilakukan adalah dengan mengatur jadwal dan rutinitas
                  harian, berolahraga, dan mengisi waktu luang dengan kegiatan
                  yang bermanfaat.
                </p>
              </ol>
              <p>
                Dalam menyelesaikan skripsi dan proses pengolahan data,
                konsistensi dan kemampuan dalam mengelola waktu sangat
                dibutuhkan. Terkadang, masalah seperti keuangan, keluarga,
                asmara, pertemanan, dan lainnya bisa menjadi penghambat dalam
                menyelesaikan skripsi. Oleh karena itu, dengan menerapkan tips
                dan trik yang telah disebutkan di atas, diharapkan mahasiswa
                akhir bisa menyelesaikan skripsi dan proses pengolahan data.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <p className="title_list">Kunjungi Artikel lainnya</p>
            {/* {dataById.map((artikelById) => ( */}
            {/* <Link to={`/PentingnyaNutrisiuntukKesehatan`} className="link"> */}
              <div className="card_news text-start">
                <img src={gambar1} alt="list-news" className="news" />
                <div className="title_List_news">
                  <p>Pentingnya Nutrisi untuk Kesehatan</p>
                  <p className="date">Baca Selengkapnya...</p>
                </div>
              </div>
            {/* </Link> */}
          </div>      
        </div>
      </div> 
      <Footer id="footer" />
    </div>
  );
};

export default Home;
