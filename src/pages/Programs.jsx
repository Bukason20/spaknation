import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Globe,
  Laptop,
  Mic,
  Sparkles,
  Star,
} from "lucide-react";
import { Music, Users, Waves, Zap, Trophy } from "lucide-react";
import Navbar from "../components/Navbar";
import AIChatbot from "../components/aichatbot";

const ALL_PROGRAMS = [
  {
    icon: Star,
    title: "Ballet",
    tagline: "Grace, Discipline & Classical Foundation",
    desc: "Classical ballet forms the foundation of all great performers. Students develop poise, strength, coordination, and an understanding of music through structured classical technique.",
    highlights: [
      "Classical technique & posture",
      "Strength & flexibility training",
      "Musical interpretation",
      "Recital & stage performance",
    ],
    accent: "#9333EA",
    bg: "#FDF4FF",
    border: "#E9D5FF",
    iconBg: "#F3E8FF",
    tag: "",
  },
  {
    icon: Zap,
    title: "Acrobatics",
    tagline: "High-Energy Stunts & Artistry",
    desc: "High-energy tumbling, flips, and acrobatic artistry taught with world-class precision. Our signature program builds fearless performers who command any stage.",
    highlights: [
      "Tumbling & flips",
      "Acrobatic stunts",
      "Partner work",
      "Stage performance readiness",
    ],
    accent: "#E53935",
    bg: "#FFF0F0",
    border: "#FFCDD2",
    iconBg: "#FFEBEE",
    tag: "Most Popular",
  },
  {
    icon: Star,
    title: "Gymnastics",
    tagline: "Strength, Flexibility & Discipline",
    desc: "Structured gymnastics programs that build strength, flexibility, balance, and mental discipline. Students progress through levels in a safe, encouraging environment.",
    highlights: [
      "Floor routines",
      "Balance & coordination",
      "Progressive level system",
      "Competition preparation",
    ],
    accent: "#16A34A",
    bg: "#F0FFF4",
    border: "#A7F3D0",
    iconBg: "#DCFCE7",
    tag: "",
  },
  {
    icon: Zap,
    title: "Hip Hop",
    tagline: "Urban Dance & Street Performance",
    desc: "Freestyle expression meets technical urban dance styles. Students master breaking, popping, locking, and contemporary hip hop — learning to move with personality and confidence.",
    highlights: [
      "Breaking & popping",
      "Freestyle techniques",
      "Urban choreography",
      "Battle & showcase performance",
    ],
    accent: "#F57F17",
    bg: "#FFF8E7",
    border: "#FFE082",
    iconBg: "#FFF3E0",
    tag: "",
  },
  {
    icon: Music,
    title: "Music",
    tagline: "Rhythm, Theory & Musical Expression",
    desc: "Vocal training, rhythm, and musical expression woven into every performance. Students learn to feel and understand music, becoming complete performers who shine on any stage.",
    highlights: [
      "Music theory basics",
      "Rhythm & timing",
      "Instrumental introduction",
      "Ensemble performance",
    ],
    accent: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    iconBg: "#FEF3C7",
    tag: "",
  },
  {
    icon: Mic,
    title: "Singing",
    tagline: "Vocal Coaching & Performance",
    desc: "Individual and group vocal coaching designed to unlock each child's unique voice. Students develop breath control, pitch accuracy, and stage presence through guided performance training.",
    highlights: [
      "Breath control & technique",
      "Pitch & harmony training",
      "Solo & group performance",
      "Microphone & stage confidence",
    ],
    accent: "#DB2777",
    bg: "#FFF0FA",
    border: "#FBCFE8",
    iconBg: "#FCE7F3",
    tag: "",
  },
  {
    icon: Trophy,
    title: "Taekwondo",
    tagline: "Martial Arts, Discipline & Self-Defence",
    desc: "Taekwondo builds physical fitness, mental focus, and self-discipline in a structured environment. Students develop respect, coordination, and confidence through graded training.",
    highlights: [
      "Belt grading system",
      "Self-defence skills",
      "Focus & mental discipline",
      "Respect & character development",
    ],
    accent: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    iconBg: "#CFFAFE",
    tag: "",
  },
  {
    icon: Waves,
    title: "Swimming",
    tagline: "Competitive Training & Water Confidence",
    desc: "Competitive swimming training that builds champions one stroke at a time. From beginners learning water safety to advanced swimmers preparing for competition, we develop confident aquatic athletes.",
    highlights: [
      "Water safety & confidence",
      "Stroke technique development",
      "Competitive training",
      "Race preparation",
    ],
    accent: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    iconBg: "#DBEAFE",
    tag: "",
  },
  {
    icon: Users,
    title: "Public Speaking",
    tagline: "Confidence, Articulation & Leadership",
    desc: "Equipping young minds with the most powerful skill of all — communication. Students learn to speak with confidence, structure their thoughts, and command a room with clarity and charisma.",
    highlights: [
      "Speech & articulation",
      "Presentation skills",
      "Debate & storytelling",
      "Leadership communication",
    ],
    accent: "#65A30D",
    bg: "#F7FEE7",
    border: "#D9F99D",
    iconBg: "#ECFCCB",
    tag: "Leadership",
  },
];

const SCHEDULE = [
  {
    day: "Wednesday",
    time: "4:00pm – 6:00pm",
    color: "#E53935",
    bg: "#FFF0F0",
    border: "#FFCDD2",
  },
  {
    day: "Friday",
    time: "4:00pm – 6:00pm",
    color: "#F57F17",
    bg: "#FFF8E7",
    border: "#FFE082",
  },
  {
    day: "Saturday",
    time: "9:00am – 2:00pm",
    color: "#16A34A",
    bg: "#F0FFF4",
    border: "#A7F3D0",
  },
];

const ProgramsPage = () => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/");
    setTimeout(
      () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
      300,
    );
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
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        style={{
          paddingTop: 72,
          background:
            "linear-gradient(145deg,#fff9f2 0%,#f2f6ff 50%,#f0fff6 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(229,57,53,0.1) 0%,transparent 70%)",
            top: -100,
            right: -100,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px 80px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="live-badge"
            style={{ marginBottom: 28, display: "inline-flex" }}
          >
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
              All Programs · Port Harcourt
            </span>
          </div>
          <h1
            className="bebas"
            style={{
              fontSize: "clamp(2.8rem,7vw,6rem)",
              lineHeight: 0.95,
              letterSpacing: 2,
              marginBottom: 24,
            }}
          >
            <span style={{ color: "#1a1a1a" }}>NINE DISCIPLINES.</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ONE INSTITUTION.
            </span>
          </h1>
          <p
            style={{
              color: "#666",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              maxWidth: 600,
              margin: "0 auto 40px",
            }}
          >
            Every program is structured, deliberate, and designed to develop
            more than just a skill — it develops a character. Choose the path
            that ignites your child's greatness.
          </p>
          <button
            className="btn-red"
            style={{ padding: "16px 36px", fontSize: "0.95rem" }}
            onClick={handleEnroll}
          >
            Enroll Your Child Now <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ===== PROGRAMS GRID ===== */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 28,
            }}
            className="programs-grid"
          >
            {ALL_PROGRAMS.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    border: `2px solid ${prog.border}`,
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                  className="prog-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = `0 20px 50px ${prog.accent}18`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
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
                        marginBottom: 16,
                        border: `2px solid ${prog.accent}22`,
                      }}
                    >
                      <Icon size={26} color={prog.accent} />
                    </div>
                    <h3
                      className="bebas"
                      style={{
                        fontSize: "1.7rem",
                        color: "#1a1a1a",
                        letterSpacing: 1,
                        marginBottom: 4,
                      }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      style={{
                        color: prog.accent,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 12,
                      }}
                    >
                      {prog.tagline}
                    </p>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.875rem",
                        lineHeight: 1.75,
                        marginBottom: 20,
                      }}
                    >
                      {prog.desc}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {prog.highlights.map((h) => (
                        <div
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <CheckCircle
                            size={14}
                            color={prog.accent}
                            style={{ flexShrink: 0 }}
                          />
                          <span
                            style={{
                              fontSize: "0.8rem",
                              color: "#555",
                              fontWeight: 500,
                            }}
                          >
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleEnroll}
                      style={{
                        marginTop: 24,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: prog.accent,
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        background: `${prog.accent}10`,
                        border: `1.5px solid ${prog.accent}25`,
                        borderRadius: 100,
                        padding: "8px 18px",
                        cursor: "pointer",
                        fontFamily: "'Outfit',sans-serif",
                      }}
                    >
                      Enroll in {prog.title}{" "}
                      <ArrowRight size={13} color={prog.accent} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE ===== */}
      <section style={{ padding: "100px 0", background: "#FAFAFA" }}>
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
              <Calendar size={12} /> Weekly Schedule
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2.2rem,4vw,3.8rem)",
                color: "#1a1a1a",
                letterSpacing: 1,
              }}
            >
              CLASS{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#E53935,#F57F17)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SCHEDULE
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 24,
              maxWidth: 860,
              margin: "0 auto 40px",
            }}
            className="grid-3"
          >
            {SCHEDULE.map((s) => (
              <div
                key={s.day}
                style={{
                  background: s.bg,
                  borderRadius: 24,
                  padding: "36px 28px",
                  border: `2px solid ${s.border}`,
                  textAlign: "center",
                }}
              >
                <div
                  className="bebas"
                  style={{
                    fontSize: "2.2rem",
                    color: s.color,
                    letterSpacing: 1,
                    lineHeight: 1,
                  }}
                >
                  {s.day}
                </div>
                <div
                  style={{
                    width: 40,
                    height: 3,
                    background: s.color,
                    borderRadius: 2,
                    margin: "12px auto",
                  }}
                />
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                  }}
                >
                  {s.time}
                </div>
              </div>
            ))}
          </div>

          {/* Online / Summer */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              maxWidth: 640,
              margin: "0 auto",
            }}
            className="grid-2"
          >
            {[
              {
                icon: Laptop,
                label: "Online Classes Available",
                sub: "Join from anywhere in Nigeria",
                color: "#2563EB",
                bg: "#EFF6FF",
                border: "#BFDBFE",
              },
              {
                icon: Globe,
                label: "Summer Holiday School",
                sub: "Special intensive programs during holidays",
                color: "#16A34A",
                bg: "#F0FFF4",
                border: "#A7F3D0",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    background: item.bg,
                    border: `2px solid ${item.border}`,
                    borderRadius: 20,
                    padding: "24px",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 14px ${item.color}22`,
                    }}
                  >
                    <Icon size={22} color={item.color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#1a1a1a",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: "#888",
                        fontSize: "0.78rem",
                        marginTop: 4,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
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
              "radial-gradient(circle,rgba(255,255,255,0.1) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            className="bebas"
            style={{
              fontSize: "clamp(2.5rem,5vw,4.5rem)",
              color: "#fff",
              lineHeight: 0.95,
              letterSpacing: 2,
              marginBottom: 20,
            }}
          >
            READY TO START
            <br />
            YOUR CHILD'S JOURNEY?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto 40px",
            }}
          >
            Classes are held in Port Harcourt. Online classes are also
            available. Enroll today and watch your child discover their
            greatness.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleEnroll}
              style={{
                background: "#fff",
                color: "#E53935",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "16px 36px",
                borderRadius: 100,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
              }}
            >
              Enroll Now <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate("/about")}
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "16px 36px",
                borderRadius: 100,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              About Spaknation
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#1a1a1a", padding: "40px 0 28px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#E53935,#F57F17)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Sparkles size={16} color="#fff" />
            </div>
            <span
              className="bebas"
              style={{ fontSize: 22, letterSpacing: 3, color: "#fff" }}
            >
              SPAK<span style={{ color: "#F57F17" }}>NATION</span>
            </span>
          </div>
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

export default ProgramsPage;
