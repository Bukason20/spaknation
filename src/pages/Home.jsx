import { useState, useEffect } from "react";
import {
  Music,
  Star,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Waves,
  Zap,
  Award,
  ArrowRight,
  Play,
  Shield,
  Sparkles,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Programs from "../data/programs";
import AIChatbot from "../components/aichatbot";
import Stats from "../data/stats";
import Values from "../data/values";
import Navbar from "../components/Navbar";
import GALLERY_PHOTOS from "../data/gallery";

// ─── REPLACE THESE URLS WITH YOUR FACEBOOK PHOTOS ───────────────────────────

// Replace with your actual Facebook / YouTube video embed URL
const SHOWCASE_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
// ─────────────────────────────────────────────────────────────────────────────

const Home = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  // ── Lightbox state ──────────────────────────────────────────────────────────
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i === 0 ? GALLERY_PHOTOS.length - 1 : i - 1));
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i === GALLERY_PHOTOS.length - 1 ? 0 : i + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === 0 ? GALLERY_PHOTOS.length - 1 : i - 1));
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i === GALLERY_PHOTOS.length - 1 ? 0 : i + 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);
  // ───────────────────────────────────────────────────────────────────────────

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
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
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== LIGHTBOX ===== */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              zIndex: 2,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
          >
            <X size={20} color="#fff" />
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              top: 24,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              zIndex: 2,
            }}
          >
            {lightboxIndex + 1} / {GALLERY_PHOTOS.length}
          </div>

          {/* Prev button */}
          <button
            onClick={prevPhoto}
            style={{
              position: "absolute",
              left: 20,
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              zIndex: 2,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
          >
            <ChevronLeft size={24} color="#fff" />
          </button>

          {/* Main image */}
          <img
            src={GALLERY_PHOTOS[lightboxIndex].src}
            alt={GALLERY_PHOTOS[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "calc(100vw - 160px)",
              maxHeight: "calc(100vh - 120px)",
              objectFit: "contain",
              borderRadius: 16,
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              display: "block",
            }}
          />

          {/* Next button */}
          <button
            onClick={nextPhoto}
            style={{
              position: "absolute",
              right: 20,
              background: "rgba(255,255,255,0.12)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              zIndex: 2,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
          >
            <ChevronRight size={24} color="#fff" />
          </button>

          {/* Dot indicators */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 8,
              zIndex: 2,
            }}
          >
            {GALLERY_PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(i);
                }}
                style={{
                  width: i === lightboxIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 100,
                  background:
                    i === lightboxIndex ? "#E53935" : "rgba(255,255,255,0.35)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.25s",
                }}
              />
            ))}
          </div>

          {/* Alt caption */}
          <div
            style={{
              position: "absolute",
              bottom: 60,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.82rem",
              fontWeight: 500,
              whiteSpace: "nowrap",
              zIndex: 2,
            }}
          >
            {GALLERY_PHOTOS[lightboxIndex].alt}
          </div>
        </div>
      )}

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
                  background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: 2,
                }}
              >
                DISCOVER GREATNESS
              </span>
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              A world-class performing arts academy in Port Harcourt building
              fearless performers, disciplined athletes, and confident leaders
              through acrobatics, dance, music, and more.
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
              {Stats.map((s) => (
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

          {/* ── HERO RIGHT — PHOTO (visible on BOTH mobile and desktop) ── */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 380,
            }}
          >
            <div
              className="float-anim"
              style={{ position: "relative", zIndex: 2, width: "100%" }}
            >
              {/* Main hero photo */}
              <div
                style={{
                  borderRadius: 32,
                  overflow: "hidden",
                  boxShadow: "0 32px 80px rgba(229,57,53,0.2)",
                  border: "4px solid rgba(255,255,255,0.8)",
                  position: "relative",
                }}
              >
                <img
                  src="./heroImg.jpg"
                  alt="Spaknation kids performing"
                  style={{
                    width: "100%",
                    height: 480,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Gradient overlay at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
                  }}
                />
                {/* Live pill on photo */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: 100,
                    padding: "6px 14px",
                  }}
                ></div>
              </div>

              {/* Floating stat badge — hidden on very small screens */}
              <div
                className="hero-badge-top"
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  background: "#fff",
                  borderRadius: 20,
                  padding: "16px 20px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  border: "2px solid #FFF0F0",
                  textAlign: "center",
                }}
              >
                <div
                  className="bebas"
                  style={{ fontSize: "2rem", color: "#E53935", lineHeight: 1 }}
                >
                  500+
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Kids Trained
                </div>
              </div>

              {/* Floating discipline badge */}
              <div
                className="hero-badge-bottom"
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: -20,
                  background: "linear-gradient(135deg,#E53935,#F57F17)",
                  borderRadius: 16,
                  padding: "12px 18px",
                  boxShadow: "0 8px 30px rgba(229,57,53,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Camera size={18} color="#fff" />
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    9 Disciplines
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    Ballet · Acrobatics · Music · More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <section
        style={{
          padding: "20px 0",
          background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {[
            "Acrobatics",
            "Ballet",
            "Gymnastics",
            "Hip Hop",
            "Music",
            "Singing",
            "Taekwondo",
            "Swimming",
            "Public Speaking",
            "Acrobatics",
            "Ballet",
            "Gymnastics",
            "Hip Hop",
            "Music",
            "Singing",
            "Taekwondo",
            "Swimming",
            "Public Speaking",
          ].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "0 24px",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
              }}
            >
              {item}
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
          ))}
        </div>
      </section>

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

            {Values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="value-pill"
                  style={{
                    background: v.bg,
                    borderColor: v.border,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: v.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={v.color} />
                  </div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      color: "#1a1a1a",
                    }}
                  >
                    {v.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="/about.jpg"
                alt="Spaknation students training"
                style={{
                  width: "100%",
                  height: 490,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -24,
                left: -24,
                background: "#fff",
                borderRadius: 20,
                padding: "20px 24px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                border: "2px solid #FFF0F0",
                maxWidth: 240,
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  color: "#444",
                  lineHeight: 1.6,
                  marginBottom: 8,
                }}
              >
                "Every child has greatness in them — we just help them find it."
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#E53935",
                }}
              >
                — Frank Robert, Founder
              </div>
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
              Nine world-class disciplines. One extraordinary journey.
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
            {Programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="prog-card"
                  style={{ borderColor: prog.border }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: 280,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={prog.image}
                      alt={`${prog.title} at Spaknation`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 5,
                        background: `linear-gradient(90deg,${prog.accent},${prog.accent}88)`,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 70,
                        background:
                          "linear-gradient(to top,rgba(0,0,0,0.5),transparent)",
                      }}
                    />
                    {prog.tag && (
                      <div
                        style={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          fontSize: "0.62rem",
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: prog.accent,
                          borderRadius: 100,
                          padding: "4px 12px",
                        }}
                      >
                        {prog.tag}
                      </div>
                    )}
                  </div>

                  <div style={{ padding: "24px 28px 32px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: prog.iconBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={18} color={prog.accent} />
                      </div>
                      <h3
                        className="bebas"
                        style={{
                          fontSize: "1.5rem",
                          color: "#1a1a1a",
                          letterSpacing: 1,
                        }}
                      >
                        {prog.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: prog.accent,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 10,
                      }}
                    >
                      {prog.tagline}
                    </p>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {prog.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
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

      {/* ===== PHOTO GALLERY STRIP — with Lightbox ===== */}
      <section
        style={{ padding: "80px 0", background: "#1a1a1a", overflow: "hidden" }}
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 40px" }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              className="section-tag"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#F9A825",
                borderColor: "rgba(249,168,37,0.3)",
              }}
            >
              <Camera size={12} /> Our Moments
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2rem,4vw,3.5rem)",
                color: "#fff",
                letterSpacing: 1,
                marginTop: 8,
              }}
            >
              LIFE AT{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SPAKNATION
              </span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.9rem",
                marginTop: 8,
              }}
            >
              Click any photo to expand it — use the arrows or keyboard to
              browse
            </p>
          </div>
        </div>

        {/* Scrolling gallery row — each photo is clickable */}
        <div
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            padding: "0 24px 8px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              style={{
                flexShrink: 0,
                width: 280,
                height: 200,
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.07)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              {/* Hover overlay with expand hint */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(229,57,53,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0)")
                }
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="gallery-expand-icon"
                >
                  <Camera size={18} color="#E53935" />
                </div>
              </div>
            </div>
          ))}
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
                photo: "./structured.jpg",
              },
              {
                icon: Award,
                title: "Excellence-Driven",
                desc: "We hold our students to the highest standards, celebrating growth every step of the way toward mastery.",
                color: "#E53935",
                bg: "#FFF0F0",
                border: "#FFCDD2",
                photo: "./excellence.jpg",
              },
              {
                icon: Users,
                title: "Community-First",
                desc: "Families, coaches, and students form one thriving community committed to each child's journey.",
                color: "#F57F17",
                bg: "#FFF8E7",
                border: "#FFE082",
                photo: "./community.jpg",
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
                    padding: 0,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: 320,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={item.photo}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 50,
                        background: `linear-gradient(to top, ${item.bg}, transparent)`,
                      }}
                    />
                  </div>
                  <div style={{ padding: "24px 28px 32px" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                        boxShadow: `0 4px 16px ${item.color}22`,
                      }}
                    >
                      <Icon size={24} color={item.color} />
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SHOWCASE / CTA WITH VIDEO ===== */}
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
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.2)",
                border: "1.5px solid rgba(255,255,255,0.35)",
                borderRadius: 100,
                padding: "6px 18px",
                marginBottom: 20,
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
                marginBottom: 16,
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
                margin: "0 auto 48px",
              }}
            >
              Our curated Kids Showcase events are unforgettable celebrations of
              talent, discipline, and growth — moments your family will treasure
              forever.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.3)",
              maxWidth: 800,
              margin: "0 auto",
              background: "#000",
            }}
          >
            {videoOpen ? (
              <iframe
                src={`${SHOWCASE_VIDEO_URL}?autoplay=1`}
                title="Spaknation Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  border: "none",
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => setVideoOpen(true)}
              >
                <img
                  src="./ballet.jpg"
                  alt="Spaknation showcase event"
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    display: "block",
                    opacity: 0.85,
                  }}
                  /* TODO: Replace with /images/showcase-thumbnail.jpg — a screenshot of your video */
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      marginBottom: 16,
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <Play
                      size={32}
                      fill="#E53935"
                      color="#E53935"
                      style={{ marginLeft: 4 }}
                    />
                  </div>
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    Watch Our Latest Showcase
                  </span>
                </div>
              </div>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button
              onClick={() => scrollTo("contact")}
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
                e.currentTarget.style.boxShadow =
                  "0 18px 50px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)";
              }}
            >
              Register Your Child Today <ArrowRight size={18} />
            </button>
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

            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "+234 000 000 0000",
                color: "#16A34A",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "hello@spaknation.com",
                color: "#2563EB",
              },
              {
                icon: MapPin,
                label: "Find Us",
                value: "Port Harcourt, Rivers State",
                color: "#E53935",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${c.color}10`,
                      border: `1.5px solid ${c.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={c.color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#aaa",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 2,
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 28,
              padding: "40px 36px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
              border: "2px solid #F0F0F0",
            }}
          >
            {[
              {
                label: "Parent's Full Name",
                type: "text",
                placeholder: "e.g. Ada Okonkwo",
              },
              {
                label: "Email Address",
                type: "email",
                placeholder: "hello@example.com",
              },
              {
                label: "Phone Number",
                type: "tel",
                placeholder: "+234 000 000 0000",
              },
              { label: "Child's Age", type: "number", placeholder: "e.g. 8" },
            ].map((f) => (
              <div key={f.label} style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#444",
                    marginBottom: 8,
                  }}
                >
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="contact-input"
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: 12,
                    border: "2px solid #F0F0F0",
                    fontSize: "0.9rem",
                    fontFamily: "'Outfit',sans-serif",
                    background: "#FAFAFA",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
            <button
              className="btn-red"
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "0.95rem",
                marginTop: 8,
              }}
            >
              Send Enquiry <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#111", padding: "60px 0 40px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 60,
            marginBottom: 40,
          }}
          className="grid-footer"
        >
          <div>
            <div
              className="bebas"
              style={{
                fontSize: "1.8rem",
                color: "#fff",
                letterSpacing: 2,
                marginBottom: 12,
              }}
            >
              SPAK<span style={{ color: "#E53935" }}>NATION</span>
            </div>
            <p
              style={{
                color: "#555",
                fontSize: "0.875rem",
                lineHeight: 1.75,
                maxWidth: 300,
                marginBottom: 20,
              }}
            >
              Igniting the greatness in every child through world-class
              performing arts in Port Harcourt, Nigeria.
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
            maxWidth: 1200,
            margin: "0 auto",
            padding: "28px 24px 0",
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
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="#F9A825" color="#F9A825" />
            ))}
            <span style={{ fontSize: "0.75rem", color: "#555", marginLeft: 6 }}>
              Nurturing Excellence
            </span>
          </div>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
};

export default Home;
