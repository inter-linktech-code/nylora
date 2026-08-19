import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0d0c",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
          padding: "60px 40px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "#111412",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          Nylora Safaris
        </span>

        <h1
          style={{
            margin: "18px 0",
            fontSize: "40px",
          }}
        >
          Safari Administration
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
          }}
        >
          The Nylora administration dashboard is currently
          being prepared. Booking management, authentication,
          safari management and other administrative tools
          will be connected here.
        </p>

        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            border: "none",
            cursor: "pointer",
            background: "#d6b36a",
            color: "#111",
            fontWeight: 600,
          }}
        >
          Return to Website
        </button>
      </div>
    </main>
  );
}