import "./Sparkle_Clean.css/Reviews.css";
import { useState, useEffect } from "react";

const contentCards = [
  {
    id: 1,
    p: "I booked their move-out cleaning service and got my full security deposit back. They cleaned things I did not even know were dirty. Highly recommended for anyone moving out of a rental.",
    name: "Jessica Rodriguez",
    span: "Busy Parent",
    firstLetter: "J",
  },
  {
    id: 2,
    p: "We have been using SparkleClean for our restaurant for over a year. They work around our schedule and the kitchen passes every health inspection with flying colors.",
    name: "Linda Park",
    span: "Restaurant Owner",
    firstLetter: "L",
  },
  {
    id: 3,
    p: "SparkleClean transformed our home. I came back from work to find every surface gleaming. They even got behind the fridge, which I never manage to do myself. Absolutely worth every penny.",
    name: "Sarah Mitchell",
    span: "Homeowner, 2 years",
    firstLetter: "S",
  },
  {
    id: 4,
    p: "Their post-construction cleaning was incredible. After our kitchen renovation, there was dust everywhere. The SparkleClean team had the whole house spotless in just one day.",
    name: "Michael Torres",
    span: "Homeowner",
    firstLetter: "M",
  },
  {
    id: 5,
    p: "As a busy mom of three, having SparkleClean come every two weeks is a lifesaver. I love that they use eco-friendly products so I do not have to worry about chemicals around my kids.",
    name: "Amanda Foster",
    span: "Busy Parent",
    firstLetter: "A",
  },
  {
    id: 6,
    p: "We switched to SparkleClean for our office and the difference is night and day. The team is professional, punctual, and thorough. Our employees have actually commented on how clean the office is now.",
    name: "David Chen",
    span: "Office Manager",
    firstLetter: "D",
  },
];

function Reviews() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % contentCards.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextCard = () => {
    setStart((prev) => (prev + 1) % contentCards.length);
  };

  const previousCard = () => {
    setStart((prev) => (prev - 1 + contentCards.length) % contentCards.length);
  };

  const visibleCards = [];

  for (let i = 0; i < 3; i++) {
    visibleCards.push(contentCards[(start + i) % contentCards.length]);
  }

  return (
    <>
      <section className="reviews">
        <button className="arrow-btn" onClick={previousCard}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>

        <div className="container">
          <div className="title-reviews">
            <span>Reviews</span>

            <h1>What Our Clients Say</h1>

            <p>
              Hear from real clients about their experience with SparkleClean.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {visibleCards.map((item) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12"
                key={item.id}
              >
                <div className="review-card h-100">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>

                  <p className="review-text">{item.p}</p>

                  <div className="user-data">
                    <em>{item.firstLetter}</em>

                    <div>
                      <h6>{item.name}</h6>
                      <span>{item.span}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow-btn" onClick={nextCard}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </section>

      <section className="SpotlessSpace">
        <div className="container">
          <h1>Ready for a Spotless Space?</h1>

          <p>
            Book your cleaning today and experience the SparkleClean difference.
            First-time customers get 20% off their initial cleaning.
          </p>

          <div className="buttons">
            <button>
              Get Free Quote
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </button>

            <button>
              <i className="fa-solid fa-phone me-2"></i>
              Call Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
