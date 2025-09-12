import React from 'react';
import FAQItem from '@/components/molecules/FAQItem';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How much does it cost to hire a virtual assistant?",
      answer: "Our Virtual Assistants rates starts at $5 an hour. The total cost depends on the scope of work, hours required, and specific skills needed. We offer flexible pricing plans to fit your budget."
    },
    {
      question: "How can I hire a virtual assistant?",
      answer: "Simply schedule a meeting with us, and we will help you find the perfect virtual assistant based on your business needs."
    },
    {
      question: "What makes EZVA different from other VA providers?",
      answer: "With over 15 years of experience, we offer flexible, high-quality assistance tailored to your specific needs, ensuring efficiency and success."
    },
    {
      question: "Why hire a virtual assistant?",
      answer: "A virtual assistant helps you save time, reduce costs, and focus on your core business by handling tasks efficiently and flexibly."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get answers to the most common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;