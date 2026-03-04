import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Website qancha vaqt ichida tayyor bo‘ladi?",
      answer:
        "Oddiy loyiha 3-7 kun ichida tayyor bo‘ladi. Murakkab loyihalar muddatiga qarab kelishiladi.",
    },
    {
      question: "Sayt responsive bo‘ladimi?",
      answer:
        "Ha, barcha loyihalar mobil, planshet va desktop qurilmalarga mos qilib ishlab chiqiladi.",
    },
    {
      question: "Qaysi texnologiyalardan foydalanasiz?",
      answer:
        "Asosan React, JavaScript (ES6+), CSS3 va zamonaviy UI kutubxonalar ishlatiladi.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {item.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
