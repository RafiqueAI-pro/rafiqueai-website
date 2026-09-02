import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") || "Software que mostra o que está acontecendo.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0B121A",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.08em",
            color: "#8C97A6",
            marginBottom: 28,
            fontFamily: "sans-serif",
          }}
        >
          RAFIQUE AI
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#F4F1EA",
            lineHeight: 1.1,
            maxWidth: 900,
            fontFamily: "sans-serif",
          }}
        >
          {title}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
