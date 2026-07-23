import "./Sparkle_Clean.css/FAQ.css";
import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Are your cleaners insured and bonded?",
      answer:
        "Yes, SparkleClean carries up to $2 million in liability insurance and all our team members are fully bonded. Every cleaner passes a thorough background check before joining our team, so you can feel confident and secure.",
    },
    {
      id: 2,
      question: "What is included in a standard cleaning?",
      answer:
        "Our standard cleaning covers dusting all surfaces, vacuuming and mopping floors, kitchen cleaning (counters, sink, stovetop, exterior of appliances), bathroom sanitization (toilet, tub, shower, sink, mirrors), and trash removal from all rooms.",
    },
    {
      id: 3,
      question: "What cleaning products do you use?",
      answer:
        "We use EPA-certified, eco-friendly cleaning products that are safe for children, pets, and people with allergies. Our green cleaning line is free from harsh chemicals, ammonia, and bleach while still delivering professional-grade results.",
    },
    {
      id: 4,
      question: "How long does a typical cleaning take?",
      answer:
        "A standard cleaning for a 1,500 sq ft home typically takes 2–3 hours with a two-person team. Deep cleans may take 4–6 hours depending on the condition and size of the space. We always provide a time estimate before we begin.",
    },
    {
      id: 5,
      question: "Can I reschedule or cancel a cleaning?",
      answer:
        "Absolutely. We ask for at least 24 hours notice for rescheduling or cancellations at no charge. Changes made within 24 hours of the appointment may incur a small fee. You can reschedule through our website, app, or by calling our team.",
    },
  ];
  return (
    <>
      <section className="faq">
        <div className=" title-FAQ">
          <span className="hidden-up">FAQ</span>
          <h1 className="hidden-up">Frequently Asked Questions</h1>
          <p className="hidden-up">
            Find answers to common questions about our cleaning services.
          </p>
        </div>

        <div>
          {faqData.map((item) => (
            <div className="faq-item hidden-up" key={item.id}>
              <div
                className="faq-header"
                onClick={() => setOpen(open === item.id ? null : item.id)}
              >
                <h5 className="question">{item.question}</h5>
                <span>{open === item.id ? "×" : "+"}</span>
              </div>

              {open === item.id && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FAQ;
