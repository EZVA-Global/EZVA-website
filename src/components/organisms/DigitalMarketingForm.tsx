import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';

const DigitalMarketingForm: React.FC = () => {
  useEffect(() => {
    // Ensure the iframe loads properly
    const iframe = document.getElementById('digital-marketing-form');
    if (iframe) {
      iframe.addEventListener('load', () => {
        console.log('Digital Marketing form loaded successfully');
      });
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Tell Us About Your Marketing Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete this detailed form so we can understand your business goals and create a customized digital marketing strategy that delivers results.
            </p>
          </div>
          
          <Card className="p-8 shadow-elegant border-0 bg-card">
            <div className="rounded-lg overflow-hidden shadow-soft bg-white">
              <iframe 
                id="digital-marketing-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfPuzV3H8vbi8gwO73_xVmPOzrh_tPTS3SPs-EfXgJ3yqo1vQ/viewform?embedded=true" 
                width="100%" 
                height="1400" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Digital Marketing Support Form"
                className="w-full min-h-[1400px]"
              >
                Loading…
              </iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingForm;