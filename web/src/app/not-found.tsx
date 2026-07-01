import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-wider text-green-600">404</p>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        The page you are looking for may have moved or no longer exists. Try our services, portfolio, or contact page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          <Home className="h-4 w-4" /> Back to home
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
          Contact us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
        <Link href="/services" className="hover:text-green-600">
          Services
        </Link>
        <Link href="/portfolio" className="hover:text-green-600">
          Portfolio
        </Link>
        <Link href="/pricing" className="hover:text-green-600">
          Pricing
        </Link>
        <Link href="/knowledge" className="hover:text-green-600">
          Knowledge Center
        </Link>
      </nav>
    </Container>
  );
}
