import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <a href="/">Anasayfa</a><span className="duz-cizgi">-</span>
            <a href="/">Seçenekler</a><span className="duz-cizgi">-</span>
            <a href="/">Sipariş Oluştur</a>
        </nav>
    )
}