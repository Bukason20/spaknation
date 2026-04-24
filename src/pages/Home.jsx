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
} from "lucide-react";
import Programs from "../data/programs";
import AIChatbot from "../components/aichatbot";
import Stats from "../data/stats";
import Values from "../data/values";
import Navbar from "../components/Navbar"; // ✅ import shared Navbar

const Home = () => {
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
      <Navbar /> {/* ✅ replaced inline nav with shared component */}
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
            {Values.map((v) => {
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
                  value: "Port Harcourt, Nigeria",
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
                  {Programs.map((p) => (
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
      {/* ===== AI CHATBOT ===== */}
      <AIChatbot />
    </div>
  );
};

export default Home;
