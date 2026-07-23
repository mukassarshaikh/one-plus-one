import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Dynamic Favicon generation using Next.js og enclaves
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#030712",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          border: "1.5px solid rgba(59, 130, 246, 0.4)",
        }}
      >
        {/* OnePlus One logo geometry: circle outer ring + inner plus */}
        <svg
          viewBox="0 0 100 100"
          style={{
            width: "80%",
            height: "80%",
          }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#3b82f6"
            strokeWidth="10"
          />
          <path
            d="M50 32V68M32 50H68"
            stroke="#8b5cf6"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
