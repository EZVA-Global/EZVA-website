import React from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StorePromoSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
            <ShoppingBag className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wide uppercase">EZVA Store</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Branded Merchandise for Your Business
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Companies that work with EZVA can purchase branded merchandise for their own business. 
            From apparel to accessories, outfit your team with quality products that represent your brand.
          </p>
          <Button
            variant="cta"
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://ezvaglobal.store/', '_blank')}
          >
            Visit the Store <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StorePromoSection;
