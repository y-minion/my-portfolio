/**
 * Skills Widget
 *
 * 개발자의 기술 스택을 표시하는 섹션입니다.
 *
 * @description
 * - 보유한 기술 스택을 그리드 레이아웃으로 표시합니다
 * - 각 스킬은 브랜드 컬러와 첫 글자 아이콘으로 표현됩니다
 * - 호버 시 그림자 효과로 인터랙티브한 경험을 제공합니다
 *
 * @features
 * - 스크롤 애니메이션
 * - 반응형 그리드 (모바일 2열, 데스크톱 5열)
 * - 브랜드 컬러 기반 아이콘
 * - 호버 효과
 */

import { useScrollAnimation } from "../../../shared/lib/hooks/useScrollAnimation";
import SkillIcon from "../../NavigationDots/ui/Icons";

export function Skills() {
  // 스크롤 애니메이션 훅
  const { ref, isVisible } = useScrollAnimation();

  /**
   * 기술 스택 데이터
   * 각 스킬은 이름과 브랜드 컬러를 포함합니다
   *
   * @todo 새로운 기술을 추가하려면 이 배열에 { name, color } 객체를 추가하세요
   */
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
    { name: "React Query", color: "#FF4154" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="skills"
      className="py-24 px-6 bg-[#F9FAFB]"
    >
      {/* 스크롤 애니메이션이 적용되는 컨테이너 */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2
          className="text-[2rem] mb-12 text-center"
          style={{ fontWeight: 700 }}
        >
          Skills
        </h2>

        {/* 스킬 카드 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow"
            >
              {/* 스킬 아이콘 - 첫 글자를 브랜드 컬러 배경에 표시 */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl">
                <SkillIcon skill={skill.name} />
              </div>
              {/* 스킬 이름 */}
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
