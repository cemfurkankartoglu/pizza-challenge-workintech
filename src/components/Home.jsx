import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="home-container">
            <h1 className="home-baslik">KOD ACIKTIRIR <br /> PİZZA, DOYURUR</h1>
            <Link to="/order">
                <button aria-label="Sipariş sayfasına git" className="btn-aciktim">ACIKTIM</button>
            </Link>
        </main>
    )
}