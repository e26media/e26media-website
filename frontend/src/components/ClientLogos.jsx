import React from "react";
import { CLIENTS } from "../data/clients";

export function ClientLogos() {
  const doubled = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section
      className="py-16 md:py-20 bg-white border-y border-zinc-200/60 overflow-hidden"
      data-testid="client-logos-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          Trusted by ambitious businesses worldwide
        </p>
      </div>
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 md:gap-14">
          {doubled.map((client, idx) => {
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-50 p-1.5">
                  <img
                    src={client.logo}
                    alt=""
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="font-heading font-semibold text-lg md:text-xl tracking-tight text-zinc-700">
                  {client.name}
                </span>
              </>
            );

            const className =
              "inline-flex items-center gap-3 cursor-default text-zinc-500 hover:text-zinc-900 transition-colors duration-300";

            return client.url ? (
              <a
                key={`${client.name}-${idx}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} hover:opacity-90`}
                data-testid={`client-logo-${idx}`}
                aria-label={client.name}
              >
                {content}
              </a>
            ) : (
              <div
                key={`${client.name}-${idx}`}
                className={className}
                data-testid={`client-logo-${idx}`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
