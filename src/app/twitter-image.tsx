import { ImageResponse } from "next/og";

export const alt = "DevNest";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "28px",
          background:
            "linear-gradient(135deg, #090b11 0%, #2b0d12 52%, #7f1d1d 100%)",
          color: "#ffe4e6",
          padding: "64px 72px",
          fontFamily:
            "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            textTransform: "uppercase",
            letterSpacing: 3,
            fontWeight: 700,
            color: "#fca5a5",
          }}
        >
          DevNest
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.06,
            maxWidth: "970px",
          }}
        >
          Learn Engineering Skills With Clear, Career-Focused Paths
        </div>
      </div>
    ),
    size,
  );
}
