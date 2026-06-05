import React, { useEffect } from 'react';
import MainLayout from '@/components/templates/MainLayout';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        document.title = 'Privacy Policy | EZVA Global';
        const meta = document.querySelector('meta[name="description"]') || (() => {
            const m = document.createElement('meta');
            m.setAttribute('name', 'description');
            document.head.appendChild(m);
            return m;
        })();
        meta.setAttribute('content', 'EZVA Global Privacy Policy: how we collect, use, and protect your information, including SMS communication disclosures and your rights.');
    }, []);

    return (
        <MainLayout>
            <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent/80 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="container mx-auto px-4 text-center relative z-10 pt-24 pb-12">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
                        <Shield className="w-4 h-4 text-accent" />
                        <span className="text-white/90 text-sm font-medium">Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-white/80 text-sm md:text-base">Last updated: May 1, 2026</p>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-background">
                <div className="container mx-auto px-4">
                    <article className="max-w-3xl mx-auto prose-legal text-foreground/90 space-y-8 leading-relaxed">
                        <p>
                            EZVA Global ("EZVA," "we," "us," or "our") respects your privacy and is committed to protecting the personal
                            information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                            information when you visit our website, contact us, or use our services.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">1. Information We Collect</h2>
                            <p>We may collect the following types of information:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Personal Information:</strong> name, email address, phone number, company name, and job title.</li>
                                <li><strong>Communication Data:</strong> messages, inquiries, and information you submit through forms, chat, email, or SMS.</li>
                                <li><strong>Service Data:</strong> appointment details, preferences, and information shared during onboarding or service delivery.</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies and analytics tools.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Schedule and manage appointments, consultations, and follow-ups.</li>
                                <li>Deliver and improve our services, including virtual assistance, staffing, and consulting.</li>
                                <li>Respond to inquiries and provide customer support.</li>
                                <li>Send service-related communications, updates, and reminders.</li>
                                <li>Comply with legal obligations and protect our rights.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">3. SMS Communications Disclosure</h2>
                            <p>
                                By providing your mobile phone number and opting in, you consent to receive SMS text messages from EZVA Global
                                related to appointments, follow-ups, account updates, and service-related notifications.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Message Frequency:</strong> Message frequency varies based on your interactions and service activity.</li>
                                <li><strong>Message &amp; Data Rates:</strong> Message and data rates may apply, according to your mobile carrier plan.</li>
                                <li><strong>Opt-Out:</strong> You can opt out of SMS communications at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will receive a confirmation message and no further SMS messages will be sent unless you opt back in.</li>
                                <li><strong>Help:</strong> Reply <strong>HELP</strong> to any SMS message for assistance, or contact us at universal@ezvaglobal.com.</li>
                                <li><strong>Carriers:</strong> Carriers are not liable for delayed or undelivered messages.</li>
                                <li><strong>No Sharing for Marketing:</strong> Mobile information, including phone numbers, SMS opt-in data, and consent records, <strong>will not be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes.</strong> This information may only be shared with service providers necessary to deliver our services, comply with legal obligations, or protect our rights.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">4. Data Protection and Security</h2>
                            <p>
                                We implement industry-standard administrative, technical, and physical safeguards designed to protect your
                                personal information against unauthorized access, disclosure, alteration, or destruction. While we strive to
                                use commercially acceptable means to protect your data, no method of transmission over the Internet is 100%
                                secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">5. Third-Party Tools and Service Providers</h2>
                            <p>
                                We use trusted third-party tools to operate our business and deliver services. These providers process data
                                only as necessary and under confidentiality obligations. They include, among others:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>CRM platforms</strong> (e.g., Close CRM) for client relationship management.</li>
                                <li><strong>Calendly</strong> for scheduling appointments and consultations.</li>
                                <li><strong>Communication providers</strong> for email and SMS delivery.</li>
                                <li><strong>Analytics tools</strong> to understand website usage and improve experience.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">6. Your Rights</h2>
                            <p>Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Access, update, or correct the personal information we hold about you.</li>
                                <li>Request deletion of your personal information.</li>
                                <li>Opt out of marketing or SMS communications at any time.</li>
                                <li>Request information about how your data is processed.</li>
                            </ul>
                            <p className="mt-2">To exercise these rights, contact us at universal@ezvaglobal.com.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">7. Children's Privacy</h2>
                            <p>
                                Our services are not directed to individuals under 18. We do not knowingly collect personal information from
                                children.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">8. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Last
                                updated" date and will be effective as soon as it is accessible.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-3">9. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
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

export default PrivacyPolicy;