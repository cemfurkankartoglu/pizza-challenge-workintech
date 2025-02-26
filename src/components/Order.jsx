import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Order() {
  const initialValue = {
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    notlar: "",
  }

  const [formData, setFormData] = useState(initialValue);
  const [adet, setAdet] = useState(1);
  const [isSelected, setISelected] = useState(false);

  const sizes = ["küçük", "orta", "büyük"];
  const doughTypes = [
    { value: "normal", label: "Normal Hamur" },
    { value: "ince", label: "İnce Hamur" },
    { value: "parmesan", label: "Parmesanlı Hamur" },
    { value: "super-ince", label: "Süper İnce Hamur" },
  ];
  const ingredients = [
    "pepperoni", "sosis", "jambon", "tavuk",
    "soğan", "domates", "mısır", "sucuk", "jalepeno",
    "sarımsak", "biber", "ananas", "kabak", "pastırma"
  ];

  useEffect(() => {
    // Update the isSelected state based on current formData
    if (
      formData.boyut &&
      formData.hamur &&
      formData.malzemeler.length >= 4 &&
      formData.malzemeler.length <= 10 &&
      formData.isim.length >= 3
    ) {
      setISelected(true);
    } else {
      setISelected(false);
    }
  }, [formData]);

  function increaseQuantity() {
    setAdet(adet + 1);
  }

  function decreaseQuantity() {
    if (adet > 1) {
      setAdet(adet - 1);
    }
  }

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

    const orderData = {
      isim: formData.isim,
      boyut: formData.boyut,
      hamur: formData.hamur,
      malzemeler: formData.malzemeler,
      notlar: formData.notlar,
      adet: adet
    };

    axios.post("https://reqres.in/api/pizza", orderData).then((response) => {
      console.log(response.data);
      setFormData(initialValue);
      setAdet(1)
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
                  <input className="boyut-button"
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
                <option className="hamur-kalinligi" value="">Hamur Kalınlığı</option>
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
            <div className="malzeme-container">
              {ingredients.map((ingredient) => (
                <label className="malzeme-item" key={ingredient} htmlFor={ingredient}>
                  <input className="checkbox"
                    type="checkbox"
                    name="malzemeler"
                    value={ingredient}
                    id={ingredient}
                    checked={formData.malzemeler.includes(ingredient)}
                    onChange={handleChange}
                    disabled={
                      !formData.malzemeler.includes(ingredient) &&
                      formData.malzemeler.length >= 10
                    }
                  />
                  {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div className="isim-container">
            <input onChange={handleChange} value={formData.isim} name="isim" type="text" placeholder="Lütfen isminizi giriniz"></input>
          </div>
          <div className='siparis-notu'>
            <h2 className="secimler-baslik siparis-baslik">Sipariş Notu</h2>
            <textarea className="siparis-textarea"
              name="notlar"
              value={formData.notlar}
              onChange={handleChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </div>


          <hr />

          <section className='son'>

            <div className='adet-container'>
              <button type="button" className="azalt" onClick={decreaseQuantity}>-</button>
              <p>{adet}</p>
              <button type="button" className="artir" onClick={increaseQuantity}>+</button>
            </div>

            <div className='fatura'>
              <h2 className="secimler-baslik">Sipariş Toplamı</h2>

              <div className="secimler-fiyat">
                <p>Seçimler</p>
                <p>25.00₺</p>
              </div>

              <div className="toplam-fiyat">
                <p>Toplam</p>
                <p>110.50₺</p>
              </div>

              <Link
                to="/success"
                onClick={isSelected ? handleSubmit : null}
                id='btn-siparis'
                style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
              >
                SİPARİŞ VER
              </Link>

            </div>
          </section>
        </form>
      </section>
    </main>
  );
}
