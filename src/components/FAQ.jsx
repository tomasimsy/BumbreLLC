import React, { useState } from "react";
import faqPhoto from "../assets/faq-photo.jpg"; // <-- update path to your photo

const faqData = [
    {
    question: "I'm a nail technician, what can I claim on my tax?",
    answer: "You can deduct tools, nail products, uniforms, professional training, business phone & internet, and any business-related travel or marketing costs."
  },
  {
    question: "I'm a nail salon owner, what can I claim on my tax?",
    answer: "Deduct supplies, equipment, rent, utilities, marketing, insurance, professional services, employee wages, and training costs. Keep good records for all expenses."
  },
  {
    question: "I'm a business owner, what can I claim on my tax?",
    answer: "Almost any ordinary and necessary expense related to running your business: office supplies, rent, marketing, travel, equipment, insurance, software, professional fees, and wages."
  },
  {
    question: "I run a Tree Service business, what can I claim on my tax?",
    answer: "Deduct equipment, safety gear, vehicle expenses, fuel, tools, insurance, marketing, training, and any business-related travel."
  },
    {
    question: "I'm a roofer, I own a roofing company, what can I include in my tax?",
    answer: "You can deduct materials, tools, safety equipment, vehicle expenses for work, insurance, marketing, training, subcontractor payments, and any ordinary expenses needed to run your roofing business."
  },
  {
    question: "I have business partners, what information do you need for filing?",
    answer: "I’ll need each partner’s personal information (SSN/ITIN), ownership percentages, financial contributions, income and expense records, and any prior tax filings for the business. This helps accurately file partnership taxes."
  },
    {
    question: "What is considered a dependent?",
    answer: "A dependent is usually a child or relative who relies on you for financial support. They must meet certain age, residency, and support tests. Claiming dependents can lower your taxable income."
  },
  {
    question: "How many dependents can I claim?",
    answer: "You can claim all dependents who meet IRS criteria. There’s no strict limit, but you must provide their information accurately to qualify for tax benefits."
  },
  {
    question: "How does my filing status affect my taxes?",
    answer: "Your filing status—Single, Married Filing Jointly, Married Filing Separately, Head of Household, or Qualifying Widow(er)—determines your tax rates, standard deduction, and eligibility for credits. Choosing the correct status can maximize your refund."
  },
  {
    question: "Can I change my filing status later?",
    answer: "Generally, your filing status is based on your situation on December 31 of the tax year. You can amend your return later if needed, but it’s best to choose the correct status initially."
  },
  
  {
    question: "What if I owe the IRS, how does it work?",
    answer: "If you owe taxes, you can pay in full by the deadline, or set up a payment plan with the IRS. Interest and penalties may apply, but I can help you navigate the options to minimize costs."
  },

  {
    question: "Do I need to file taxes if I had little or no income?",
    answer:
      "Yes. You may still need to file, and filing can help you receive refunds or credits."
  },
  {
    question: "What documents do I need to file my taxes?",
    answer:
      "W-2s, 1099s, photo ID, Social Security numbers for dependents, receipts, and last year’s return."
  },
  {
    question: "Can I file taxes if I'm self-employed?",
    answer:
      "Yes. You must report all income and may claim business expenses and pay self-employment tax."
  },
  {
    question: "How long does it take to receive a refund?",
    answer:
      "Most refunds arrive within 7–21 days with e-file and direct deposit."
  },
      // Additional 10
    {
      question: "What if I don’t have all my documents yet?",
      answer: "You can still start. I’ll tell you what’s missing and help you gather everything needed."
    },
    {
      question: "Can you file taxes for clients in other states?",
      answer: "Yes. I work with clients nationwide using secure digital sharing."
    },
    {
      question: "How much do you charge?",
      answer: "Pricing varies by return type. You’ll always receive a clear questionuote before we begin."
    },
    {
      question: "Do you help with IRS letters or audits?",
      answer: "Yes. I can review your notice and help you respond correctly."
    },
    {
      question: "Can you help me maximize deductions?",
      answer: "Yes. I help identify all deductions that apply to your job or business."
    },
    {
      question: "What if I haven’t filed in years?",
      answer: "I help clients safely file multiple past years and get back in good standing."
    },
    {
      question: "I’m a truck driver. What can I deduct?",
      answer: "Common deductions include per diem, fuel, tools, repairs, phone, GPS, and more."
    },
    {
      question: "Can you help with LLC formation?",
      answer: "Yes. I assist with LLC setup, EIN registration, and business structure guidance."
    },
    {
      question: "Can I file without a Social Security number?",
      answer: "Yes. You may file using an ITIN. I can assist with the application."
    },
    {
      question: "When is the tax deadline?",
      answer: "April 15 by default unless extended by the IRS."
    }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
<section id="faq" className="py-5">
  <div className="container">
    <h2 className="fw-bold mb-4 text-center">TAX | Frequently Asked Questions</h2>

    <div className="row g-4">
      
      {/* COLUMN 1: PHOTO + first 5 FAQs */}
      <div className="col-12 col-md-4">
        <img
          src={faqPhoto}
          alt="FAQ"
          className="img-fluid rounded shadow-sm mb-4"
          style={{ width: "100%", height: "auto" }}
        />
        {faqData.slice(0, 5).map((item, index) => (
          <div key={index} className="border-bottom py-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-100 text-start d-flex justify-content-between align-items-center btn p-0"
              style={{ background: "none", boxShadow: "none" }}
            >
              <span className="fw-semibold">{item.question}</span>
              <span className="fs-4">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-muted small mt-1 mb-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* COLUMN 2: next half of remaining FAQs */}
      <div className="col-12 col-md-4">
        {faqData.slice(5, 5 + Math.ceil((faqData.length - 5) / 2)).map((item, index) => (
          <div key={index} className="border-bottom py-2">
            <button
              onClick={() => toggleFAQ(index + 5)}
              className="w-100 text-start d-flex justify-content-between align-items-center btn p-0"
              style={{ background: "none", boxShadow: "none" }}
            >
              <span className="fw-semibold">{item.question}</span>
              <span className="fs-4">{openIndex === index + 5 ? "−" : "+"}</span>
            </button>
            {openIndex === index + 5 && (
              <p className="text-muted small mt-1 mb-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* COLUMN 3: remaining FAQs */}
      <div className="col-12 col-md-4">
        {faqData.slice(5 + Math.ceil((faqData.length - 5) / 2)).map((item, index) => (
          <div key={index} className="border-bottom py-2">
            <button
              onClick={() => toggleFAQ(index + 5 + Math.ceil((faqData.length - 5) / 2))}
              className="w-100 text-start d-flex justify-content-between align-items-center btn p-0"
              style={{ background: "none", boxShadow: "none" }}
            >
              <span className="fw-semibold">{item.question}</span>
              <span className="fs-4">{openIndex === index + 5 + Math.ceil((faqData.length - 5) / 2) ? "−" : "+"}</span>
            </button>
            {openIndex === index + 5 + Math.ceil((faqData.length - 5) / 2) && (
              <p className="text-muted small mt-1 mb-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  );
}