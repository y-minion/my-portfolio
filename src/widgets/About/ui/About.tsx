/**
 * About Widget
 * 
 * 개발자에 대한 자기소개 섹션입니다.
 * 
 * @description
 * - 개발자의 철학과 강점을 소개합니다
 * - 3가지 핵심 역량을 아이콘과 함께 표시합니다
 * - 스크롤 애니메이션으로 사용자 경험을 향상시킵니다
 * 
 * @features
 * - 스크롤 애니메이션 (opacity + translateY)
 * - 반응형 그리드 레이아웃
 * - lucide-react 아이콘 사용
 */

import { Code2, Server, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../../../shared/lib/hooks/useScrollAnimation';

export function About() {
  // 스크롤 애니메이션 훅 - 요소가 뷰포트에 들어올 때 감지
  const { ref, isVisible } = useScrollAnimation();
  
  /**
   * 핵심 역량 데이터
   * 각 역량은 아이콘, 제목, 설명을 포함합니다
   */
  const features = [
    {
      icon: Code2,
      title: "시스템 아키텍처 이해",
      description: "프로젝트 전반의 아키텍처를 이해하는 넓은 시야"
    },
    {
      icon: Server,
      title: "DevOps 및 안정성 확보",
      description: "백엔드/DevOps 팀과의 원활한 소통으로 시스템 안정성 확보"
    },
    {
      icon: Lightbulb,
      title: "React 내부 원리 탐구",
      description: "기술의 근본 원리까지 파고드는 깊이"
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="about" 
      className="py-24 px-6 bg-white"
    >
      {/* 스크롤 애니메이션이 적용되는 컨테이너 */}
      <div 
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16">
          {/* 왼쪽: 자기소개 텍스트 */}
          <div>
            <h2 className="text-[2rem] mb-6" style={{ fontWeight: 700 }}>About Me</h2>
            <p className="text-[#202632] leading-relaxed">
              저는 단순히 기능 구현을 넘어, 백엔드/DevOps 팀과의 원활한 소통을 통해 시스템의 안정성과 효율성을 책임지는 프론트엔드 개발자입니다. 복잡한 문제를 해결하기 위해 기술의 근본 원리까지 파고드는 깊이와, 프로젝트 전반의 아키텍처를 이해하는 넓은 시야를 갖추고 있습니다.
            </p>
          </div>
          
          {/* 오른쪽: 핵심 역량 리스트 */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                {/* 아이콘 컨테이너 */}
                <div className="bg-[#F9FAFB] p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#0064FF]" />
                </div>
                {/* 역량 정보 */}
                <div>
                  <h3 className="text-[1.125rem] mb-2" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#717182]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
