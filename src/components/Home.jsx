import { useState } from "react";
import Order from "./Order";

export default function Home() {
    const [showOrder, setShowOrder] = useState(false);
    return (
        <main className="menu-container">
            <h1 className="menu-baslik">KOD ACIKTIRIR PİZZA DOYURUR</h1>
            <button onClick={() => setShowOrder(true)}>ACIKTIM</button>
            {showOrder && <Order />}
        </main>
    )
}