import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  BriefcaseBusiness,
  Cpu,
  HeartHandshake,
  Network,
  Settings2,
  MailOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const newsletterTopics = [
  {
    title: "Business Operations",
    description:
      "Practical ideas for improving day-to-day processes and reducing repetitive work.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technology & Automation",
    description:
      "Ways technology and automation can help businesses operate more efficiently.",
    icon: Cpu,
  },
  {
    title: "AI & Productivity",
    description:
      "Practical applications of AI that can save time without replacing the human side of business.",
    icon: Bot,
  },
  {
    title: "Remote Staffing",
    description:
      "Ideas for using remote professionals effectively to expand capacity and support growth.",
    icon: Network,
  },
  {
    title: "Systems & Processes",
    description:
      "Better systems for managing leads, customers, communication, administration, and recurring tasks.",
    icon: Settings2,
  },
  {
    title: "Customer Experience",
    description:
      "Insights and practices that help businesses deliver a better experience for every customer.",
    icon: HeartHandshake,
  },
];

const NewsletterContent: React.FC = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://webforms.closeiocdn.com/webforms.js"]',
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://webforms.closeiocdn.com/webforms.js";
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Hero — matches the Store page hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
            <MailOpen className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">
              EZVA Global Newsletter
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            EZVA Business Growth <span className="text-accent">Newsletter</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Subscribe to the EZVA Business Growth Newsletter for practical
            insights on business operations, technology, automation, AI, remote
            staffing, and systems that help businesses save time and improve the
            customer experience.
          </p>
        </div>
      </section>

      {/* Signup form — first content section */}
      <section className="bg-background py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-hover sm:p-10 md:p-12">
            <div className="mb-9 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Join the EZVA Business Growth Newsletter
              </h2>
              <p className="text-lg text-muted-foreground">
                Get practical business insights delivered to your inbox.
              </p>
            </div>

            <div
              className="min-h-64 w-full overflow-hidden"
              aria-label="EZVA newsletter signup form"
            >
              {React.createElement("close-form", {
                id: "form_034YYVRp9erzsC8TShucyA",
              })}
            </div>

            <p className="mt-7 text-center text-sm leading-relaxed text-muted-foreground">
              You can unsubscribe at any time. We respect your{" "}
              <a
                href="/privacy-policy"
                className="font-semibold text-primary hover:text-accent hover:underline"
              >
                privacy
              </a>{" "}
              and will only use your information for communications related to
              the newsletter and EZVA Global business content.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              What You'll Get
            </h2>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsletterTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <article
                  key={topic.title}
                  className="rounded-xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {topic.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-primary p-8 shadow-hover md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-14">
            <h2 className="text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">
              Useful Information. Practical Applications.
            </h2>
            <div className="space-y-5 text-primary-foreground/85">
              <p className="text-xl font-semibold text-primary-foreground">
                Our goal is simple: share ideas that business owners can
                actually apply.
              </p>
              <p className="leading-relaxed">
                Technology, automation, AI, and remote staffing can all create
                leverage—but only when they solve a real business problem.
              </p>
              <p className="leading-relaxed">
                The newsletter will focus on practical ideas, examples, and
                observations that can help business owners identify
                opportunities to save time, improve operations, and create a
                better customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">
              Looking for More Ways to Improve Your Business?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore how EZVA Global helps businesses improve operations
              through virtual assistance, staffing, technology, systems, and
              consulting.
            </p>
            <Button asChild variant="cta" size="lg">
              <Link to="/services">Explore EZVA Global</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterContent;
