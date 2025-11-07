import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface ProjectsProps {
  onProjectClick?: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = [
    {
      id: "web-creator-x",
      title: "Web-Creator-X (No-code 웹 빌더)",
      description: "AWS와 Nginx를 활용한 Blue/Green 무중단 배포 파이프라인을 구축하여, 배포 중 다운타임 0을 달성했습니다.",
      tags: ["DevOps", "AWS", "Nginx", "PM2", "Shell Script"],
      gradient: "from-blue-50 to-indigo-50",
      hasDetailPage: true
    },
    {
      id: "collaboration-tool",
      title: "협업 도구 서비스",
      description: "필터 시스템 아키텍처를 개선하여 불필요한 네트워크 요청을 80% 감소시켰습니다. 로컬 스토리지 캐싱 전략으로 중복 요청을 제거했습니다.",
      tags: ["Performance", "UX", "Zustand", "Caching"],
      gradient: "from-purple-50 to-pink-50",
      hasDetailPage: true
    },
    {
      id: "mini-react",
      title: "Mini React 프레임워크 제작",
      description: "React의 본질을 이해하기 위해 VNode, Diffing 알고리즘, 재조정 엔진을 Vanilla JS로 직접 설계하고 구현했습니다.",
      tags: ["Deep-Dive", "VanillaJS", "Esbuild"],
      gradient: "from-green-50 to-teal-50",
      hasDetailPage: true
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="projects" 
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-[2rem] mb-16 text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{ fontWeight: 700 }}
        >
          Projects
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              id={`project-${project.id}`}
              className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-[1.5rem] mb-4" style={{ fontWeight: 600 }}>
                {project.title}
              </h3>
              
              <p className="text-[#202632] mb-6 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/80 backdrop-blur text-[#202632] rounded-full text-sm"
                    style={{ fontWeight: 500 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.hasDetailPage ? (
                <button 
                  onClick={() => onProjectClick?.(project.id)}
                  className="inline-flex items-center gap-2 text-[#0064FF] hover:gap-3 transition-all cursor-pointer"
                >
                  <span style={{ fontWeight: 500 }}>자세히 보기</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 text-[#717182]">
                  <span style={{ fontWeight: 500 }}>상세 페이지 준비 중</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
