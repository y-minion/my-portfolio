import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function NavigationDots() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition =
        window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div
        className="group flex flex-col gap-4 bg-white/80 backdrop-blur-sm rounded-full py-4 px-3 shadow-lg border border-gray-100 transition-all duration-300 hover:rounded-2xl hover:px-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative flex items-center gap-3 hover:text-[#0064FF]"
            aria-label={`Navigate to ${item.label}`}
          >
            {/* Dot */}
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                activeSection === item.id
                  ? "bg-[#0064FF] scale-125"
                  : "bg-gray-300 group-hover:bg-[#0064FF]"
              }`}
            />

            {/* Label - appears on container hover */}
            <span
              className={`text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isHovered
                  ? "max-w-[120px] opacity-100"
                  : "max-w-0 opacity-0"
              } ${
                activeSection === item.id
                  ? "text-[#0064FF]"
                  : "text-[#202632]"
              }`}
              style={{
                fontWeight:
                  activeSection === item.id ? 600 : 500,
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}