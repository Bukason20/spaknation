import { Mic, Music, Star, Trophy, Users, Waves, Zap } from "lucide-react";

// ─── SINGLE SOURCE OF TRUTH FOR ALL PROGRAMS ────────────────────────────────
// Used by: src/pages/Home.jsx AND src/pages/Programs.jsx
// To add a new photo: drop the file in public/images/ and update the image field
// To enable "Watch a Class": paste your YouTube/Facebook embed URL in videoUrl
// ─────────────────────────────────────────────────────────────────────────────

const Programs = [
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
    image: "./ballet.jpg",
    videoUrl: "",
    // TODO: Replace image with your actual Facebook photo for Ballet
    // TODO: Add videoUrl — e.g. "https://www.youtube.com/embed/YOUR_ID"
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
    image: "./acrobatics.jpg",
    videoUrl: "",
    // TODO: Replace with your acrobatics students mid-flip from Facebook
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
    image: "./gymnastics.jpg",
    videoUrl: "",
    // TODO: Replace with gymnastics training photo from Facebook
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
    image: "./hiphop.jpg",
    videoUrl: "",
    // TODO: Replace with hip hop class or performance photo from Facebook
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
    image: "./music.jpg",
    videoUrl: "",
    // TODO: Replace with music class photo from Facebook
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
    image: "./singing.jpg",
    videoUrl: "",
    // TODO: Replace with singing/vocal coaching photo from Facebook
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
    image: "./taekwondo.jpg",
    videoUrl: "",
    // TODO: Replace with taekwondo training photo from Facebook (placeholder for now)
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
    image: "./swimming.jpg",
    videoUrl: "",
    // TODO: Replace with swimming training photo from Facebook
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
    image: "./public-speaking.jpg",
    videoUrl: "",
    // TODO: Replace with public speaking or presentation class photo from Facebook (placeholder for now)
  },
];

export default Programs;
