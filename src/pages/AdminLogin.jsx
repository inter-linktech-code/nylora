import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#0b0d0c",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          textAlign: "center",
          padding: "50px 30px",
          border: "1px solid rgba(255,255,255,0.12)",
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
            fontSize: "36px",
          }}
        >
          Administration
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
          }}
        >
          The administration system is currently being
          prepared and will be connected to secure
          authentication later.
        </p>

        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            marginTop: "25px",
            padding: "14px 28px",
            border: "none",
            cursor: "pointer",
            background: "#d6b36a",
            color: "#111",
            fontWeight: 600,
          }}
        >
          Return to Nylora Safaris
        </button>
      </div>
    </main>
  );
}