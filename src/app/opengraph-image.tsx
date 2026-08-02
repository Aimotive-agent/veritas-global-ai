import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Veritas Global AI — Enterprise AI Consulting & Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #6366f1, #a78bfa)",
              borderRadius: 24,
              width: 90,
              height: 90,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 30,
            }}
          >
            <span style={{ fontSize: 52, fontWeight: 900, color: "white", fontFamily: "system-ui,sans-serif" }}>
              V
            </span>
          </div>
          <span style={{ fontSize: 56, fontWeight: 800, color: "white", fontFamily: "system-ui,sans-serif" }}>
            Veritas Global AI
          </span>
        </div>
        <span
          style={{
            fontSize: 42,
            fontWeight: 400,
            color: "#c7d2fe",
            fontFamily: "system-ui,sans-serif",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Enterprise AI that delivers real outcomes.
          Strategy to scale, built for your industry.
        </span>
      </div>
    ),
    { ...size }
  );
}
