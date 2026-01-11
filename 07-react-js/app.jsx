const root = ReactDOM.createRoot(document.getElementById('root'));

const tugas = [
    "Belajar React JS Dasar",
    "Membuat Project React JS Pertama",
    "Mempelajari Component dan Props",
    "Mempelajari State dan Event Handling",
    "Mempelajari Lifecycle Methods",
]

function App() {
    return (
        <>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-primary" href="#">Learning React</a>
          </div>
        </nav>
        <div className="container">
            <TombolCounter />
            <hr />
            <div className="row mt-4">
                <div className="col-sm-6 col-xl-3">
                    <KartuProduk 
                        image="https://dlcdnwebimgs.asus.com/files/media/982b43f2-03f0-4780-b552-cf2a58d515bf/v1/images/m-bg-battery_1.webp"
                        nama="ROG Strix SCAR 18"
                        deskripsi="Laptop dengan performa terbaik, didukung oleh kekuatan prosesor Intel® Core™ Ultra 9 275HX. Dengan 8 inti Performa dan 16 inti Efisien, silikon generasi berikutnya ini dapat menghasilkan framerate tinggi dalam game esports dan AAA. SCAR 18 juga memiliki akses ke akselerasi AI dalam aplikasi pembuatan konten tertentu, yang memberi Anda fleksibilitas luar biasa dalam cara memanfaatkan mesin game Anda."
                        harga="Rp 95.000.000" 
                    />
                </div>
                <div className="col-sm-6 col-xl-3">
                    <KartuProduk 
                        image="https://asset.msi.com/resize/image/global/product/product_17495443670cd5fa9c9035765c2b56e2e7dcd86768.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
                        nama="Stealth A16 AI+ Mercedes-AMG Motorsport A3XW; Copilot+ PC"
                        deskripsi="The Stealth A16 AI+ Mercedes-AMG Motorsport merupakan wujud dari komitmen MSI dalam mengejar performa terdepan yang dipadukan dengan semangat AMG Driving Performance. Sasis ringan berbahan magnesium-aluminium alloy-nya dilengkapi dengan emblem Mercedes-AMG yang terintegrasi secara mulus, tampil elegan, berani, dan ikonik. Laptop edisi terbatas global ini dilengkapi dengan aksesori co-branded eksklusif dan dirancang untuk mereka yang mengutamakan daya, presisi, dan gaya yang elegan tanpa kompromi."
                        harga="Rp 47.000.000" 
                    />
                </div>
                <div className="col-sm-6 col-xl-3">
                    <KartuProduk 
                        image="https://p3-ofp.static.pub//fes/cms/2025/02/14/wf3yter8p98sqcszv7cpz82gzp8564355404.png"
                        nama="Legion Pro 7i Gen 10"
                        deskripsi="Experience next-level gaming and productivity with Intel® Core™ Ultra processors. Enjoy ultra-smooth gameplay, seamless multitasking, and AI-accelerated creative tasks. Connect all peripherals with Thunderbolt™ 4, and boost unplugged playtime with cooler, quieter performance for gaming, streaming, and creating."
                        harga="Rp 63.000.000" 
                    />
                </div>
                <div className="col-sm-6 col-xl-3">
                    <h3 className="mt-4">DAFTAR TUGAS</h3>
                    <DaftarTugas tugas={tugas} />
                    <hr />
                    <h3 className="mt-4">Form Login - Form & Validation</h3>
                    <FormLogin />
                </div>
            </div>
        </div>
        </>
    );
}

root.render(<App />);