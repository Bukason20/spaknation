import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Showcase", path: "/#showcase" },
  { label: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (path) => {
    setMenuOpen(false);
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleEnroll = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">
            <Sparkles size={18} color="#fff" />
          </div>
          <span className="bebas nav-brand">
            SPAK<span style={{ color: "#E53935" }}>NATION</span>
          </span>
        </Link>

        <ul className="nav-desktop">
          {NAV_LINKS.map((l) =>
            l.path.startsWith("/#") ? (
              <li key={l.label}>
                <button
                  className="nav-link"
                  onClick={() => handleNavClick(l.path)}
                >
                  {l.label}
                </button>
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className={`nav-link${location.pathname === l.path ? " nav-link-active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <button
          className="btn-red enroll-btn-desktop"
          style={{
            padding: "8px",
          }}
          onClick={handleEnroll}
        >
          Enroll Now <ArrowRight size={14} />
        </button>

        {/* <button
          className="btn-red"
          style={{
            marginTop: 16,
            padding: "12px 0",
            width: "100%",
            justifyContent: "center",
            fontSize: "0.9rem",
            borderRadius: 14,
          }}
          onClick={handleEnroll}
        >
          Enroll Now <ArrowRight size={14} />
        </button> */}

        <button
          className="nav-mobile-btn"
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
        <div className="nav-mobile-menu">
          {NAV_LINKS.map((l) =>
            l.path.startsWith("/#") ? (
              <button
                key={l.label}
                className="nav-link nav-mobile-item"
                onClick={() => handleNavClick(l.path)}
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.label}
                to={l.path}
                className={`nav-link nav-mobile-item${location.pathname === l.path ? " nav-link-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ),
          )}
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
            onClick={handleEnroll}
          >
            Enroll Now <ArrowRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
