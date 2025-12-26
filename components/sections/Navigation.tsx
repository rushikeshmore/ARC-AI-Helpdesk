import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
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

        <div className="flex items-center">
          <Link
            href="#early-access"
            className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
          >
            Talk to us
          </Link>
        </div>
      </div>
    </nav>
  );
}
