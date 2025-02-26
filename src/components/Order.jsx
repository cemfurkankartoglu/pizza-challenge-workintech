import { useState } from "react";
import axios from "axios";

export default function Order() {
  const initialValue = {
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    notlar: "",
    adet: 1,
  }

  const [formData, setFormData] = useState(initialValue);

  const sizes = ["small", "medium", "large"];
  const doughTypes = [
    { value: "normal", label: "Normal Hamur" },
    { value: "ince", label: "İnce Hamur" },
    { value: "parmesan", label: "Parmesanlı Hamur" },
    { value: "super-ince", label: "Süper İnce Hamur" },
  ];
  const ingredients = [
    "pepperoni", "sosis", "kanada-jambonu", "tavuk-izgara",
    "sogan", "domates", "misir", "sucuk", "jalepeno",
    "sarimsak", "biber", "ananas", "kabak", "pastirma"
  ];


  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const newMalzemeler = checked
        ? [...formData.malzemeler, value]
        : formData.malzemeler.filter(item => item !== value);

      setFormData({
        ...formData,
        malzemeler: newMalzemeler,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const orderData = {
      boyut: formData.boyut,
      hamur: formData.hamur,
      malzemeler: formData.malzemeler,
      notlar: formData.notlar,
    };

    axios.post("https://reqres.in/api/pizza", orderData).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })

  }



  return (
    <main className="order-container">

      <section className='aciklama'>
        <h1 className="pizza-baslik">Position Absolute Acı Pizza</h1>
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
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="boyut-hamur">
            <div className='boyut'>
              <h2 className="secimler-baslik">Boyut Seç<span className="yildiz">*</span></h2>
              {sizes.map((size) => (
                <label key={size}>
                  <input
                    type="radio"
                    name="boyut"
                    value={size}
                    checked={formData.boyut === size}
                    onChange={handleChange}
                  />
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </label>
              ))}
            </div>

            <div className='hamur'>
              <h2 className="secimler-baslik">Hamur Seç<span className="yildiz">*</span></h2>
              <select
                className="hamur-secim"
                name="hamur"
                value={formData.hamur}
                onChange={handleChange}
              >
                <option value="">Hamur Kalınlığı</option>
                {doughTypes.map((dough) => (
                  <option key={dough.value} value={dough.value}>
                    {dough.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='malzemeler'>
            <h2 className="secimler-baslik">Ek Malzemeler</h2>
            <p className="malzeme-paragraf">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            {ingredients.map((ingredient) => (
              <label key={ingredient} htmlFor={ingredient}>
                <input
                  type="checkbox"
                  name="malzemeler"
                  value={ingredient}
                  id={ingredient}
                  checked={formData.malzemeler.includes(ingredient)}
                  onChange={handleChange}
                />
                {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
              </label>
            ))}
          </div>


          <div className='siparis-notu'>
            <h2 className="secimler-baslik">Sipariş Notu</h2>
            <textarea
              name="notlar"
              value={formData.notlar}
              onChange={handleChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </div>
        </form>

        <hr />

        <section className='son'>
          <div className='adet-container'>
            <button className="azalt">-</button>
            <p>1</p>
            <button className="artir">+</button>
          </div>
          <div className='fatura'>
            <h2 className="secimler-baslik">Sipariş Toplamı</h2>
            <div className="secimler-fiyat">
              <p>Seçimler</p>
              <p>25.00₺</p>
            </div>
            <div className="toplam-fiyat">
              <p>Toplam</p>
              <p>100.00₺</p>
            </div>
            <button type="submit" className='btn-siparis'>SİPARİŞ VER</button>
          </div>
        </section>
      </section>
    </main>
  );
}
