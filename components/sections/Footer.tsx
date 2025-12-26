import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-subtle)] py-12 bg-gradient-to-b from-[#1a1716] to-[#0E0C0B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="ShopSense Logo - AI Product Discovery Platform"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-white">
              ShopSense
            </span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-left text-xs text-[var(--foreground-tertiary)]">
          © 2025 ShopSense. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
