"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0C0B]">
      {/* Background Image with Dark Overlay that blends into next section */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-section-bg.png')" }}
        />
        {/* Strong dark gradient overlay for seamless fusion */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0E0C0B]/60 to-[#0E0C0B]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-medium mb-8">
          AI Product Discovery for Shopify
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white max-w-5xl mb-6 tracking-tight leading-[1.1]">
          Product discovery that thinks like your best salesperson.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[var(--foreground-secondary)] max-w-3xl mb-10 leading-relaxed">
          ShopSense understands natural language, knows your entire catalog, and
          guides customers to exactly what they're looking for—no search bar
          required.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center mb-16">
          <Link href="#early-access" className={cn(buttonVariants())}>
            Request Early Access
          </Link>
        </div>

        {/* Premium Announcement Card */}
        <div className="relative w-full mx-auto" style={{ maxWidth: '880px' }}>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2d2a3d] via-[#1f1d2b] to-[#1a1825]" />

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />

            {/* Soft border glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />

            {/* Content */}
            <div className="relative px-12 py-10 flex flex-col md:flex-row gap-12 items-start md:items-end">
              {/* Left Side - Brand + Feature Title */}
              <div className="space-y-4 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="ShopSense Logo - AI Product Discovery Platform"
                    width={24}
                    height={24}
                    className="w-6 h-6 opacity-60"
                  />
                  <span className="text-sm uppercase tracking-[0.15em] text-white/40 font-medium">
                    SHOPSENSE
                  </span>
                </div>

                <h3 className="text-6xl sm:text-7xl font-normal text-white leading-[1.05] tracking-tight">
                  Agent Canvas
                </h3>
              </div>

              {/* Right Side - Messaging */}
              <div className="flex flex-col">
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light text-left">
                  It's time to experience the true agentic commerce experience for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
