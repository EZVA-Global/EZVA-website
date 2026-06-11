import React from 'react';
import { Card } from '@/components/ui/card';
import { Phone, ClipboardCheck } from 'lucide-react';

const BookingConsentSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            Communication & Consent Options
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            To schedule a call with EZVA Global, please use our Calendly booking page. During the booking process, you may choose to provide consent to receive SMS communications regarding appointments, updates, and services from EZVA Global.
                        </p>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
                            If you prefer, you may also provide SMS consent separately using our EZVA Global SMS Consent Form.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-8 text-center shadow-soft border-0 bg-card hover:shadow-elegant transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                                <Phone className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-foreground">
                                Schedule a Call
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Book a complimentary consultation with our team to discuss how EZVA Global can support your business. During scheduling, you may optionally opt in to receive SMS communications from EZVA Global.
                            </p>
                            <a
                                href="https://calendly.com/toreye/15-minute-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-soft hover:bg-primary/90 hover:shadow-hover transform hover:scale-105 transition-all duration-300"
                            >
                                Schedule a Call
                            </a>
                        </Card>

                        <Card className="p-8 text-center shadow-soft border-0 bg-card hover:shadow-elegant transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                                <ClipboardCheck className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-foreground">
                                Consent Form
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Provide your consent to receive SMS communications from EZVA Global regarding appointments, updates, and services.
                            </p>
                            <a
                                href="https://forms.office.com/r/e5eyeXqfi0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-soft hover:bg-accent/90 hover:shadow-hover transform hover:scale-105 transition-all duration-300"
                            >
                                EZVA Global SMS Consent Form
                            </a>
                        </Card>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-muted-foreground">
                            Terms of Service and Privacy Policy are available in the footer of this website.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingConsentSection;
