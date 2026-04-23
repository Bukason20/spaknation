import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Heart,
  MapPin,
  Mic,
  Shield,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import AIChatbot from "../components/aichatbot";

const SPAKNATION_METHOD = [
  {
    letter: "S",
    word: "Structure",
    desc: "Clear discipline, routines, and boundaries that shape behaviour and build lasting habits.",
  },
  {
    letter: "P",
    word: "Presence",
    desc: "Stage confidence, posture, and voice projection — owning every room they walk into.",
  },
  {
    letter: "A",
    word: "Artistry",
    desc: "Technical dance skill combined with creative expression that is uniquely theirs.",
  },
  {
    letter: "K",
    word: "Knowledge",
    desc: "Understanding rhythm, performance psychology, and deep self-awareness.",
  },
  {
    letter: "N",
    word: "Nurture",
    desc: "A safe environment built on emotional intelligence and genuine care.",
  },
  {
    letter: "A",
    word: "Accountability",
    desc: "Character building and responsibility training — owning your growth.",
  },
  {
    letter: "T",
    word: "Transformation",
    desc: "Measurable, visible growth that parents and students can see and feel.",
  },
  {
    letter: "I",
    word: "Identity",
    desc: "Helping each child discover who they truly are beyond the stage.",
  },
  {
    letter: "O",
    word: "Opportunity",
    desc: "Stage exposure, showcases, and access to elite performance platforms.",
  },
  {
    letter: "N",
    word: "Next-Level Leadership",
    desc: "Training beyond talent — building future leaders prepared for the world.",
  },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    text: "Founded Spaknation — a premier performing arts institution for kids in Port Harcourt",
    color: "#E53935",
  },
  {
    icon: Mic,
    text: "Featured in Burna Boy's music video 'Higher' (2024) showcasing Spaknation Kids",
    color: "#F57F17",
  },
  {
    icon: Users,
    text: "Choreographed for The Nigeria Police Games with over 2,000 children",
    color: "#16A34A",
  },
  {
    icon: Award,
    text: "Worked with the National Sports Festival Committee as lead choreographer",
    color: "#2563EB",
  },
  {
    icon: Star,
    text: "Successfully participated in the Shell Club Children Dance Competition",
    color: "#9333EA",
  },
  {
    icon: CheckCircle,
    text: "Collaborates with multiple private schools as dance teacher and choreographer",
    color: "#D97706",
  },
  {
    icon: Heart,
    text: "200,000+ TikTok followers & 50,000+ Facebook followers — Nigeria's top acrobatic kids coach",
    color: "#DB2777",
  },
];

const About = () => {
  const navigate = useNavigate();

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
            "linear-gradient(145deg,#fff9f2 0%,#fff0f5 40%,#f2f0ff 100%)",
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
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(22,163,74,0.08) 0%,transparent 70%)",
            bottom: -50,
            left: -50,
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
              Our Story
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
            <span style={{ color: "#1a1a1a" }}>NOT A DANCE CLASS.</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#E53935,#F57F17)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AN INSTITUTION.
            </span>
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "1.1rem",
              lineHeight: 1.9,
              maxWidth: 680,
              margin: "0 auto 40px",
            }}
          >
            Spaknation was founded on one conviction:{" "}
            <strong style={{ color: "#1a1a1a" }}>
              children deserve mentorship, not just exposure.
            </strong>{" "}
            Built by a father of three who understands the weight of trust,
            Spaknation is a structured, safe environment where potential is
            nurtured with discipline, integrity, and excellence.
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
              className="btn-red"
              style={{ padding: "16px 32px", fontSize: "0.95rem" }}
              onClick={() => navigate("/programs")}
            >
              Explore Programs <ArrowRight size={16} />
            </button>
            <button
              className="btn-outline"
              style={{ padding: "16px 32px", fontSize: "0.95rem" }}
              onClick={() => {
                navigate("/");
                setTimeout(
                  () =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  300,
                );
              }}
            >
              Enroll Your Child
            </button>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section
        style={{
          padding: "24px 0 0",
          background: "linear-gradient(90deg,#E53935,#F57F17,#F9A825)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "Elite Creative Development Academy",
            "Character & Confidence Institution",
            "Performance & Leadership Grooming Hub",
          ].map((p) => (
            <div
              key={p}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.6)",
                }}
              />
              <span
                className="bebas"
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  letterSpacing: 2,
                  whiteSpace: "nowrap",
                }}
              >
                {p}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SPAKNATION METHOD ===== */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div
              className="section-tag"
              style={{
                background: "#EFF6FF",
                color: "#2563EB",
                borderColor: "#BFDBFE",
              }}
            >
              <Target size={12} /> Our Framework
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2.2rem,4vw,3.8rem)",
                color: "#1a1a1a",
                letterSpacing: 1,
              }}
            >
              THE{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#E53935,#F57F17)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SPAKNATION METHOD™
              </span>
            </h2>
            <p
              style={{
                color: "#888",
                fontSize: "1rem",
                marginTop: 12,
                maxWidth: 520,
                margin: "12px auto 0",
              }}
            >
              A deliberate, 10-pillar framework that transforms children into
              confident, disciplined, and stage-ready young leaders.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 16,
            }}
            className="grid-2-method"
          >
            {SPAKNATION_METHOD.map((item, i) => {
              const colors = [
                "#E53935",
                "#F57F17",
                "#16A34A",
                "#2563EB",
                "#9333EA",
                "#D97706",
                "#DB2777",
                "#0891B2",
                "#65A30D",
                "#EA580C",
              ];
              const color = colors[i % colors.length];
              return (
                <div
                  key={item.letter + i}
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    background: "#FAFAFA",
                    borderRadius: 20,
                    padding: "24px",
                    border: "2px solid #F0F0F0",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: `${color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: `2px solid ${color}25`,
                    }}
                  >
                    <span
                      className="bebas"
                      style={{ fontSize: "1.8rem", color, lineHeight: 1 }}
                    >
                      {item.letter}
                    </span>
                  </div>
                  <div>
                    <div
                      className="bebas"
                      style={{
                        fontSize: "1.3rem",
                        color: "#1a1a1a",
                        letterSpacing: 1,
                        lineHeight: 1.1,
                      }}
                    >
                      {item.word}
                    </div>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.85rem",
                        lineHeight: 1.7,
                        marginTop: 6,
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

      {/* ===== FRANK ROBERT ===== */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* Visual Card */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "linear-gradient(135deg,#FFF0F0,#FFF8E7)",
                  borderRadius: 32,
                  padding: "48px 40px",
                  border: "2px solid #FFE0D0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 180,
                    height: 180,
                    background:
                      "radial-gradient(circle,rgba(229,57,53,0.08) 0%,transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <div style={{ position: "relative", zIndex: 2 }}>
                  {/* Avatar */}
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#E53935,#F57F17)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      boxShadow: "0 12px 40px rgba(229,57,53,0.35)",
                    }}
                  >
                    <span
                      className="bebas"
                      style={{
                        fontSize: "2.5rem",
                        color: "#fff",
                        letterSpacing: 2,
                      }}
                    >
                      FR
                    </span>
                  </div>

                  <div
                    className="bebas"
                    style={{
                      fontSize: "2.5rem",
                      color: "#1a1a1a",
                      letterSpacing: 2,
                      lineHeight: 1,
                    }}
                  >
                    FRANK
                    <br />
                    ROBERT
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#E53935",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginTop: 8,
                      marginBottom: 20,
                    }}
                  >
                    Founder & Creative Director
                  </div>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      marginBottom: 24,
                    }}
                  >
                    Happily married to Lilian Robert, his wife and Spaknation
                    partner. Together, they've built one of Nigeria's most
                    respected performing arts institutions for children.
                  </p>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {[
                      "25+ Years Experience",
                      "Father of Three",
                      "Nigeria's Top Kids Coach",
                    ].map((b) => (
                      <span
                        key={b}
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#E53935",
                          background: "#FFF0F0",
                          borderRadius: 100,
                          padding: "5px 14px",
                          border: "1.5px solid #FFCDD2",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                      marginTop: 28,
                    }}
                  >
                    {[
                      { n: "25+", l: "Years of Experience", color: "#E53935" },
                      { n: "500+", l: "Children Trained", color: "#F57F17" },
                      { n: "200K+", l: "TikTok Followers", color: "#16A34A" },
                      {
                        n: "2,000+",
                        l: "Kids at Police Games",
                        color: "#2563EB",
                      },
                    ].map((s) => (
                      <div
                        key={s.l}
                        style={{
                          background: "#fff",
                          borderRadius: 16,
                          padding: "16px",
                          border: "2px solid #F5F5F5",
                        }}
                      >
                        <div
                          className="bebas"
                          style={{
                            fontSize: "1.8rem",
                            color: s.color,
                            lineHeight: 1,
                          }}
                        >
                          {s.n}
                        </div>
                        <div
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: "#888",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            marginTop: 4,
                            lineHeight: 1.3,
                          }}
                        >
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  background: "linear-gradient(135deg,#E53935,#F57F17)",
                  borderRadius: 20,
                  padding: "12px 20px",
                  boxShadow: "0 8px 30px rgba(229,57,53,0.35)",
                  zIndex: 10,
                }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="#fff" color="#fff" />
                  ))}
                </div>
                <div
                  className="bebas"
                  style={{
                    fontSize: "0.85rem",
                    color: "#fff",
                    letterSpacing: 1,
                  }}
                >
                  TOP RATED
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div
                className="section-tag"
                style={{
                  background: "#FFF0F0",
                  color: "#E53935",
                  borderColor: "#FFCDD2",
                }}
              >
                <Sparkles size={12} /> Meet the Founder
              </div>
              <h2
                className="bebas"
                style={{
                  fontSize: "clamp(2.2rem,4vw,3.5rem)",
                  color: "#1a1a1a",
                  lineHeight: 0.95,
                  marginBottom: 20,
                  letterSpacing: 1,
                }}
              >
                A CHOREOGRAPHER,
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg,#E53935,#F57F17)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  A FATHER, A MENTOR
                </span>
              </h2>

              <p
                style={{
                  color: "#555",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  marginBottom: 16,
                }}
              >
                Frank Robert is a highly acclaimed dance instructor,
                choreographer, and creative director with over{" "}
                <strong>25 years of experience</strong> in nurturing the
                artistic talents of children. As the founder of Spaknation,
                Frank has established himself as a leading figure in Nigeria's
                dance entertainment industry.
              </p>
              <p
                style={{
                  color: "#555",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  marginBottom: 16,
                }}
              >
                With a unique style in{" "}
                <strong>acrobatic and creative dance stunts</strong>, Frank's
                work has inspired young performers across Nigeria. Under his
                creative direction, Spaknation has become synonymous with
                high-quality performances and artistic excellence — showcasing
                the talents of young performers from Port Harcourt and beyond.
              </p>
              <p
                style={{
                  color: "#555",
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  marginBottom: 32,
                }}
              >
                As a father of three, Frank understands the weight of trust when
                parents entrust their children to an institution. That
                understanding drives the culture of zero compromise on child
                safety and the deeply intentional mentorship system at
                Spaknation.
              </p>

              <div
                style={{
                  background: "#FAFAFA",
                  borderRadius: 20,
                  padding: "24px",
                  border: "2px solid #F0F0F0",
                  marginBottom: 32,
                }}
              >
                <div
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 4,
                      borderRadius: 4,
                      background: "linear-gradient(180deg,#E53935,#F57F17)",
                      alignSelf: "stretch",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        color: "#1a1a1a",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                        fontStyle: "italic",
                        fontWeight: 500,
                      }}
                    >
                      "Children deserve mentorship, not just exposure. Talent
                      without structure is fragile. Confidence without character
                      is incomplete."
                    </p>
                    <p
                      style={{
                        color: "#888",
                        fontSize: "0.8rem",
                        marginTop: 8,
                        fontWeight: 600,
                      }}
                    >
                      — Frank Robert, Founder of Spaknation
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <MapPin size={16} color="#E53935" />
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#555",
                    }}
                  >
                    Port Harcourt, Rivers State, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section style={{ padding: "100px 0", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              className="section-tag"
              style={{
                background: "#FFFBEB",
                color: "#D97706",
                borderColor: "#FDE68A",
              }}
            >
              <Trophy size={12} /> Track Record
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(2.2rem,4vw,3.8rem)",
                color: "#1a1a1a",
                letterSpacing: 1,
              }}
            >
              A LEGACY OF{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#E53935,#F57F17)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EXCELLENCE
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 20,
            }}
            className="grid-2-achievements"
          >
            {ACHIEVEMENTS.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "24px 28px",
                    border: "2px solid #F0F0F0",
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: `${a.color}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      border: `2px solid ${a.color}22`,
                    }}
                  >
                    <Icon size={22} color={a.color} />
                  </div>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      margin: 0,
                      paddingTop: 2,
                    }}
                  >
                    {a.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LILIAN & FAMILY ===== */}
      <section style={{ padding: "80px 0", background: "#FAFAFA" }}>
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <div
            className="section-tag"
            style={{
              background: "#FFF0FA",
              color: "#DB2777",
              borderColor: "#FBCFE8",
            }}
          >
            <Heart size={12} /> Family at the Core
          </div>
          <h2
            className="bebas"
            style={{
              fontSize: "clamp(2rem,4vw,3.2rem)",
              color: "#1a1a1a",
              letterSpacing: 1,
              marginBottom: 20,
            }}
          >
            BUILT ON FAMILY,
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#DB2777,#E53935)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DRIVEN BY PURPOSE
            </span>
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "1rem",
              lineHeight: 1.85,
              maxWidth: 640,
              margin: "0 auto 40px",
            }}
          >
            Frank Robert is happily married to his wife,{" "}
            <strong style={{ color: "#1a1a1a" }}>Lilian Robert</strong>, who is
            also a partner of Spaknation. Together, as parents themselves, they
            understand the responsibility and privilege of shaping young lives.
            Their family values — safety, love, and excellence — are embedded in
            every aspect of the Spaknation experience.
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: Shield,
                label: "Zero Compromise on Child Safety",
                color: "#16A34A",
                bg: "#F0FFF4",
              },
              {
                icon: Heart,
                label: "Family Values at the Core",
                color: "#DB2777",
                bg: "#FFF0FA",
              },
              {
                icon: Users,
                label: "Community of Trust",
                color: "#2563EB",
                bg: "#EFF6FF",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    background: item.bg,
                    borderRadius: 16,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    border: `2px solid ${item.color}22`,
                  }}
                >
                  <Icon size={20} color={item.color} />
                  <span
                    style={{
                      fontSize: "0.82rem",
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
            READY TO JOIN
            <br />
            THE INSTITUTION?
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
            Give your child the structure, mentorship, and stage they deserve.
            Spaknation is enrolling now.
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
              onClick={() => {
                navigate("/");
                setTimeout(
                  () =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  300,
                );
              }}
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
              onClick={() => navigate("/programs")}
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
              View Programs
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
            © 2025 Spaknation. All rights reserved. Port Harcourt, Rivers State,
            Nigeria.
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

export default About;
