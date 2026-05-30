import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Mic,
  Sparkles,
  Star,
  Play,
  X,
} from "lucide-react";
import { Music, Users, Waves, Zap, Trophy } from "lucide-react";
import Navbar from "../components/Navbar";
import AIChatbot from "../components/aichatbot";

// ─── REPLACE THESE IMAGE URLS WITH YOUR FACEBOOK PHOTOS ─────────────────────
// Each image should show kids actually doing that discipline.
// Ideal size: landscape, at least 600×350px.

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
    image:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&q=80",
    // TODO: Replace with a photo of your ballet students from Facebook
    videoUrl: "", // Add your Facebook/YouTube video URL here
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
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80",
    // TODO: Replace with your acrobatics students mid-flip from Facebook
    videoUrl: "",
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
    image:
      "https://images.unsplash.com/photo-1545959570-a94084071b5d?w=600&q=80",
    // TODO: Replace with gymnastics training photo from Facebook
    videoUrl: "",
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
    image:
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=600&q=80",
    // TODO: Replace with hip hop class or performance photo from Facebook
    videoUrl: "",
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
    image:
      "https://images.unsplash.com/photo-1576758454260-00aa3e6efdf6?w=600&q=80",
    // TODO: Replace with music class photo from Facebook
    videoUrl: "",
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
    image:
      "https://images.unsplash.com/photo-1607081692251-c5f07c4e8e5d?w=600&q=80",
    // TODO: Replace with singing/vocal coaching photo from Facebook
    videoUrl: "",
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
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    // TODO: Replace with taekwondo training photo from Facebook
    videoUrl: "",
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
    image:
      "https://images.unsplash.com/photo-1472261604518-2b8e9d0a5b5e?w=600&q=80",
    // TODO: Replace with swimming training photo from Facebook
    videoUrl: "",
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
    image:
      "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=600&q=80",
    // TODO: Replace with public speaking or presentation class photo from Facebook
    videoUrl: "",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

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
  const [activeVideo, setActiveVideo] = useState(null); // stores program title of open video

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

  const openVideo = (prog) => {
    if (prog.videoUrl) {
      setActiveVideo(prog);
    } else {
      // If no video yet, scroll to enroll
      handleEnroll();
    }
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

      {/* ===== VIDEO MODAL ===== */}
      {activeVideo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 860,
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 2,
                background: "rgba(0,0,0,0.6)",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} color="#fff" />
            </button>
            <iframe
              src={`${activeVideo.videoUrl}?autoplay=1`}
              title={`${activeVideo.title} class at Spaknation`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                aspectRatio: "16/9",
                border: "none",
                display: "block",
              }}
            />
          </div>
        </div>
      )}

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
            style={{ marginBottom: 24, display: "inline-flex" }}
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
              9 Disciplines · All Ages Welcome
            </span>
          </div>

          <h1
            className="bebas"
            style={{
              fontSize: "clamp(3rem,8vw,7rem)",
              lineHeight: 0.9,
              letterSpacing: 2,
              marginBottom: 24,
            }}
          >
            <span style={{ color: "#1a1a1a" }}>OUR</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PROGRAMS
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
                    display: "flex",
                    flexDirection: "column",
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
                  {/* ── PROGRAM IMAGE BANNER ── */}
                  <div
                    style={{
                      position: "relative",
                      height: 200,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={prog.image}
                      alt={`${prog.title} program at Spaknation`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                      /* TODO: Replace prog.image with your actual Facebook photo for this program */
                    />
                    {/* Accent bar at very top */}
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
                    {/* Gradient overlay at bottom */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 80,
                        background:
                          "linear-gradient(to top,rgba(0,0,0,0.55),transparent)",
                      }}
                    />

                    {/* Tag badge */}
                    {prog.tag && (
                      <div
                        style={{
                          position: "absolute",
                          top: 14,
                          right: 14,
                          fontSize: "0.62rem",
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: prog.accent,
                          borderRadius: 100,
                          padding: "4px 12px",
                          boxShadow: `0 4px 12px ${prog.accent}55`,
                        }}
                      >
                        {prog.tag}
                      </div>
                    )}

                    {/* Watch a class button (bottom of image) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openVideo(prog);
                      }}
                      style={{
                        position: "absolute",
                        bottom: 14,
                        left: 14,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        borderRadius: 100,
                        padding: "6px 14px",
                        cursor: "pointer",
                        color: "#fff",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        fontFamily: "'Outfit',sans-serif",
                        letterSpacing: "0.05em",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,255,255,0.25)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,255,255,0.15)")
                      }
                    >
                      <Play size={11} fill="#fff" color="#fff" />
                      Watch a Class
                      {/* TODO: Add videoUrl to this program in ALL_PROGRAMS to enable playback */}
                    </button>
                  </div>

                  {/* ── Card content ── */}
                  <div
                    style={{
                      padding: "24px 28px 32px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
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
                          lineHeight: 1,
                        }}
                      >
                        {prog.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontSize: "0.72rem",
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
                        flex: 1,
                      }}
                    >
                      {prog.desc}
                    </p>

                    <div style={{ marginBottom: 20 }}>
                      {prog.highlights.map((h) => (
                        <div
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 6,
                          }}
                        >
                          <CheckCircle size={13} color={prog.accent} />
                          <span style={{ fontSize: "0.8rem", color: "#555" }}>
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleEnroll}
                      style={{
                        width: "100%",
                        padding: "12px",
                        background: `${prog.accent}12`,
                        border: `2px solid ${prog.accent}30`,
                        borderRadius: 12,
                        color: prog.accent,
                        fontFamily: "'Outfit',sans-serif",
                        fontWeight: 800,
                        fontSize: "0.82rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        transition: "background 0.2s",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = `${prog.accent}20`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = `${prog.accent}12`)
                      }
                    >
                      Enroll in {prog.title} <ArrowRight size={14} />
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
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#444",
                    marginTop: 8,
                  }}
                >
                  {s.time}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              className="btn-red"
              style={{ padding: "16px 40px", fontSize: "0.95rem" }}
              onClick={handleEnroll}
            >
              Book a Free Trial Class <ArrowRight size={16} />
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
            padding: "0 24px 40px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 60,
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
              }}
            >
              Igniting the greatness in every child through world-class
              performing arts in Port Harcourt, Nigeria.
            </p>
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
            maxWidth: 1200,
            margin: "0 auto",
            padding: "24px 24px 0",
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

export default ProgramsPage;
