import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-white text-black hover:bg-white/90"
          : "bg-white/10 text-white hover:bg-white/15",
        className,
      )}
    >
      {children}
    </Link>
  );
}
