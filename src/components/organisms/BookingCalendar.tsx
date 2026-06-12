import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';

const BookingCalendar: React.FC = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize Calendly widget
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/toreye/30-minute-meeting',
          parentElement: document.getElementById('calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      // Cleanup - check if script exists before removing
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Choose Your Preferred Time
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a convenient time slot for your free consultation. We'll discuss your needs and how our virtual assistants can help your business grow.
            </p>
          </div>
          
          <Card className="p-8 shadow-elegant border-0 bg-card">
            <div className="rounded-lg overflow-hidden shadow-soft bg-white">
              <div 
                id="calendly-inline-widget" 
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: any;
  }
}

export default BookingCalendar;