import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const runtime = "edge";
export const alt = `${SITE.name} — Premium Technology Partner`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #09090b 0%, #14532d 50%, #09090b 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
            fontSize: 22,
            color: "#4ade80",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {SITE.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900, letterSpacing: "-0.03em" }}>
          Premium Software, Web, Mobile, AI & Digital Marketing
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#a1a1aa", maxWidth: 800, lineHeight: 1.4 }}>
          Mangalore · Karnataka · Serving businesses across India and beyond
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 24,
            fontSize: 20,
            color: "#86efac",
          }}
        >
          <span>www.e26media.com</span>
          <span>·</span>
          <span>+91 8495901407</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
