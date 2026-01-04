function KartuProduk(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.image} alt={props.nama} className="card-image-top" />
      <h2 className="nama-produk">{props.nama}</h2>
      <p className="deskripsi-produk">{props.deskripsi}</p>
      <span className="harga-produk">Harga: {props.harga}</span>
      <a href="#" className="btn btn-primary">Beli</a>
    </div>
  );
}