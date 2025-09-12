import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg bg-card shadow-soft">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-foreground pr-4">{question}</span>
        <div className="flex-shrink-0 w-6 h-6 text-accent">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 text-muted-foreground leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;