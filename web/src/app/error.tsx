"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-wider text-green-600">Something went wrong</p>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
        We hit an unexpected error
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        Our team has been notified. You can try again, return home, or reach us directly if the problem persists.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={reset} className={buttonVariants({ size: "lg" })}>
          <RefreshCw className="h-4 w-4" /> Try again
        </button>
        <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
          Contact support <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Container>
  );
}
