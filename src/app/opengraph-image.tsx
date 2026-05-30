import { ImageResponse } from "next/og";

// Default Open Graph / Twitter image used across the site for any route
// that does not define its own. Rendered at request/build time by next/og.
export const runtime = "edge";

export const alt =
  "BraneBridge — GCP cost optimization. Cut your GCP bill 15% in 7 days, or pay $0.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
        }}
      >
        <div style={{ height: 14, width: 180, backgroundColor: "#00b368" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Cut your GCP bill 15% in 7 days.
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#00b368",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Or pay $0.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 32,
              color: "#cbd5e1",
              maxWidth: 900,
            }}
          >
            GCP cost optimization &amp; cloud engineering for teams spending
            $20k+/mo on Google Cloud.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            color: "#9ca3af",
          }}
        >
          <span style={{ color: "#ffffff", fontWeight: 700 }}>BraneBridge</span>
          <span>Toronto, Canada · branebridge.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
