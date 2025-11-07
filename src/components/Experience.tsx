import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();
  
  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "코드스쿼드 - Frontend",
      period: "2025.02 - 2025.07",
      description: "프론트엔드 개발 부트캠프"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "한국공학대학교 - 기계설계공학부",
      period: "2019.03 - 2025.08",
      description: "학사 졸업"
    },
    {
      type: "certificate",
      icon: Award,
      title: "SQLD",
      period: "2025.09",
      description: "SQL 개발자 자격증"
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="experience" 
      className="py-24 px-6 bg-[#F9FAFB]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-[2rem] mb-16 text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{ fontWeight: 700 }}
        >
          Experience & Education
        </h2>
        
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`flex gap-6 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <item.icon className="w-6 h-6 text-[#0064FF]" />
                </div>
              </div>
              
              <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <span className="text-sm text-[#717182]" style={{ fontWeight: 500 }}>
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-[#717182]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
