export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #07111f 0%, #0f172a 50%, #1e293b 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "32px",
            padding: "60px",
            boxShadow: "0 20px 80px rgba(0,0,0,0.4)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "rgba(56,189,248,0.15)",
              border: "1px solid rgba(56,189,248,0.25)",
              marginBottom: "24px",
              color: "#bae6fd",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Thailand ED Medication Guide
          </span>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1,
              margin: "0 0 24px",
              letterSpacing: "-3px",
              maxWidth: "900px",
            }}
          >
            Buy Sildenafil, Viagra & Cialis in Thailand
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.6,
              color: "#cbd5e1",
              maxWidth: "850px",
              marginBottom: "40px",
            }}
          >
            A premium English guide covering sildenafil, Viagra, Sidegra,
            Cialis, pricing, Bangkok pharmacies, Pattaya delivery options,
            Phuket access, and common long-tail questions around ED medication
            in Thailand.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Viagra Thailand",
                url: "/app/viagra-thailand-guide",
              },
              {
  title: "Bangkok Pharmacies",
  url: "/app/bangkok-pharmacy-guide",
},
              {
                title: "Cialis Thailand",
                url: "#",
              },
              {
                title: "Sildenafil / Sidegra",
                url: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.url}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "24px",
                  padding: "28px",
                  backdropFilter: "blur(12px)",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "24px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                  }}
                >
                  SEO-focused informational content and FAQ structure for
                  Thailand medication searches.
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
