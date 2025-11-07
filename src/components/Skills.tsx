import { useScrollAnimation } from './hooks/useScrollAnimation';

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  
  const skills = [
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "Node.js", color: "#339933" },
    { name: "AWS", color: "#FF9900" },
    { name: "GitHub", color: "#181717" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Supabase", color: "#3ECF8E" },
    { name: "Zustand", color: "#433E38" },
    { name: "React Query", color: "#FF4154" }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="skills" 
      className="py-24 px-6 bg-[#F9FAFB]"
    >
      <div 
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-[2rem] mb-12 text-center" style={{ fontWeight: 700 }}>Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl"
                style={{ backgroundColor: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
              <span className="text-sm text-center" style={{ fontWeight: 500 }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
