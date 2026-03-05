import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      icon: "◈",
      title: "Standard Xona",
      desc: "Qulay va zamonaviy jihozlangan xona. Shahar manzarasi, king-size to'shak va bepul Wi-Fi.",
      price: "from $80 / kecha",
    },
    {
      id: 2,
      icon: "◇",
      title: "Deluxe Xona",
      desc: "Keng va hashamatli xona. Jacuzzi, premium minibar va shaxsiy konsyerj xizmati.",
      price: "from $150 / kecha",
    },
    {
      id: 3,
      icon: "✦",
      title: "Suite",
      desc: "Alohida yashash xonasi, panorama manzara va VIP mehmon xizmatlari bilan to'liq suite.",
      price: "from $280 / kecha",
    },
    {
      id: 4,
      icon: "♦",
      title: "Presidential Suite",
      desc: "Eng yuqori darajadagi hashamat. Xususiy terassa, butler xizmati va maxsus qabul xonasi.",
      price: "from $600 / kecha",
    },
  ];

  return (
    <section className="products">
      <div className="products-container">
        <p className="products-eyebrow">✦ Xonalarimiz</p>
        <h1 className="products-title">
          Xona va <span>Suite</span>lar
        </h1>
        <p className="products-subtitle">
          Har bir mehmonimiz uchun alohida comfort va hashamat tayyorlanган.
        </p>

        <div className="products-grid">
          {rooms.map((item) => (
            <div className="product-card" key={item.id}>
              <span className="card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="card-footer">
                <span className="card-price">{item.price}</span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
