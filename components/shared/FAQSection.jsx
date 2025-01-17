'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const faqs = [
    {
      question: "What is GPTRush, and how does it work?",
      answer: "GPTRush is your AI-powered companion for rapid application development. Describe your idea, and our system generates code, designs, and deployable solutions in minutes, saving you countless hours of effort.",
    },
    {
      question: "Can I customize the generated applications?",
      answer: "Absolutely! GPTRush provides editable code, enabling you to tweak the designs, functionality, or structure as needed. It’s a perfect blend of automation and flexibility.",
    },
    {
      question: "Does GPTRush support multiple frameworks?",
      answer: "Yes, GPTRush supports popular frameworks like Next.js, React, and TailwindCSS. You can choose the framework that best suits your project’s needs.",
    },
    {
      question: "Is there a free tier available?",
      answer: "Currently, we offer a limited free trial for new users to explore GPTRush's features. After the trial, you can upgrade to a premium plan for full access.",
    },
    {
      question: "How secure is the generated code?",
      answer: "We prioritize security by using best practices in code generation. Additionally, all your data is encrypted and processed securely within our system.",
    },
    {
      question: "Can I deploy my application directly through GPTRush?",
      answer: "Yes, you can deploy your application with just one click using GPTRush. We integrate with popular hosting providers to make deployment seamless and hassle-free.",
    },
  ];

  return (
    <div className="md:w-4/5 mx-auto">
      <div className="container">
      <h2 className="md:text-5xl text-3xl font-bold mb-4">Frequently Asked <span className="text-primary dark:text-primary">Questions</span></h2>
      <p className="font-light md:max-w-2xl mb-8">
  Find clear and concise answers to the questions our users ask most. Whether you're just starting or exploring advanced features, we've got you covered.
</p>
        <div className=''>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white mb-4">
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <p className="text-subheading">{faq.question}</p>
                </div>
                <div>
                  {isOpen === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>
              {isOpen === index && (
                <div className="py-4 opacity-75">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
