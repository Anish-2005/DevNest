import { ImageResponse } from "next/og";

export const alt = "DevNest";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 10%, #7f1d1d 0%, #2b0d12 45%, #090b11 100%)",
          color: "#fef2f2",
          padding: "64px 72px",
          fontFamily:
            "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14h22.5c8.56 0 15.5 6.94 15.5 15.5S45.06 45 36.5 45H27v5h-7V21h7v17h9.5c4.69 0 8.5-3.81 8.5-8.5S41.19 21 36.5 21H14v-7Z"
              fill="#FCA5A5"
            />
          </svg>
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            DevNest
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.04,
              maxWidth: "920px",
            }}
          >
            Developer Roadmaps Built For Real Career Growth
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#fecaca",
              maxWidth: "900px",
              lineHeight: 1.3,
            }}
          >
            Structured learning paths across web, AI, cloud, security, and
            advanced software engineering tracks.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
