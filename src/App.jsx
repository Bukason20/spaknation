import { useState, useEffect, useRef } from "react";
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
    color: "from-red-600 to-orange-500",
    accent: "#ef4444",
  },
  {
    icon: Music,
    title: "Music",
    desc: "Vocal training, rhythm, and musical expression woven into every performance.",
    color: "from-orange-500 to-yellow-400",
    accent: "#f97316",
  },
  {
    icon: Star,
    title: "Gymnastics",
    desc: "Structured gymnastics programs that build strength, flexibility and discipline.",
    color: "from-green-500 to-emerald-400",
    accent: "#22c55e",
  },
  {
    icon: Trophy,
    title: "Live Stage Performances",
    desc: "Professional live showcases where students shine under the spotlight.",
    color: "from-yellow-500 to-orange-400",
    accent: "#eab308",
  },
  {
    icon: Waves,
    title: "Swimming Competition",
    desc: "Competitive swimming training that builds champions one stroke at a time.",
    color: "from-blue-500 to-cyan-400",
    accent: "#3b82f6",
  },
  {
    icon: Users,
    title: "School Partnership",
    desc: "Collaborating with schools to bring performing arts excellence to every student.",
    color: "from-purple-500 to-pink-400",
    accent: "#a855f7",
  },
];

const VALUES = [
  { icon: Shield, label: "Discipline" },
  { icon: Heart, label: "Integrity" },
  { icon: Award, label: "Excellence" },
  { icon: Target, label: "Purpose" },
];

const STATS = [
  { number: "500+", label: "Young Champions" },
  { number: "12+", label: "Programs Offered" },
  { number: "8+", label: "Years of Excellence" },
  { number: "50+", label: "School Partners" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; }
        
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        .hero-gradient {
          background: radial-gradient(ellipse 80% 60% at 60% 40%, rgba(239,68,68,0.25) 0%, rgba(249,115,22,0.12) 40%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 10% 80%, rgba(34,197,94,0.15) 0%, transparent 60%),
                      #0a0a0a;
        }
        
        .text-stroke {
          -webkit-text-stroke: 2px rgba(255,255,255,0.15);
          color: transparent;
        }
        
        .card-glow:hover {
          box-shadow: 0 0 40px rgba(239,68,68,0.3);
        }
        
        .nav-glass {
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        
        .shine-line {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: shine 3s ease-in-out infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .float-anim {
          animation: floatUp 6s ease-in-out infinite;
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        .pulse-ring {
          animation: pulseRing 2.5s ease-out infinite;
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        
        .tag-slide {
          animation: tagSlide 20s linear infinite;
        }
        @keyframes tagSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .section-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .program-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .program-card:hover {
          transform: translateY(-8px);
        }
        
        .contact-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          transition: border-color 0.3s, background 0.3s;
        }
        .contact-input:focus {
          outline: none;
          border-color: rgba(239,68,68,0.6);
          background: rgba(239,68,68,0.04);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #dc2626, #ea580c);
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(220,38,38,0.5);
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.4s;
        }
        .btn-primary:hover::after { left: 150%; }
        
        .grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .diagonal-cut {
          clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
        }
        
        .diagonal-cut-top {
          clip-path: polygon(0 12%, 100% 0, 100% 100%, 0 100%);
        }
        
        @media (max-width: 768px) {
          .diagonal-cut { clip-path: none; }
          .diagonal-cut-top { clip-path: none; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-red-500 pulse-ring" />
            </div>
            <span className="font-bebas text-2xl tracking-widest text-white">
              SPAK<span className="text-red-500">NATION</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="font-outfit text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide uppercase relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("Contact")}
            className="hidden md:block btn-primary font-outfit text-sm font-semibold px-6 py-2.5 rounded-full text-white tracking-wide"
          >
            Enroll Now
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden nav-glass border-t border-white/5">
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="font-outfit text-base text-gray-200 hover:text-red-400 transition-colors uppercase tracking-wide w-full text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo("Contact")}
                  className="btn-primary w-full py-3 rounded-full font-outfit font-semibold text-white text-sm tracking-wide"
                >
                  Enroll Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ============ HERO ============ */}
      <section
        id="home"
        className="hero-gradient min-h-screen flex items-center relative overflow-hidden grid-pattern"
      >
        {/* BG decorative circles */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full border border-white/5 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full border border-red-600/10 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-500/5 -translate-x-1/2 translate-y-1/3 pointer-events-none" />

        {/* Big ghost text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-bebas text-[18vw] text-stroke leading-none whitespace-nowrap opacity-40">
            SPAKNATION
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="font-outfit text-xs text-red-400 uppercase tracking-widest font-semibold">
                  Nurturing Potential Since Day One
                </span>
              </div>

              <h1 className="font-bebas leading-none mb-6">
                <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white tracking-wide">
                  WHERE
                </span>
                <span
                  className="block text-[clamp(3.5rem,8vw,7rem)] text-stroke-custom"
                  style={{
                    WebkitTextStroke: "2px #ef4444",
                    color: "transparent",
                  }}
                >
                  POTENTIAL
                </span>
                <span className="block text-[clamp(3.5rem,8vw,7rem)] text-white tracking-wide">
                  BECOMES
                </span>
                <span className="block text-[clamp(3.5rem,8vw,7rem)] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
                  GREATNESS
                </span>
              </h1>

              <p className="font-outfit text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                A safe, structured environment where discipline, integrity and
                excellence shape tomorrow's champions across acrobatics, music,
                gymnastics, and more.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("Programs")}
                  className="btn-primary font-outfit font-semibold px-8 py-4 rounded-full text-white flex items-center gap-2"
                >
                  Explore Programs <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("About")}
                  className="font-outfit font-semibold px-8 py-4 rounded-full text-white border border-white/15 hover:border-white/40 transition-colors flex items-center gap-2"
                >
                  <Play size={14} fill="white" /> Our Story
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-bebas text-3xl text-red-400 tracking-wide">
                      {s.number}
                    </div>
                    <div className="font-outfit text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual panel */}
            <div className="relative hidden md:block">
              <div className="relative float-anim">
                {/* Main circle graphic */}
                <div className="w-[420px] h-[420px] mx-auto rounded-full border-2 border-red-500/20 flex items-center justify-center relative">
                  <div className="w-[340px] h-[340px] rounded-full border border-orange-500/15 flex items-center justify-center relative">
                    <div className="w-[260px] h-[260px] rounded-full bg-gradient-to-br from-red-600/20 to-orange-500/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-bebas text-7xl text-white/90 leading-none tracking-wider">
                          SPAK
                        </div>
                        <div className="font-bebas text-4xl text-red-500 tracking-widest">
                          NATION
                        </div>
                        <div className="flex justify-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              className="text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Orbiting icons */}
                    {PROGRAMS.slice(0, 6).map((p, i) => {
                      const angle = (i * 360) / 6;
                      const rad = (angle * Math.PI) / 180;
                      const r = 165;
                      const x = r * Math.cos(rad - Math.PI / 2);
                      const y = r * Math.sin(rad - Math.PI / 2);
                      const Icon = p.icon;
                      return (
                        <div
                          key={i}
                          className="absolute w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            left: `calc(50% + ${x}px - 24px)`,
                            top: `calc(50% + ${y}px - 24px)`,
                            background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}15)`,
                            border: `1px solid ${p.accent}44`,
                          }}
                        >
                          <Icon size={18} style={{ color: p.accent }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-outfit text-xs text-gray-600 uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={16} className="text-gray-600" />
        </div>
      </section>

      {/* ============ MARQUEE STRIP ============ */}
      <div className="bg-red-600 py-4 overflow-hidden">
        <div className="flex gap-12 tag-slide whitespace-nowrap">
          {[...Array(4)].flatMap(() =>
            [
              "Acrobatics",
              "Music",
              "Gymnastics",
              "Live Performances",
              "Swimming",
              "School Partners",
              "Kids Showcase",
            ].map((t, i) => (
              <span
                key={t + i}
                className="font-bebas text-xl tracking-widest text-white flex items-center gap-4"
              >
                {t}{" "}
                <span className="w-2 h-2 bg-white/40 rounded-full inline-block" />
              </span>
            )),
          )}
        </div>
      </div>

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-green-500/5 rounded-full translate-x-1/2 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: visual block */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-1 border border-white/5">
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1a0a0a, #0a0a0a)",
                  }}
                >
                  <div className="p-12 flex flex-col gap-6">
                    {VALUES.map((v) => {
                      const Icon = v.icon;
                      return (
                        <div
                          key={v.label}
                          className="flex items-center gap-5 group"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600/20 to-orange-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/50 transition-colors">
                            <Icon size={22} className="text-red-400" />
                          </div>
                          <div>
                            <div className="font-bebas text-2xl text-white tracking-wider">
                              {v.label}
                            </div>
                            <div className="font-outfit text-sm text-gray-500">
                              A core pillar of our philosophy
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl p-5 shadow-2xl">
                <div className="font-bebas text-4xl text-white leading-none">
                  8+
                </div>
                <div className="font-outfit text-xs text-white/80 uppercase tracking-wider">
                  Years Strong
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-full px-4 py-1.5 mb-6">
                <span className="font-outfit text-xs text-green-400 uppercase tracking-widest font-semibold">
                  Who We Are
                </span>
              </div>

              <h2 className="font-bebas text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-white mb-6 tracking-wide">
                A SAFE SPACE WHERE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  CHAMPIONS
                </span>
                <br />
                ARE FORGED
              </h2>

              <p className="font-outfit text-gray-400 text-base leading-relaxed mb-6">
                Spaknation is more than a performing arts academy — it's a
                movement. We believe every child carries untapped potential, and
                our mission is to ignite it through structured programs in
                acrobatics, music, gymnastics, and the performing arts.
              </p>
              <p className="font-outfit text-gray-400 text-base leading-relaxed mb-10">
                With professional coaches, curated showcases, and school
                partnerships, we build not just skills but character — nurturing
                the whole child through discipline, integrity, and a relentless
                pursuit of excellence.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Safe Environment",
                  "Expert Coaches",
                  "School-Ready Programs",
                  "Performance Training",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-outfit text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section
        id="programs"
        className="py-28 relative"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)",
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-1.5 mb-6">
              <span className="font-outfit text-xs text-orange-400 uppercase tracking-widest font-semibold">
                What We Offer
              </span>
            </div>
            <h2 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] text-white tracking-wide leading-none">
              PROGRAMS THAT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-red-600">
                TRANSFORM LIVES
              </span>
            </h2>
            <p className="font-outfit text-gray-400 text-base mt-4 max-w-xl mx-auto">
              Seven world-class disciplines. One extraordinary journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="program-card rounded-2xl border border-white/5 overflow-hidden cursor-pointer group"
                  style={{
                    background: "linear-gradient(145deg, #111, #0d0d0d)",
                  }}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${prog.color}`} />
                  <div className="p-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                      style={{
                        background: `${prog.accent}18`,
                        border: `1px solid ${prog.accent}30`,
                      }}
                    >
                      <Icon size={24} style={{ color: prog.accent }} />
                    </div>
                    <h3 className="font-bebas text-2xl text-white tracking-wide mb-3">
                      {prog.title}
                    </h3>
                    <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                      {prog.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="font-outfit text-xs font-semibold uppercase tracking-wider"
                        style={{ color: prog.accent }}
                      >
                        Learn More
                      </span>
                      <ArrowRight size={12} style={{ color: prog.accent }} />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 7th card — Kids Showcase */}
            <div
              className="program-card rounded-2xl overflow-hidden cursor-pointer group sm:col-span-2 lg:col-span-1"
              style={{
                background: "linear-gradient(135deg, #1a0505, #0d0d0d)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <div className="h-1.5 bg-gradient-to-r from-red-600 to-pink-500" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-red-600/15 border border-red-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={24} className="text-red-400" />
                </div>
                <h3 className="font-bebas text-2xl text-white tracking-wide mb-3">
                  Curated Kids Showcase
                </h3>
                <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                  Professionally curated performances that put your child's hard
                  work in the spotlight for family and community to witness.
                </p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-red-400">
                    Learn More
                  </span>
                  <ArrowRight size={12} className="text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SHOWCASE / CTA BANNER ============ */}
      <section
        id="showcase"
        className="relative py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #7f1d1d 0%, #1c1917 40%, #052e16 100%)",
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-10" />
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="font-outfit text-xs text-gray-300 uppercase tracking-widest font-semibold">
              Season Showcase
            </span>
          </div>

          <h2 className="font-bebas text-[clamp(3rem,7vw,6rem)] text-white leading-none tracking-wide mb-6">
            WATCH YOUR CHILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
              BECOME A STAR
            </span>
          </h2>

          <p className="font-outfit text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Our curated Kids Showcase events are unforgettable celebrations of
            talent, discipline, and growth — moments your family will treasure
            forever.
          </p>

          <button
            onClick={() => scrollTo("Contact")}
            className="btn-primary font-outfit font-semibold px-10 py-5 rounded-full text-white text-base inline-flex items-center gap-3"
          >
            Register Your Child Today <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ============ WHY SPAKNATION ============ */}
      <section className="py-28 relative" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-wide leading-none">
              THE SPAKNATION
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                DIFFERENCE
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              {
                icon: Shield,
                title: "Safe & Structured",
                desc: "Every program is designed with child safety as the top priority, backed by qualified coaches and clear frameworks.",
                color: "#22c55e",
              },
              {
                icon: Award,
                title: "Excellence-Driven",
                desc: "We hold our students to the highest standards, celebrating growth every step of the way toward mastery.",
                color: "#ef4444",
              },
              {
                icon: Users,
                title: "Community-First",
                desc: "Families, coaches, and students form one thriving community committed to each child's journey.",
                color: "#f97316",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#0d0d0d] p-10 flex flex-col gap-4 group hover:bg-[#111] transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bebas text-2xl text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="py-28 relative overflow-hidden"
        style={{ background: "#0d0d0d" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full -translate-x-1/2 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/25 rounded-full px-4 py-1.5 mb-6">
                <span className="font-outfit text-xs text-red-400 uppercase tracking-widest font-semibold">
                  Get In Touch
                </span>
              </div>

              <h2 className="font-bebas text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none tracking-wide mb-6">
                READY TO BEGIN
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  YOUR JOURNEY?
                </span>
              </h2>

              <p className="font-outfit text-gray-400 text-base leading-relaxed mb-12">
                Whether you have questions about enrollment, our programs, or
                school partnerships — we're here to help your child take their
                first step toward greatness.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  { icon: Phone, label: "Call Us", value: "+234 000 000 0000" },
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "hello@spaknation.com",
                  },
                  { icon: MapPin, label: "Visit Us", value: "Lagos, Nigeria" },
                ].map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-red-400" />
                      </div>
                      <div>
                        <div className="font-outfit text-xs text-gray-500 uppercase tracking-wider">
                          {info.label}
                        </div>
                        <div className="font-outfit text-white text-sm font-medium mt-0.5">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="rounded-3xl border border-white/5 p-8"
              style={{ background: "linear-gradient(145deg, #111, #0d0d0d)" }}
            >
              <h3 className="font-bebas text-3xl text-white tracking-wide mb-8">
                SEND US A MESSAGE
              </h3>
              <div className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-outfit text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="contact-input w-full rounded-xl px-4 py-3.5 font-outfit text-sm text-white placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="font-outfit text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="contact-input w-full rounded-xl px-4 py-3.5 font-outfit text-sm text-white placeholder-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-outfit text-xs text-gray-500 uppercase tracking-wider block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="contact-input w-full rounded-xl px-4 py-3.5 font-outfit text-sm text-white placeholder-gray-600"
                  />
                </div>
                <div>
                  <label className="font-outfit text-xs text-gray-500 uppercase tracking-wider block mb-2">
                    Program Interest
                  </label>
                  <select className="contact-input w-full rounded-xl px-4 py-3.5 font-outfit text-sm text-gray-300 appearance-none cursor-pointer">
                    <option value="" className="bg-gray-900">
                      Select a program...
                    </option>
                    <option value="acrobatics" className="bg-gray-900">
                      Acrobatics
                    </option>
                    <option value="music" className="bg-gray-900">
                      Music
                    </option>
                    <option value="gymnastics" className="bg-gray-900">
                      Gymnastics
                    </option>
                    <option value="performances" className="bg-gray-900">
                      Live Stage Performances
                    </option>
                    <option value="swimming" className="bg-gray-900">
                      Swimming Competition
                    </option>
                    <option value="school" className="bg-gray-900">
                      School Partnership
                    </option>
                    <option value="showcase" className="bg-gray-900">
                      Kids Showcase
                    </option>
                  </select>
                </div>
                <div>
                  <label className="font-outfit text-xs text-gray-500 uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your child and any questions you have..."
                    className="contact-input w-full rounded-xl px-4 py-3.5 font-outfit text-sm text-white placeholder-gray-600 resize-none"
                  />
                </div>
                <button className="btn-primary w-full py-4 rounded-xl font-outfit font-semibold text-white tracking-wide flex items-center justify-center gap-2 mt-2">
                  Send Message <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        className="border-t border-white/5 py-12"
        style={{ background: "#080808" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <span className="font-bebas text-2xl tracking-widest text-white">
                  SPAK<span className="text-red-500">NATION</span>
                </span>
              </div>
              <p className="font-outfit text-gray-500 text-sm leading-relaxed max-w-xs">
                A safe, structured environment where potential is nurtured with
                discipline, integrity and excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bebas text-lg text-white tracking-wider mb-4">
                Programs
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Acrobatics",
                  "Music",
                  "Gymnastics",
                  "Swimming",
                  "Performances",
                  "Kids Showcase",
                ].map((p) => (
                  <li key={p}>
                    <span className="font-outfit text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bebas text-lg text-white tracking-wider mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "About Us",
                  "Our Coaches",
                  "School Partnership",
                  "Showcase Events",
                  "Contact",
                ].map((p) => (
                  <li key={p}>
                    <span className="font-outfit text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-outfit text-xs text-gray-600">
              © 2025 Spaknation. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className="text-yellow-500/40 fill-yellow-500/40"
                />
              ))}
              <span className="font-outfit text-xs text-gray-600 ml-2">
                Nurturing Excellence
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
