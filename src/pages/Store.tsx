import React from 'react';
import MainLayout from '@/components/templates/MainLayout';
import { ShoppingBag, ExternalLink, Truck, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Store: React.FC = () => {
    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent/80 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="container mx-auto px-4 text-center relative z-10 pt-20">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
                        <ShoppingBag className="w-4 h-4 text-accent" />
                        <span className="text-white/90 text-sm font-medium">Official Merchandise</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        EZVA Global <span className="text-accent">Store</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        Companies that work with EZVA can purchase branded merchandise for their own business.
                        From apparel to accessories — outfit your team with quality products that represent your brand.
                    </p>
                    <Button
                        variant="cta"
                        size="lg"
                        className="text-lg px-10 py-6 gap-2"
                        onClick={() => window.open('https://ezvaglobal.store/', '_blank')}
                    >
                        Visit Our Store <ExternalLink className="w-5 h-5" />
                    </Button>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: <Truck className="w-8 h-8" />, title: "Worldwide Shipping", desc: "We deliver branded merch to your doorstep, wherever you are." },
                            { icon: <Shield className="w-8 h-8" />, title: "Quality Guaranteed", desc: "Premium materials and craftsmanship in every product for your team." },
                            { icon: <Star className="w-8 h-8" />, title: "Custom Branding", desc: "Branded merchandise tailored for your company and team." },
                        ].map((feature) => (
                            <div key={feature.title} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button
                            variant="cta"
                            size="lg"
                            className="gap-2"
                            onClick={() => window.open('https://ezvaglobal.store/', '_blank')}
                        >
                            Shop Now <ExternalLink className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Store;
