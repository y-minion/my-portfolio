/**
 * NavigationDots Widget
 *
 * 페이지 우측에 고정된 섹션 네비게이터입니다.
 *
 * @description
 * - 화면 우측에 고정되어 현재 스크롤 위치를 표시합니다
 * - 호버 시 전체 네비게이터가 확장되며 모든 섹션 레이블이 표시됩니다
 * - 도트를 클릭하면 해당 섹션으로 부드럽게 스크롤됩니다
 *
 * @features
 * - 스크롤 위치 추적 및 활성 섹션 표시
 * - 호버 시 확장 애니메이션
 * - 부드러운 스크롤 네비게이션
 * - 데스크톱 전용 (모바일에서는 숨김)
 */

import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
}

/**
 * 네비게이션 섹션 목록
 *
 * @property {string} id - 섹션의 DOM id (scrollTo에 사용)
 * @property {string} label - 네비게이터에 표시될 레이블
 *
 * @todo 새로운 섹션을 추가하려면 이 배열에 객체를 추가하세요
 */
const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "engineering-background", label: "Engineering" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function NavigationDots() {
  // 현재 활성화된 섹션의 id를 추적
  const [activeSection, setActiveSection] = useState("hero");
  // 네비게이터 호버 상태
  const [isHovered, setIsHovered] = useState(false);

  /**
   * 스크롤 이벤트 리스너
   *
   * 현재 스크롤 위치를 기반으로 활성 섹션을 업데이트합니다.
   * 뷰포트의 상단 1/3 지점을 기준으로 섹션을 판단합니다.
   */
  useEffect(() => {
    const handleScroll = () => {
      // 모든 섹션 요소를 가져옴
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      // 현재 스크롤 위치 (뷰포트 상단 1/3 지점)
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // 하단부터 순회하며 현재 보고 있는 섹션 찾기
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

    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 설정

    // 클린업
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * 특정 섹션으로 스크롤하는 함수
   *
   * @param {string} sectionId - 스크롤할 섹션의 id
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 상단 오프셋 (-80px)을 적용하여 헤더와 겹치지 않도록 함
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* 네비게이터 컨테이너 - 호버 시 확장 */}
      <div
        className={`flex flex-col gap-4 bg-white/80 backdrop-blur-sm rounded-full py-4 px-3 shadow-lg border border-gray-100 transition-all duration-300 hover:rounded-2xl hover:px-5
        ${isHovered === false && "items-col"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative flex items-center gap-3 transition hover:scale-110 hover:-translate-y-1 delay-150 duration-300 ease-in-out"
            aria-label={`Navigate to ${item.label}`}
          >
            {/* 도트 인디케이터 */}
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 delay-50 ease-in-out flex-shrink-0 group-hover:bg-[#0064FF] group-hover:scale-110  ${
                activeSection === item.id
                  ? "bg-[#0064FF] scale-125" // 활성 상태: 파란색 + 크기 증가
                  : "bg-gray-300" // 비활성 상태: 회색
              }`}
            />

            {/* 섹션 레이블 - 호버 시에만 표시 */}
            {isHovered && (
              <span
                className={`text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${
                  isHovered
                    ? "max-w-[120px] opacity-100 hover:text-[#0064FF]" // 호버 시: 펼침
                    : "max-w-0 opacity-0 w-0" // 기본 상태: 숨김
                } ${
                  activeSection === item.id
                    ? "text-[#0064FF]" // 활성 섹션: 파란색 텍스트
                    : "text-[#202632]" // 비활성 섹션: 검은색 텍스트
                }`}
                style={{
                  fontWeight: activeSection === item.id ? 600 : 500,
                }}
              >
                {item.label}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
