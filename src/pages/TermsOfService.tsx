import React, { useEffect } from 'react';
import MainLayout from '@/components/templates/MainLayout';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
    useEffect(() => {
        document.title = 'Terms of Service | EZVA Global';
        const meta = document.querySelector('meta[name="description"]') || (() => {
            const m = document.createElement('meta');
            m.setAttribute('name', 'description');
            document.head.appendChild(m);
            return m;
        })();
        meta.setAttribute('content', 'EZVA Global Terms of Service: rules and conditions for using our virtual assistance, staffing, and consulting services, including SMS communication terms.');
    }, []);

    return (
        <MainLayout>
            <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent/80 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="container mx-auto px-4 text-center relative z-10 pt-24 pb-12">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
                        <FileText className="w-4 h-4 text-accent" />
                        <span className="text-white/90 text-sm font-medium">Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-white/80 text-sm md:text-base">Last updated: May 1, 2026</p>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-background">
                <div className="container mx-auto px-4">
                    <article className="max-w-3xl mx-auto text-foreground/90 space-y-8 leading-relaxed">
                        <p>
                            These Terms of Service ("Terms") govern your access to and use of the website, products, and services provided
                            by EZVA Global ("EZVA," "we," "us," or "our"). By accessing our website or engaging our services, you agree to
                            be bound by these Terms.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">1. Description of Services</h2>
                            <p>
                                EZVA Global provides business support services including, but not limited to, <strong>virtual assistance,
                                    staffing, recruitment, and consulting</strong>. The specific scope, deliverables, and pricing of any
                                engagement will be defined in a separate agreement, proposal, or statement of work.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">2. User Responsibilities</h2>
                            <p>By using our services, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Provide accurate, current, and complete information when requested.</li>
                                <li>Use our services only for lawful purposes and in compliance with all applicable laws and regulations.</li>
                                <li>Maintain the confidentiality of any credentials provided to you.</li>
                                <li>Refrain from using our services to harass, defraud, or harm others.</li>
                                <li>Cooperate in good faith with assigned virtual assistants and EZVA personnel.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">3. Communication Consent</h2>
                            <p>
                                By providing your contact information, you consent to receive communications from EZVA Global by email,
                                phone, and SMS related to our services, your account, appointments, and follow-ups.
                            </p>

                            <h3 className="text-xl font-semibold text-primary mt-4 mb-2">SMS Communication Terms</h3>

                            <p className="mb-3">
                                By opting in to receive SMS messages from EZVA Global, you agree to receive transactional and/or
                                promotional text messages related to our services, appointments, account activity, and business
                                communications.
                            </p>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>Message frequency varies.</li>
                                <li>Message and data rates may apply.</li>
                                <li>Reply <strong>STOP</strong> to opt out at any time.</li>
                                <li>Reply <strong>HELP</strong> for assistance, or contact us at universal@ezvaglobal.com.</li>
                                <li>Carriers are not liable for delayed or undelivered messages.</li>
                                <li>
                                    Mobile information, including phone numbers, SMS opt-in data, and consent records,
                                    will not be shared, sold, rented, or disclosed to third parties or affiliates for
                                    marketing or promotional purposes.
                                </li>
                            </ul>

                            <p className="mt-2">
                                For more information about how we collect, use, and protect your information, please review our{' '}
                                <a href="/privacy-policy" className="text-accent hover:underline">
                                    Privacy Policy
                                </a>.
                            </p>
                        </div>


                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">4. Payment Terms</h2>
                            <p>
                                Where applicable, fees for services are outlined in your individual agreement, proposal, or invoice. Unless
                                otherwise stated, invoices are due upon receipt. Late payments may be subject to suspension of services and
                                applicable late fees. All fees are non-refundable except as expressly stated in writing.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">5. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and trademarks, is the property of EZVA Global
                                or its licensors and is protected by applicable intellectual property laws. You may not reproduce,
                                distribute, or create derivative works without our prior written consent.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">6. Confidentiality</h2>
                            <p>
                                Both parties agree to maintain the confidentiality of any non-public information shared during the course of
                                the engagement and to use such information solely for purposes of performing the services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">7. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, EZVA Global shall not be liable for any indirect, incidental,
                                special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related
                                to your use of our services. Our total aggregate liability shall not exceed the fees paid by you to EZVA in
                                the three (3) months preceding the event giving rise to the claim.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">8. Disclaimer of Warranties</h2>
                            <p>
                                Our services and website are provided on an "as is" and "as available" basis without warranties of any kind,
                                express or implied, including but not limited to merchantability, fitness for a particular purpose, and
                                non-infringement.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">9. Termination</h2>
                            <p>
                                Either party may terminate the engagement in accordance with the terms set forth in the applicable service
                                agreement. We reserve the right to suspend or terminate access to our services, with or without notice, if
                                you violate these Terms or engage in conduct we deem harmful to EZVA, our staff, or other clients.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">10. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the State of Florida and the
                                United States of America, without regard to its conflict of laws principles. Any disputes arising under
                                these Terms shall be resolved exclusively in the state or federal courts located in Florida.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">11. Changes to These Terms</h2>
                            <p>
                                We may update these Terms from time to time. The updated version will be indicated by a revised "Last
                                updated" date. Continued use of our services after changes are posted constitutes your acceptance of the
                                revised Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">12. Contact Us</h2>
                            <p>If you have any questions about these Terms, please contact us at:</p>
                            <ul className="list-none pl-0 space-y-1 mt-2">
                                <li><strong>EZVA Global</strong></li>
                                <li>Email: <a href="mailto:universal@ezvaglobal.com" className="text-accent hover:underline">universal@ezvaglobal.com</a></li>
                                <li>Address: Lake Mary, Florida, United States</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </MainLayout>
    );
};

export default TermsOfService;