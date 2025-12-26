import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function DiscoveryEngine() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#1a1716] to-[#0E0C0B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Micro Label */}
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-green-500" />
          <span className="text-sm uppercase tracking-wider text-[var(--foreground-secondary)]">
            DISCOVERY ENGINE
          </span>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Primary Heading */}
            <h2 className="text-5xl sm:text-6xl font-normal text-white leading-[1.1]">
              Understands what customers actually want
            </h2>

            {/* Feature Highlights Row */}
            <div className="flex gap-8 pt-4">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Natural Language</h4>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Parse intent, not keywords
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Semantic Search</h4>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Understands context
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Smart Ranking</h4>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Best matches first
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  How It Works
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0E0C0B] text-sm font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Understand intent</h4>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Parse natural language to understand what customers really want, not just what they type
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0E0C0B] text-sm font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Search your catalog</h4>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Semantic search across products, variants, tags, and descriptions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0E0C0B] text-sm font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Recommend intelligently</h4>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      Surface relevant products based on intent, availability, and context
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Explore Discovery Engine
              </Button>
            </div>
          </div>

          {/* Right Column - AI Box Image */}
          <div className="relative lg:sticky lg:top-24 flex items-center justify-center">
            <div className="relative w-4/5 mx-auto">
              {/* Animated blur orbs behind image */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500/30 rounded-full blur-3xl animate-float-slower" />
                <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-amber-400/20 rounded-full blur-3xl animate-float-medium" />
              </div>

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/ai-box.png"
                  alt="ShopSense AI Interface"
                  width={800}
                  height={1000}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
