import { AlertCircle } from "lucide-react";

export function Problems(): JSX.Element {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0E0C0B] to-[#1a1716]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Micro Label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-sm uppercase tracking-wider text-[var(--foreground-secondary)]">
            THE PROBLEM
          </span>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Primary Heading */}
            <h2 className="text-5xl sm:text-6xl font-normal text-white leading-[1.1]">
              Your search bar is costing you sales
            </h2>

            {/* Feature Highlights Row */}
            <div className="flex gap-8 pt-4">
              <div className="flex-1">
                <div className="text-2xl font-bold text-white mb-1">72%</div>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Abandon when search fails
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Hours/week on support
                </p>
              </div>
              <div className="w-px bg-[var(--border-subtle)]" />
              <div className="flex-1">
                <div className="text-2xl font-bold text-white mb-1">68%</div>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Don't trust chatbots
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--background-tertiary)]/50 backdrop-blur-sm p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  The Hidden Cost
                </h3>
              </div>

              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Every day, customers arrive at your store looking for something specific.
                Your basic search returns dozens of results. They scroll. They leave.
                Meanwhile, the same support questions fill your inbox—questions about
                sizing, shipping, compatibility—that waste hours of your time.
              </p>

              <p className="text-[var(--foreground-secondary)] leading-relaxed">
                Generic AI chatbots make it worse. They recommend products you don't sell.
                They cite policies you never wrote. Your customers lose trust, and you
                lose sales.
              </p>
            </div>
          </div>

          {/* Right Column - 80% Stat Visual */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)]">
              <div className="aspect-[4/5] bg-gradient-to-br from-red-500/10 via-[var(--background-tertiary)] to-[var(--background-elevated)] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-9xl font-bold text-white/10">80%</div>
                  <p className="text-lg text-[var(--foreground-secondary)] max-w-xs mx-auto">
                    of customers can't find what they're looking for with basic search
                  </p>
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0B]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
