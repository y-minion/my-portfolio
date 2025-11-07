/**
 * EngineeringBackground Widget
 * 
 * 기계공학 배경 및 프로젝트를 소개하는 섹션입니다.
 * 
 * @description
 * - 기계공학 전공 시절 수행한 주요 프로젝트 4개를 소개합니다
 * - CAE 경진대회, 졸업 프로젝트, 역설계 프로젝트 등을 포함합니다
 * - 각 프로젝트는 이미지, 제목, 설명, 사용 도구 태그를 포함합니다
 * 
 * @features
 * - 반응형 그리드 레이아웃 (모바일: 1열, 태블릿: 2열, 데스크톱: 4열)
 * - 스크롤 애니메이션
 * - 호버 효과
 * - 프로젝트별 기술 태그 표시
 */

import { useScrollAnimation } from '../../../shared/lib/hooks/useScrollAnimation';
import { ImageWithFallback } from '../../../shared/components/ImageWithFallback';

interface EngineeringBackgroundProps {
  /**
   * 프로젝트 클릭 시 호출되는 콜백 함수
   * @param projectId - 클릭한 프로젝트의 ID
   */
  onProjectClick?: (projectId: string) => void;
}

export function EngineeringBackground({ onProjectClick }: EngineeringBackgroundProps) {
  // 스크롤 애니메이션 훅
  const { ref, isVisible } = useScrollAnimation();

  /**
   * 기계공학 프로젝트 데이터
   * 
   * @property {string} caption - 프로젝트 카테고리 (예: "CAE Competition")
   * @property {string} title - 프로젝트 제목
   * @property {string} description - 프로젝트 핵심 성과 설명 (1-2줄)
   * @property {string[]} tags - 사용한 도구/기술 목록
   * @property {string} image - 프로젝트 이미지 URL
   * @property {string} [projectId] - 프로젝트 상세 페이지 ID (있으면 클릭 가능)
   * 
   * @todo 새로운 프로젝트를 추가하려면 이 배열에 객체를 추가하세요
   */
  const projects = [
    {
      caption: "CAE Competition",
      title: "버티컬 마우스 구조 해석",
      description: "ANSYS 해석을 통해, 60도 각도의 마우스가 손목 정중 신경에 가하는 응력이 가장 적다는 것을 객관적으로 증명했습니다.",
      tags: ["ANSYS", "SolidWorks"],
      image: "https://images.unsplash.com/photo-1755373255602-c030aac3bc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcmdvbm9taWMlMjBtb3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjI1MTMxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projectId: "vertical-mouse" // 상세 페이지 있음
    },
    {
      caption: "CAE Competition",
      title: "자동차 툴레(Thule) 후류 현상 분석",
      description: "CFD(전산유체역학) 해석 및 와류 발생기 설계를 통해, 기존 모델 대비 항력을 30.56% 감소시키고 연비를 약 30% 향상시켰습니다.",
      tags: ["ANSYS (CFD)", "SolidWorks"],
      image: "https://images.unsplash.com/photo-1702280780653-0f7e8f142a6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhZXJvZHluYW1pY3MlMjB3aW5kfGVufDF8fHx8MTc2MjUxMzEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projectId: "car-roof-box" // 상세 페이지 있음
    },
    {
      caption: "Graduation Project (Team Leader)",
      title: "자동화 소분 기계 제작",
      description: "SolidWorks로 맞춤형 부품을 설계하고, 팀원 이탈로 발생한 모터 제어 문제를 Python을 독학하여 해결하며 프로젝트를 완수했습니다.",
      tags: ["SolidWorks", "ANSYS", "Python", "YOLO V5"],
      image: "https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBtYWNoaW5lJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjI1MTMxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projectId: "automation-machine" // 상세 페이지 있음
    },
    {
      caption: "Reverse Engineering Project",
      title: "Galaxy Z Flip 1 개선 설계",
      description: "역설계를 통해 복잡한 힌지(Hinge) 구조를 단순화하고, 티타늄 소재를 적용하여 경량화 및 내구성을 동시에 개선했습니다.",
      tags: ["SolidWorks", "ANSYS"],
      image: "https://images.unsplash.com/photo-1697120162468-061ae048f930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwaGluZ2UlMjBtZWNoYW5pc218ZW58MXx8fHwxNzYyNTEzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      projectId: "galaxy-z-flip" // 상세 페이지 있음
    }
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="engineering-background"
      className="py-24 px-6 bg-white"
    >
      {/* 스크롤 애니메이션이 적용되는 컨테이너 */}
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        {/* 섹션 제목 */}
        <h2 className="text-[2rem] mb-16 text-center" style={{ fontWeight: 700 }}>
          Engineering Background
        </h2>

        {/* 프로젝트 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const isClickable = !!project.projectId;
            const handleClick = () => {
              if (isClickable && onProjectClick && project.projectId) {
                onProjectClick(project.projectId);
              }
            };

            return (
              <div
                key={index}
                onClick={handleClick}
                className={`bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } ${isClickable ? 'cursor-pointer' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }} // 순차적 애니메이션
              >
              {/* 프로젝트 이미지 */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* 카드 내용 */}
              <div className="p-5 space-y-3">
                {/* Caption - 프로젝트 카테고리 */}
                <p className="text-xs text-[#717182] uppercase tracking-wide" style={{ fontWeight: 500 }}>
                  {project.caption}
                </p>

                {/* H3 Title - 프로젝트 제목 */}
                <h3 className="text-base leading-tight" style={{ fontWeight: 600 }}>
                  {project.title}
                </h3>

                {/* Body - 프로젝트 설명 */}
                <p className="text-sm text-[#202632] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags - 사용 도구 */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#F9FAFB] text-[#202632] rounded-full text-xs"
                      style={{ fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
