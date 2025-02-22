import "./Header.css"

export default function Header(props) {
  return (
    <header>
      <div className="logo"><img src="../../images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" /></div>
      <nav>
        <a href="/">Anasayfa</a><span className="duz-cizgi">-</span>
        <a href="/">Seçenekler</a><span className="duz-cizgi">-</span>
        <a href="/">Sipariş Oluştur</a>
      </nav>
    </header >
  )
}