"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CheckCircle2, Sparkles } from "lucide-react";

export function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    storeUrl: "",
    volume: "",
  });

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section
      id="early-access"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0E0C0B] to-[#1a1716]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Micro Label */}
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 animate-gradient-color" />
          <span className="text-sm uppercase tracking-wider text-[var(--foreground-secondary)]">
            EARLY ACCESS
          </span>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Primary Heading */}
            <h2 className="text-5xl sm:text-6xl font-normal text-white leading-[1.1]">
              Be among the first to experience intelligent commerce
            </h2>

            {/* Feature Highlights Row */}
            <div className="flex gap-8 pt-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <h4 className="text-sm font-semibold text-white">Founding Pricing</h4>
                </div>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Locked in forever
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <h4 className="text-sm font-semibold text-white">Direct Access</h4>
                </div>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Talk to founders
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <h4 className="text-sm font-semibold text-white">Shape Product</h4>
                </div>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Influence roadmap
                </p>
              </div>
            </div>

            {/* Content Card with Info */}
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Limited Spots Available
                </h3>
              </div>

              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                We're currently accepting select Shopify merchants into our early access program.
                Get founding member pricing, direct access to our team, and help shape the product roadmap.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>48-hour response time</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>White-glove onboarding</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>Priority feature requests</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form/Success State */}
          <div className="relative lg:sticky lg:top-24">
            {!submitted ? (
              <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@yourstore.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="storeUrl" className="block text-sm font-medium text-white mb-2">
                      Shopify store URL
                    </label>
                    <Input
                      id="storeUrl"
                      type="url"
                      name="storeUrl"
                      placeholder="yourstore.myshopify.com"
                      value={formData.storeUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="volume" className="block text-sm font-medium text-white mb-2">
                      Monthly support volume
                    </label>
                    <Select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select message volume
                      </option>
                      <option value="0-20">0-20 messages</option>
                      <option value="20-100">20-100 messages</option>
                      <option value="100-500">100-500 messages</option>
                      <option value="500+">500+ messages</option>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full">
                    Request Early Access
                  </Button>

                  <p className="text-xs text-center text-[var(--foreground-tertiary)]">
                    By submitting, you agree to our terms and privacy policy
                  </p>
                </form>
              </div>
            ) : (
              <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-12">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-2">
                    <CheckCircle2 className="h-8 w-8 text-[#0E0C0B]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">You're on the list!</h3>
                    <p className="text-[var(--foreground-secondary)]">
                      We'll reach out within 48 hours to discuss your store and see if
                      ShopSense is a good fit.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
