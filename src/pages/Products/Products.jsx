import React from "react";
import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      title: "Web Development",
      desc: "Zamonaviy va tezkor web saytlar yaratish xizmati.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Foydalanuvchi uchun qulay va chiroyli dizayn.",
    },
    {
      id: 3,
      title: "E-commerce",
      desc: "Online do‘kon va to‘lov tizimlari integratsiyasi.",
    },
    {
      id: 4,
      title: "SEO Optimization",
      desc: "Saytingizni Google qidiruv tizimida yuqoriga olib chiqish.",
    },
  ];

  return (
    <section className="products">
      <div className="products-container">
        <h1 className="products-title">Our Products</h1>

        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="product-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
