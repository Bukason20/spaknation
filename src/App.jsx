import { useState, useEffect } from "react";
import {
  Music,
  Star,
  Users,
  Trophy,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Waves,
  Zap,
  Award,
  Heart,
  ArrowRight,
  Play,
  Shield,
  Target,
  Sparkles,
} from "lucide-react";

const NAV_LINKS = ["Home", "About", "Programs", "Showcase", "Contact"];

const PROGRAMS = [
  {
    icon: Zap,
    title: "Acrobatics",
    desc: "High-energy tumbling, flips, and acrobatic artistry taught with world-class precision.",
    bg: "#FFF0F0",
    border: "#FFCDD2",
    accent: "#E53935",
    iconBg: "#FFEBEE",
    tag: "Most Popular",
  },
  {
    icon: Music,
    title: "Music",
    desc: "Vocal training, rhythm, and musical expression woven into every performance.",
    bg: "#FFF8E7",
    border: "#FFE082",
    accent: "#F57F17",
    iconBg: "#FFF3E0",
    tag: "",
  },
  {
    icon: Star,
    title: "Gymnastics",
    desc: "Structured gymnastics programs that build strength, flexibility and discipline.",
    bg: "#F0FFF4",
    border: "#A7F3D0",
    accent: "#16A34A",
    iconBg: "#DCFCE7",
    tag: "",
  },
  {
    icon: Trophy,
    title: "Live Stage Performances",
    desc: "Professional live showcases where students shine under the spotlight.",
    bg: "#FFFBEB",
    border: "#FDE68A",
    accent: "#D97706",
    iconBg: "#FEF3C7",
    tag: "",
  },
  {
    icon: Waves,
    title: "Swimming Competition",
    desc: "Competitive swimming training that builds champions one stroke at a time.",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    accent: "#2563EB",
    iconBg: "#DBEAFE",
    tag: "",
  },
  {
    icon: Users,
    title: "School Partnership",
    desc: "Collaborating with schools to bring performing arts excellence to every student.",
    bg: "#FDF4FF",
    border: "#E9D5FF",
    accent: "#9333EA",
    iconBg: "#F3E8FF",
    tag: "",
  },
  {
    icon: Sparkles,
    title: "Curated Kids Showcase",
    desc: "Professionally curated performances that put your child's talent in the spotlight.",
    bg: "#FFF0FA",
    border: "#FBCFE8",
    accent: "#DB2777",
    iconBg: "#FCE7F3",
    tag: "Fan Favourite",
  },
];

const STATS = [
  { number: "500+", label: "Young Champions", color: "#E53935" },
  { number: "7", label: "Programs Offered", color: "#F57F17" },
  { number: "8+", label: "Years of Excellence", color: "#16A34A" },
  { number: "50+", label: "School Partners", color: "#2563EB" },
];

const VALUES = [
  { icon: Shield, label: "Discipline", color: "#E53935", bg: "#FFF0F0" },
  { icon: Heart, label: "Integrity", color: "#DB2777", bg: "#FFF0FA" },
  { icon: Award, label: "Excellence", color: "#D97706", bg: "#FFFBEB" },
  { icon: Target, label: "Purpose", color: "#16A34A", bg: "#F0FFF4" },
];

export default function SpaknationWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: "#FAFAFA",
        color: "#1a1a1a",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .bebas { font-family: 'Bebas Neue', cursive; }

        .nav-wrap { position: fixed; top: 0; left: 0; right: 0; z-index: 100; transition: all 0.3s ease; }
        .nav-scrolled { background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); box-shadow: 0 2px 20px rgba(0,0,0,0.08); }
        .nav-link { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #444; text-decoration: none; position: relative; background: none; border: none; cursor: pointer; padding: 4px 0; transition: color 0.2s; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2.5px; background: #E53935; transition: width 0.3s; border-radius: 2px; }
        .nav-link:hover { color: #E53935; }
        .nav-link:hover::after { width: 100%; }

        .hero-bg {
          background: linear-gradient(145deg, #FFF9F2 0%, #FFF0F5 30%, #F2F0FF 60%, #F0FFF6 100%);
          min-height: 100vh; position: relative; overflow: hidden;
        }
        .dot-bg { background-image: radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px); background-size: 28px 28px; }
        .blob { position: absolute; border-radius: 50%; pointer-events: none; }

        .live-badge { display: inline-flex; align-items: center; gap: 8px; background: #FFF; border: 1.5px solid #FFD7D7; border-radius: 100px; padding: 6px 16px; box-shadow: 0 2px 12px rgba(229,57,53,0.12); }
        .live-dot { width: 8px; height: 8px; background: #E53935; border-radius: 50%; animation: blink 1.5s ease-in-out infinite; }
        @keyframes blink { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(1.3);opacity:0.6;} }

        .float-anim { animation: floating 5s ease-in-out infinite; }
        @keyframes floating { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }

        .marquee-track { animation: marquee 22s linear infinite; display: flex; gap: 0; white-space: nowrap; }
        @keyframes marquee { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }

        .prog-card { background:#fff; border-radius:24px; border:2px solid #F0F0F0; transition:transform 0.3s,box-shadow 0.3s,border-color 0.3s; cursor:pointer; overflow:hidden; }
        .prog-card:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(0,0,0,0.1); }

        .diff-card { border-radius:24px; padding:36px 32px; transition:transform 0.3s,box-shadow 0.3s; }
        .diff-card:hover { transform:translateY(-8px); box-shadow:0 20px 50px rgba(0,0,0,0.08); }

        .value-pill { display:flex; align-items:center; gap:14px; padding:18px 24px; border-radius:18px; border:2px solid transparent; transition:transform 0.2s,box-shadow 0.2s; }
        .value-pill:hover { transform:translateX(6px); box-shadow:0 8px 24px rgba(0,0,0,0.07); }

        .section-tag { display:inline-flex; align-items:center; gap:6px; font-size:0.72rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; padding:6px 16px; border-radius:100px; border:1.5px solid; margin-bottom:16px; }

        .btn-red { background:linear-gradient(135deg,#E53935,#F57F17); color:#fff; border:none; cursor:pointer; font-family:'Outfit',sans-serif; font-weight:700; letter-spacing:0.04em; border-radius:100px; transition:transform 0.2s,box-shadow 0.2s; display:inline-flex; align-items:center; gap:8px; }
        .btn-red:hover { transform:translateY(-2px); box-shadow:0 12px 36px rgba(229,57,53,0.4); }
        .btn-outline { background:transparent; color:#1a1a1a; border:2px solid #E0E0E0; cursor:pointer; font-family:'Outfit',sans-serif; font-weight:600; border-radius:100px; transition:border-color 0.2s,background 0.2s,color 0.2s; display:inline-flex; align-items:center; gap:8px; }
        .btn-outline:hover { border-color:#E53935; color:#E53935; background:#FFF0F0; }

        .contact-input { width:100%; padding:14px 18px; background:#fff; border:2px solid #E8E8E8; border-radius:14px; font-family:'Outfit',sans-serif; font-size:0.9rem; color:#1a1a1a; transition:border-color 0.3s,box-shadow 0.3s; }
        .contact-input:focus { outline:none; border-color:#E53935; box-shadow:0 0 0 4px rgba(229,57,53,0.08); }
        .contact-input::placeholder { color:#B0B0B0; }

        .stat-num { font-family:'Bebas Neue',cursive; font-size:2.4rem; line-height:1; }
        .footer-link { font-size:0.85rem; color:#888; cursor:pointer; transition:color 0.2s; display:block; margin-bottom:10px; text-decoration:none; }
        .footer-link:hover { color:#ddd; }

        @media (max-width:768px) {
          .hide-mobile { display:none !important; }
          .show-mobile { display:block !important; }
          .grid-hero { grid-template-columns:1fr !important; }
          .grid-2 { grid-template-columns:1fr !important; gap:40px !important; }
          .grid-3 { grid-template-columns:1fr !important; gap:20px !important; }
          .grid-footer { grid-template-columns:1fr !important; gap:32px !important; }
          .programs-grid { grid-template-columns:1fr !important; }
          .stats-row { grid-template-columns:1fr 1fr !important; }
          .hero-btns { flex-direction:column; }
          .cta-text { font-size:2.8rem !important; }
          .nav-desktop { display:none !important; }
          .nav-mobile-btn { display:flex !important; }
          .enroll-btn-desktop { display:none !important; }
        }
        @media (min-width:769px) {
          .nav-mobile-btn { display:none !important; }
          .show-mobile { display:none !important; }
        }
        @media (min-width:769px) and (max-width:1024px) {
          .programs-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>

      {/* ===== NAVBAR ===== */}
      <nav className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#E53935,#F57F17)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(229,57,53,0.35)",
              }}
            >
              <Sparkles size={18} color="#fff" />
            </div>
            <span
              className="bebas"
              style={{ fontSize: 26, letterSpacing: 3, color: "#1a1a1a" }}
            >
              SPAK<span style={{ color: "#E53935" }}>NATION</span>
            </span>
          </div>

          <ul
            className="nav-desktop"
            style={{
              display: "flex",
              gap: 36,
              listStyle: "none",
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <button className="nav-link" onClick={() => scrollTo(l)}>
                  {l}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="btn-red enroll-btn-desktop"
            style={{ padding: "10px 26px", fontSize: "0.82rem" }}
            onClick={() => scrollTo("Contact")}
          >
            Enroll Now <ArrowRight size={14} />
          </button>

          <button
            className="nav-mobile-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={24} color="#1a1a1a" />
            ) : (
              <Menu size={24} color="#1a1a1a" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid #F0F0F0",
              padding: "16px 24px 24px",
            }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                className="nav-link"
                onClick={() => scrollTo(l)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  borderBottom: "1px solid #F5F5F5",
                  width: "100%",
                  textAlign: "left",
                  fontSize: "0.9rem",
                }}
              >
                {l}
              </button>
            ))}
            <button
              className="btn-red"
              style={{
                marginTop: 16,
                padding: "12px 0",
                width: "100%",
                justifyContent: "center",
                fontSize: "0.9rem",
                borderRadius: 14,
              }}
              onClick={() => scrollTo("Contact")}
            >
              Enroll Now <ArrowRight size={14} />
            </button>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="hero-bg dot-bg" style={{ paddingTop: 72 }}>
        <div
          className="blob"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle,rgba(229,57,53,0.13) 0%,transparent 70%)",
            top: -150,
            right: -150,
          }}
        />
        <div
          className="blob"
          style={{
            width: 450,
            height: 450,
            background:
              "radial-gradient(circle,rgba(22,163,74,0.1) 0%,transparent 70%)",
            bottom: -100,
            left: -100,
          }}
        />
        <div
          className="blob"
          style={{
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 70%)",
            top: "45%",
            left: "45%",
            transform: "translate(-50%,-50%)",
          }}
        />

        <div
          className="grid-hero"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px 80px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <div className="live-badge" style={{ marginBottom: 28 }}>
              <div className="live-dot" />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#E53935",
                }}
              >
                Now Enrolling — All Ages Welcome
              </span>
            </div>

            <h1
              className="bebas"
              style={{ lineHeight: 0.95, marginBottom: 24 }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3rem,7vw,5.8rem)",
                  color: "#1a1a1a",
                  letterSpacing: 2,
                }}
              >
                WHERE KIDS
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3rem,7vw,5.8rem)",
                  background: "linear-gradient(90deg,#E53935,#F57F17)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: 2,
                }}
              >
                DISCOVER
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3rem,7vw,5.8rem)",
                  color: "#1a1a1a",
                  letterSpacing: 2,
                }}
              >
                THEIR
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3rem,7vw,5.8rem)",
                  background: "linear-gradient(90deg,#16A34A,#2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: 2,
                }}
              >
                GREATNESS
              </span>
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 36,
                maxWidth: 460,
              }}
            >
              Acrobatics, Music, Gymnastics, Performances and more — in a safe,
              structured space where discipline and joy go hand in hand.
            </p>

            <div
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
              className="hero-btns"
            >
              <button
                className="btn-red"
                style={{ padding: "16px 32px", fontSize: "0.95rem" }}
                onClick={() => scrollTo("Programs")}
              >
                Explore Programs <ArrowRight size={16} />
              </button>
              <button
                className="btn-outline"
                style={{ padding: "16px 32px", fontSize: "0.95rem" }}
                onClick={() => scrollTo("About")}
              >
                <Play size={14} fill="#1a1a1a" /> Our Story
              </button>
            </div>

            <div
              className="stats-row"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 16,
                marginTop: 52,
              }}
            >
              {STATS.map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div className="stat-num" style={{ color: s.color }}>
                    {s.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginTop: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="hide-mobile"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 480,
            }}
          >
            <div
              className="float-anim"
              style={{ position: "relative", zIndex: 2 }}
            >
              <div
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,rgba(229,57,53,0.07),rgba(245,127,23,0.07))",
                  border: "3px solid rgba(229,57,53,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#E53935,#F57F17)",
                      margin: "0 auto 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 12px 40px rgba(229,57,53,0.4)",
                    }}
                  >
                    <Sparkles size={38} color="#fff" />
                  </div>
                  <div
                    className="bebas"
                    style={{
                      fontSize: "1.6rem",
                      color: "#1a1a1a",
                      letterSpacing: 3,
                    }}
                  >
                    SPAKNATION
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 4,
                      justifyContent: "center",
                      marginTop: 6,
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#F9A825" color="#F9A825" />
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "#888",
                      marginTop: 6,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Excellence in Every Step
                  </div>
                </div>
              </div>
            </div>

            {[
              {
                icon: Zap,
                label: "Acrobatics",
                color: "#E53935",
                bg: "#FFF0F0",
                style: { top: "5%", left: "0%" },
              },
              {
                icon: Music,
                label: "Music",
                color: "#F57F17",
                bg: "#FFF8E7",
                style: { top: "5%", right: "0%", left: "auto" },
              },
              {
                icon: Star,
                label: "Gymnastics",
                color: "#16A34A",
                bg: "#F0FFF4",
                style: { bottom: "15%", left: "0%", top: "auto" },
              },
              {
                icon: Waves,
                label: "Swimming",
                color: "#2563EB",
                bg: "#EFF6FF",
                style: {
                  bottom: "15%",
                  right: "0%",
                  left: "auto",
                  top: "auto",
                },
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    position: "absolute",
                    ...item.style,
                    background: item.bg,
                    borderRadius: 16,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    border: `2px solid ${item.color}22`,
                    whiteSpace: "nowrap",
                    zIndex: 3,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: `${item.color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color={item.color} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            paddingBottom: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 600,
              color: "#AAA",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Scroll to explore
          </span>
          <ChevronDown size={18} color="#CCC" />
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div
        style={{
          background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
          padding: "14px 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {[...Array(3)].flatMap(() =>
            [
              "Acrobatics",
              "Music",
              "Gymnastics",
              "Live Performances",
              "Swimming Competition",
              "School Partnership",
              "Kids Showcase",
            ].map((t, i) => (
              <span
                key={t + i}
                className="bebas"
                style={{
                  fontSize: "1.3rem",
                  letterSpacing: 3,
                  color: "#fff",
                  marginRight: 48,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {t}{" "}
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.5)",
                    display: "inline-block",
                  }}
                />
              </span>
            )),
          )}
        </div>
      </div>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ padding: "100px 0", background: "#fff" }}>
        <div
          className="grid-2"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="section-tag"
              style={{
                background: "#F0FFF4",
                color: "#16A34A",
                borderColor: "#A7F3D0",
              }}
            >
              <Sparkles size={12} /> Who We Are
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2.5rem,4.5vw,4rem)",
                color: "#1a1a1a",
                lineHeight: 0.95,
                marginBottom: 20,
                letterSpacing: 1,
              }}
            >
              A SAFE SPACE WHERE
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#E53935,#F57F17)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CHAMPIONS
              </span>{" "}
              ARE FORGED
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 12,
              }}
            >
              Spaknation is a performing arts academy on a mission — we believe
              every child carries untapped potential and we ignite it through
              world-class programs.
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              Professional coaches, curated showcases, and meaningful school
              partnerships build skills and character alike — nurturing the
              whole child through discipline, integrity, and excellence.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "Safe Environment",
                "Expert Coaches",
                "School-Ready Programs",
                "Performance Training",
                "All Age Groups",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#555",
                    background: "#F5F5F5",
                    borderRadius: 100,
                    padding: "6px 14px",
                    border: "1.5px solid #E8E8E8",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="value-pill"
                  style={{ background: v.bg, border: `2px solid ${v.color}22` }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 4px 14px ${v.color}22`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={v.color} />
                  </div>
                  <div>
                    <div
                      className="bebas"
                      style={{
                        fontSize: "1.5rem",
                        color: "#1a1a1a",
                        letterSpacing: 1,
                      }}
                    >
                      {v.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#888",
                        marginTop: 1,
                      }}
                    >
                      A core pillar of the Spaknation philosophy
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: `${v.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={14} color={v.color} />
                  </div>
                </div>
              );
            })}
            <div
              style={{
                background: "linear-gradient(135deg,#E53935,#F57F17)",
                borderRadius: 20,
                padding: "20px 24px",
                display: "flex",
                gap: 20,
                marginTop: 6,
              }}
            >
              {[
                { n: "8+", l: "Years" },
                { n: "500+", l: "Kids" },
                { n: "50+", l: "Schools" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center", flex: 1 }}>
                  <div
                    className="bebas"
                    style={{ fontSize: "2rem", color: "#fff", lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section
        id="programs"
        style={{ padding: "100px 0", background: "#FAFAFA" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div
              className="section-tag"
              style={{
                background: "#FFF8E7",
                color: "#F57F17",
                borderColor: "#FFE082",
              }}
            >
              <Star size={12} /> What We Offer
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                color: "#1a1a1a",
                lineHeight: 0.95,
                letterSpacing: 1,
              }}
            >
              PROGRAMS THAT
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                TRANSFORM LIVES
              </span>
            </h2>
            <p
              style={{
                color: "#888",
                fontSize: "1rem",
                marginTop: 12,
                maxWidth: 440,
                margin: "12px auto 0",
              }}
            >
              Seven world-class disciplines. One extraordinary journey.
            </p>
          </div>

          <div
            className="programs-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 24,
            }}
          >
            {PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="prog-card"
                  style={{ borderColor: prog.border }}
                >
                  <div
                    style={{
                      height: 6,
                      background: `linear-gradient(90deg,${prog.accent},${prog.accent}88)`,
                    }}
                  />
                  <div style={{ padding: "28px 28px 32px" }}>
                    {prog.tag && (
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: prog.accent,
                          background: `${prog.accent}14`,
                          borderRadius: 100,
                          padding: "4px 12px",
                          marginBottom: 14,
                          border: `1.5px solid ${prog.accent}30`,
                        }}
                      >
                        {prog.tag}
                      </div>
                    )}
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 18,
                        background: prog.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 18,
                        border: `2px solid ${prog.accent}22`,
                      }}
                    >
                      <Icon size={26} color={prog.accent} />
                    </div>
                    <h3
                      className="bebas"
                      style={{
                        fontSize: "1.5rem",
                        color: "#1a1a1a",
                        letterSpacing: 1,
                        marginBottom: 10,
                      }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      style={{
                        color: "#777",
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {prog.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 20,
                        color: prog.accent,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      Learn More <ArrowRight size={13} color={prog.accent} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        id="showcase"
        style={{
          padding: "100px 0",
          background:
            "linear-gradient(135deg,#E53935 0%,#F57F17 50%,#F9A825 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle,rgba(255,255,255,0.12) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 10% 50%, rgba(255,255,255,0.08) 0%, transparent 40%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.2)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 28,
            }}
          >
            <Star size={12} fill="#fff" color="#fff" />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Season Showcase
            </span>
          </div>

          <h2
            className="bebas cta-text"
            style={{
              fontSize: "clamp(2.8rem,6vw,5.5rem)",
              color: "#fff",
              lineHeight: 0.95,
              letterSpacing: 2,
              marginBottom: 20,
            }}
          >
            WATCH YOUR CHILD
            <br />
            BECOME A STAR
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 auto 40px",
            }}
          >
            Our curated Kids Showcase events are unforgettable celebrations of
            talent, discipline, and growth — moments your family will treasure
            forever.
          </p>

          <button
            onClick={() => scrollTo("Contact")}
            style={{
              background: "#fff",
              color: "#E53935",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Outfit',sans-serif",
              fontWeight: 800,
              fontSize: "0.95rem",
              padding: "18px 40px",
              borderRadius: 100,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
              transition: "transform 0.2s,box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 18px 50px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)";
            }}
          >
            Register Your Child Today <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ===== WHY SPAKNATION ===== */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              className="section-tag"
              style={{
                background: "#EFF6FF",
                color: "#2563EB",
                borderColor: "#BFDBFE",
              }}
            >
              <Shield size={12} /> The Difference
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2.2rem,4vw,3.8rem)",
                color: "#1a1a1a",
                letterSpacing: 1,
              }}
            >
              THE SPAKNATION{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#16A34A,#2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DIFFERENCE
              </span>
            </h2>
          </div>

          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 28,
            }}
          >
            {[
              {
                icon: Shield,
                title: "Safe & Structured",
                desc: "Every program is designed with child safety as the top priority, backed by qualified coaches and clear frameworks.",
                color: "#16A34A",
                bg: "#F0FFF4",
                border: "#A7F3D0",
              },
              {
                icon: Award,
                title: "Excellence-Driven",
                desc: "We hold our students to the highest standards, celebrating growth every step of the way toward mastery.",
                color: "#E53935",
                bg: "#FFF0F0",
                border: "#FFCDD2",
              },
              {
                icon: Users,
                title: "Community-First",
                desc: "Families, coaches, and students form one thriving community committed to each child's journey.",
                color: "#F57F17",
                bg: "#FFF8E7",
                border: "#FFE082",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="diff-card"
                  style={{
                    background: item.bg,
                    border: `2px solid ${item.border}`,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 18,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      boxShadow: `0 4px 16px ${item.color}22`,
                    }}
                  >
                    <Icon size={26} color={item.color} />
                  </div>
                  <h3
                    className="bebas"
                    style={{
                      fontSize: "1.6rem",
                      color: "#1a1a1a",
                      letterSpacing: 1,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.875rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        style={{
          padding: "100px 0",
          background: "linear-gradient(160deg,#FFF9F0 0%,#F2F6FF 100%)",
        }}
      >
        <div
          className="grid-2"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <div
              className="section-tag"
              style={{
                background: "#FFF0F0",
                color: "#E53935",
                borderColor: "#FFCDD2",
              }}
            >
              <Mail size={12} /> Get In Touch
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2.5rem,4.5vw,4rem)",
                color: "#1a1a1a",
                lineHeight: 0.95,
                marginBottom: 20,
                letterSpacing: 1,
              }}
            >
              READY TO BEGIN
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#E53935,#F57F17)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                YOUR JOURNEY?
              </span>
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              Whether you have questions about enrollment, our programs, or
              school partnerships — we're here to help your child take their
              first step toward greatness.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+234 000 000 0000",
                  color: "#E53935",
                  bg: "#FFF0F0",
                },
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "hello@spaknation.com",
                  color: "#2563EB",
                  bg: "#EFF6FF",
                },
                {
                  icon: MapPin,
                  label: "Visit Us",
                  value: "Lagos, Nigeria",
                  color: "#16A34A",
                  bg: "#F0FFF4",
                },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background: info.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: `2px solid ${info.color}22`,
                      }}
                    >
                      <Icon size={20} color={info.color} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#AAA",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {info.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          marginTop: 2,
                        }}
                      >
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 28,
              padding: 40,
              boxShadow: "0 16px 60px rgba(0,0,0,0.08)",
              border: "2px solid #F0F0F0",
            }}
          >
            <h3
              className="bebas"
              style={{
                fontSize: "2rem",
                color: "#1a1a1a",
                letterSpacing: 1,
                marginBottom: 28,
              }}
            >
              SEND US A MESSAGE
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div>
                  <label
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="contact-input"
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="contact-input"
                  />
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="contact-input"
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Program Interest
                </label>
                <select className="contact-input" style={{ cursor: "pointer" }}>
                  <option value="">Select a program...</option>
                  {PROGRAMS.map((p) => (
                    <option key={p.title}>{p.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your child and any questions you have..."
                  className="contact-input"
                  style={{ resize: "none" }}
                />
              </div>
              <button
                className="btn-red"
                style={{
                  padding: "16px 0",
                  width: "100%",
                  justifyContent: "center",
                  borderRadius: 14,
                  fontSize: "0.95rem",
                  marginTop: 6,
                }}
              >
                Send Message <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#1a1a1a", padding: "60px 0 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="grid-footer"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: 48,
              marginBottom: 48,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#E53935,#F57F17)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Sparkles size={18} color="#fff" />
                </div>
                <span
                  className="bebas"
                  style={{ fontSize: 24, letterSpacing: 3, color: "#fff" }}
                >
                  SPAK<span style={{ color: "#F57F17" }}>NATION</span>
                </span>
              </div>
              <p
                style={{
                  color: "#888",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  maxWidth: 280,
                }}
              >
                A safe, structured environment where potential is nurtured with
                discipline, integrity and excellence.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 20,
                  flexWrap: "wrap",
                }}
              >
                {["Acrobatics", "Music", "Dance"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "#888",
                      background: "#2a2a2a",
                      borderRadius: 100,
                      padding: "4px 12px",
                      border: "1px solid #333",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4
                className="bebas"
                style={{
                  fontSize: "1.1rem",
                  color: "#fff",
                  letterSpacing: 2,
                  marginBottom: 18,
                }}
              >
                Programs
              </h4>
              {[
                "Acrobatics",
                "Music",
                "Gymnastics",
                "Swimming",
                "Performances",
                "Kids Showcase",
              ].map((p) => (
                <a key={p} className="footer-link">
                  {p}
                </a>
              ))}
            </div>
            <div>
              <h4
                className="bebas"
                style={{
                  fontSize: "1.1rem",
                  color: "#fff",
                  letterSpacing: 2,
                  marginBottom: 18,
                }}
              >
                Company
              </h4>
              {[
                "About Us",
                "Our Coaches",
                "School Partnership",
                "Showcase Events",
                "Contact",
              ].map((p) => (
                <a key={p} className="footer-link">
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #2a2a2a",
              paddingTop: 28,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "#555" }}>
              © 2025 Spaknation. All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="#F9A825" color="#F9A825" />
              ))}
              <span
                style={{ fontSize: "0.75rem", color: "#555", marginLeft: 6 }}
              >
                Nurturing Excellence
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
