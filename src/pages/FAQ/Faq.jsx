import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Check-in va check-out vaqtlari qachon?",
      answer:
        "Check-in soat 14:00 dan boshlanadi, check-out esa soat 12:00 gacha. Erta yoki kech chiqish imkoniyati mavjud — qo'shimcha to'lov bilan.",
    },
    {
      question: "Xona bron qilish uchun nima qilish kerak?",
      answer:
        "Saytimiz orqali online bron qilishingiz yoki +998 90 123 45 67 raqamiga qo'ng'iroq qilishingiz mumkin. Bron tasdiqlash uchun kredit karta ma'lumotlari talab qilinadi.",
    },
    {
      question: "Mehmonxonada bepul Wi-Fi bormi?",
      answer:
        "Ha, barcha xonalarda va umumiy joylarda yuqori tezlikdagi bepul Wi-Fi taqdim etiladi.",
    },
    {
      question: "Aeroport transferi xizmati mavjudmi?",
      answer:
        "Ha, biz mehmonlarimiz uchun aeroport transferi xizmatini taqdim etamiz. Yetib kelish vaqtingizni bizga bildiring — haydovchimiz siz uchun kutib turadi.",
    },
    {
      question: "Restoran va ovqatlanish xizmatlar qanday?",
      answer:
        "Mehmonxonamizda 2 ta restoran va 1 ta bar mavjud. Nonushta narxga kiritilgan. Xonaga ovqat buyurtmasi (room service) 24 soat ishlaydi.",
    },
    {
      question: "Bolalar uchun maxsus sharoitlar bormi?",
      answer:
        "Ha, 6 yoshgacha bo'lgan bolalar ota-onasi bilan bir xonada yashasa bepul. Bolalar to'shagi va maxsus menyu talab asosida taqdim etiladi.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <p className="faq-eyebrow">✦ Yordam markazi</p>
        <h1 className="faq-title">Ko'p So'raladigan Savollar</h1>
        <p className="faq-subtitle">
          Mehmonxonamiz haqida savollaringiz bo'lsa — javoblarini shu yerda
          toping.
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  )}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
