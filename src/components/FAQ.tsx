"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I start work?",
      a: "Through Telegram communication and assigned work process. Join the group to begin instantly.",
    },
    {
      q: "Where will I receive work?",
      a: "Through Telegram communication and assigned work process. All PDF files and materials are sent securely there.",
    },
    {
      q: "How do I submit work?",
      a: "Through Telegram communication and assigned work process. You will be provided a secure submission method by admins.",
    },
    {
      q: "How are instructions provided?",
      a: "Through Telegram communication and assigned work process. Detailed guidelines are pinned in the group for easy access.",
    },
    {
      q: "When do I get updates?",
      a: "Through Telegram communication and assigned work process. Admins provide regular daily updates and active support.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">
            Support
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-primaryDark mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 reveal delay-100 active border-t border-gray-200 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="faq-button w-full text-left py-4 font-serif font-bold text-lg text-brand-primaryDark flex justify-between items-center focus:outline-none group"
                >
                  <span>{faq.q}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-sm text-brand-textMuted transition-transform duration-300 icon-arrow group-hover:text-brand-primary`}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  ></i>
                </button>
                <div
                  className="accordion-content transition-all duration-300 ease-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "1.25rem" : "0px",
                  }}
                >
                  <p className="text-brand-textMuted text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
