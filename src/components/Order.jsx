import { useState } from "react";

export default function Order() {
  const [size] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="order-container">
      <section className='aciklama'>
        <h1>Position Absolute Acı Pizza</h1>
        <div className='istatistik'>
          <div className="fiyat">85.50₺</div>
          <div className='puan-degerlendirme'>
            <div className='puan'>4.9</div>
            <div className='degerlendirme'>(200)</div>
          </div>
        </div>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen. genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir. </p>
      </section>

      <section className='secimler'>
        <form>
          <div className='boyut'>
            <h2>Boyut Seç<span>*</span></h2>
            <input type='radio' name="boyut" value="small" />Küçük
            <input type='radio' name="boyut" value="medium" />Orta
            <input type='radio' name="boyut" value="large" />Büyük
          </div>

          <div className='hamur'>
            <h2>Hamur Seç<span>*</span></h2>
            <select name="hamur">
              <option>Hamur Kalınlığı</option>
              <option value="ince">İnce Hamur</option>
              <option value="kalin">Kalın Hamur</option>
              <option value="parmesan">Parmesanlı Hamur</option>
              <option value="çamurlu">Çamurlu Hamur</option>
            </select>
          </div>

          <div className='malzemeler'>
            <h2>Ek Malzemeler</h2>
            <label htmlFor="pepperoni">
              <input type="checkbox" name="malzeme" value="pepperoni" id="pepperoni" />
              Pepperoni
            </label>
            <label htmlFor="sosis">
              <input type="checkbox" name="malzeme" value="sosis" id="sosis" />
              Sosis
            </label>
            <label htmlFor="kanada-jambonu">
              <input type="checkbox" name="malzeme" value="kanada-jambonu" id="kanada-jambonu" />
              Kanada Jambonu
            </label>
            <label htmlFor="tavuk-izgara">
              <input type="checkbox" name="malzeme" value="tavuk-izgara" id="tavuk-izgara" />
              Tavuk Izgara
            </label>
            <label htmlFor="sogan">
              <input type="checkbox" name="malzeme" value="sogan" id="sogan" />
              Soğan
            </label>
            <label htmlFor="domates">
              <input type="checkbox" name="malzeme" value="domates" id="domates" />
              Domates
            </label>
            <label htmlFor="misir">
              <input type="checkbox" name="malzeme" value="misir" id="misir" />
              Mısır
            </label>
            <label htmlFor="sucuk">
              <input type="checkbox" name="malzeme" value="sucuk" id="sucuk" />
              Sucuk
            </label>
            <label htmlFor="jalepeno">
              <input type="checkbox" name="malzeme" value="jalepeno" id="jalepeno" />
              Jalepeno
            </label>
            <label htmlFor="sarimsak">
              <input type="checkbox" name="malzeme" value="sarimsak" id="sarimsak" />
              Sarımsak
            </label>
            <label htmlFor="biber">
              <input type="checkbox" name="malzeme" value="biber" id="biber" />
              Biber
            </label>
            <label htmlFor="ananas">
              <input type="checkbox" name="malzeme" value="ananas" id="ananas" />
              Ananas
            </label>
            <label htmlFor="kabak">
              <input type="checkbox" name="malzeme" value="kabak" id="kabak" />
              Kabak
            </label>
            <label htmlFor="pastirma">
              <input type="checkbox" name="malzeme" value="pastirma" id="pastirma" />
              Pastırma
            </label>
          </div>

          <div className='siparis-notu'>
            <h2>Sipariş Notu</h2>
            <textarea placeholder="Siparişin eklemek istediğin bir not var mı?" />
          </div>
        </form >
        <hr />

        <section className='son'>
          <div className='adet-container'>
            <button className="azalt">-</button>
            <p>1</p>
            <button className="artir">+</button>
          </div>
          <div className='fatura'>
            <h2>Sipariş Toplamı</h2>
            <p>Seçimler</p>
            <p>Toplam</p>
            <button type="submit" className='btn-siparis'>SİPARİŞ VER</button>
          </div>
        </section>

      </section >
    </main >
  )
}
