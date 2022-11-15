import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import { SideMenu } from "../../components/SideMenu";
import { Navbar } from "../../components/Navbar";

export const EditBagianPinjamPakai = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex ">
      <SideMenu />
      <div className="w-100">
        <Navbar />
        <main className="bg-light-gray h-100 ">
          <div
            className="d-flex justify-content-between align-items-center mx-3 py-3"
            style={{
              borderBottom: "#BCBCBC 1px solid",
            }}
          >
            <div
              className="font-semibold"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              &larr; &emsp; Kembali
            </div>
            <div className="d-flex gap-2">
              <div
                className="text-center"
                style={{
                  cursor: "pointer",
                  border: "#DC2F2F 1px solid",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  color: "#DC2F2F",
                  width: "120px",
                }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Batal
              </div>
              <div className="primary-btn">Tambah Data</div>
            </div>
          </div>
          <div className="mx-5">
            <h5 style={{ paddingBottom: "20px", paddingTop: "10px" }}>
              Edit Tanah Bagian
            </h5>
            <form className="d-flex form-tambah-tanah gap-5">
              <div className="left-form d-flex flex-col gap-3">
                <div>
                  <label htmlFor="sertifikat-jenispemanfaatan">
                    Jenis Perikatan
                  </label>
                  <select className="form-select">
                    <option value="Pakai-Sendiri">Pakai Sendiri</option>
                    <option value="Pinjam Pakai">Pinjam Pakai</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="berlaku-dari">Atas Nama</label>
                  <input type="text" className="w-100" name="atas-nama" />
                </div>
                <div>
                  <label htmlFor="peruntukan-pemanfaatan">
                    Peruntukan Pemanfaatan
                  </label>
                  <input
                    type="text"
                    className="w-100"
                    name="peruntukan-pemanfaatan"
                  />
                </div>
                <div>
                  <label htmlFor="luas-bagian">Luas Bagian</label>
                  <input type="text" className="w-100" name="luas-bagian" />
                </div>
                <div>
                  <label htmlFor="kondisi">Kondisi Saat Ini</label>
                  <input type="text" className="w-100" name="kondisi" />
                </div>
              </div>
              <div className="right-form d-flex flex-col gap-3">
                <div>
                  <label htmlFor="Nilai Asset">Nilai Asset</label>
                  <input type="text" className="w-100" name="nilai-asset" />
                </div>
                <div>
                  <label htmlFor="koordinat">Koordinat (LS BT)</label>
                  <input type="text" className="w-100" name="koordinat" />
                </div>
                <div>
                  <label htmlFor="sertifikat-alamat">Alamat</label>
                  <textarea
                    name="sertifikat-alamat"
                    className="w-100"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};