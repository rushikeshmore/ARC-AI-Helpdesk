import { FileText, Layout, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Features(): JSX.Element {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0E0C0B] to-[#1a1716]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Micro Label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-sm uppercase tracking-wider text-[var(--foreground-secondary)]">
            CAPABILITIES
          </span>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Primary Heading */}
            <h2 className="text-5xl sm:text-6xl font-normal text-white leading-[1.1]">
              Everything your store needs to convert
            </h2>

            {/* Feature Highlights Row */}
            <div className="flex gap-8 pt-4">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Knowledge Base</h4>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Your policies, cited
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Analytics</h4>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Understand intent
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white mb-1">Quick Setup</h4>
                <p className="text-xs text-[var(--foreground-secondary)]">
                  Live in 10 min
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Zap className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Core Features
                </h3>
              </div>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-white" />
                    <h4 className="text-white font-medium">Knowledge Canvas</h4>
                  </div>
                  <p className="text-sm text-[var(--foreground-secondary)]">
                    Import FAQs, shipping info, return policies. ShopSense cites your actual content—never makes things up.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Layout className="h-4 w-4 text-white" />
                    <h4 className="text-white font-medium">Sense Widget</h4>
                  </div>
                  <p className="text-sm text-[var(--foreground-secondary)]">
                    Customizable chat widget that matches your brand. Light or dark mode. Position anywhere.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-white" />
                    <h4 className="text-white font-medium">Insight Studio</h4>
                  </div>
                  <p className="text-sm text-[var(--foreground-secondary)]">
                    See top searches, common questions, and conversion patterns. Find product gaps before they cost you.
                  </p>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                View All Features
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="relative lg:sticky lg:top-24">
            <div className="grid grid-cols-2 gap-4">
              {/* Feature Card 1 */}
              <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-6 space-y-3">
                <div className="p-3 rounded-lg bg-white/5 w-fit">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Knowledge Canvas</h4>
                  <p className="text-xs text-[var(--foreground-secondary)]">
                    Grounded answers from your content
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-6 space-y-3">
                <div className="p-3 rounded-lg bg-white/5 w-fit">
                  <Layout className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Sense Widget</h4>
                  <p className="text-xs text-[var(--foreground-secondary)]">
                    Beautiful on any theme
                  </p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-6 space-y-3">
                <div className="p-3 rounded-lg bg-white/5 w-fit">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Insight Studio</h4>
                  <p className="text-xs text-[var(--foreground-secondary)]">
                    Learn what customers want
                  </p>
                </div>
              </div>

              {/* Feature Card 4 */}
              <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-6 space-y-3">
                <div className="p-3 rounded-lg bg-white/5 w-fit">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Quick Start</h4>
                  <p className="text-xs text-[var(--foreground-secondary)]">
                    Live in under 10 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
