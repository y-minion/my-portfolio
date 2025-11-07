/**
 * Experience Widget
 * 
 * 교육 이력 및 자격증을 표시하는 타임라인 섹션입니다.
 * 
 * @description
 * - 교육 과정과 자격증을 시간순으로 표시합니다
 * - 각 항목은 아이콘, 제목, 기간, 설명을 포함합니다
 * - 순차적인 애니메이션으로 사용자 경험을 향상시킵니다
 * 
 * @features
 * - 스크롤 애니메이션 (순차적 딜레이)
 * - 타임라인 스타일 레이아웃
 * - 아이콘 기반 카테고리 구분
 */

import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '../../../shared/lib/hooks/useScrollAnimation';

export function Experience() {
  // 스크롤 애니메이션 훅
  const { ref, isVisible } = useScrollAnimation();
  
  /**
   * 타임라인 데이터
   * 
   * @property {string} type - 항목 타입 ("education" | "certificate")
   * @property {LucideIcon} icon - 표시할 아이콘 컴포넌트
   * @property {string} title - 기관 또는 자격증 이름
   * @property {string} period - 기간 (YYYY.MM 형식)
   * @property {string} description - 간단한 설명
   * 
   * @todo 새로운 이력을 추가하려면 이 배열에 객체를 추가하세요
   */
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
        {/* 섹션 제목 */}
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
        
        {/* 타임라인 아이템 리스트 */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`flex gap-6 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }} // 순차적 애니메이션
            >
              {/* 아이콘 */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <item.icon className="w-6 h-6 text-[#0064FF]" />
                </div>
              </div>
              
              {/* 내용 카드 */}
              <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                {/* 제목과 기간 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <span className="text-sm text-[#717182]" style={{ fontWeight: 500 }}>
                    {item.period}
                  </span>
                </div>
                {/* 설명 */}
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
