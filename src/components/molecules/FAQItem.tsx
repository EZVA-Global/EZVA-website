import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="border border-border rounded-lg bg-card shadow-soft">
      <button
        type="button"
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-foreground pr-4">{question}</span>
        <span className="flex-shrink-0 w-6 h-6 text-accent" aria-hidden="true">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>

      {isOpen && (
        <div
          id={answerId}
          className="px-6 pb-4 text-muted-foreground leading-relaxed animate-fade-in"
          role="region"
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
