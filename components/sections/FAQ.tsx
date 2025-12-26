"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What makes ShopSense different from chatbots?",
      answer:
        "Traditional chatbots either follow scripts or use generic AI that doesn't know your products. ShopSense is built on your catalog and knowledge base—it can only recommend products you actually sell and cite policies you've written.",
    },
    {
      question: "How does product discovery work?",
      answer:
        "Customers can ask natural questions like 'red dress for a summer wedding under $200' or 'running shoes for flat feet'. ShopSense understands the intent and searches your catalog semantically, returning the most relevant products.",
    },
    {
      question: "Is this hard to set up?",
      answer:
        "No. Install takes one click, products sync automatically via Shopify, and you can add FAQs using our templates. Most merchants go live in under 10 minutes.",
    },
    {
      question: "What if ShopSense gives wrong information?",
      answer:
        "We've built multiple safeguards: the AI can only reference your products and policies, shows uncertainty when not confident, and you can review all conversations. Our grounding system prevents hallucinations.",
    },
    {
      question: "Who is this for?",
      answer:
        "ShopSense works best for Shopify stores with 100+ products that receive regular customer questions about products, sizing, shipping, or policies. If you have a small catalog and minimal support needs, you might not see the full benefit.",
    },
    {
      question: "What does it cost?",
      answer:
        "We offer a free tier for stores getting started, and a Pro plan at $29/month for growing stores. No contracts, cancel anytime. Early access members get founding member pricing locked in.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#1a1716] to-[#0E0C0B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Micro Label */}
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-4 h-4 text-orange-500" />
          <span className="text-sm uppercase tracking-wider text-[var(--foreground-secondary)]">
            FAQ
          </span>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Heading */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-5xl sm:text-6xl font-normal text-white leading-[1.1]">
              Questions? Answered.
            </h2>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="multiple" defaultValue={["0"]}>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={index.toString()}>
                  <AccordionTrigger value={index.toString()}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent value={index.toString()}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
