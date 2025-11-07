/**
 * Hero Widget
 * 
 * 메인 페이지의 첫 번째 섹션으로 사용자를 환영하는 히어로 섹션입니다.
 * 
 * @description
 * - 개발자 소개 문구와 CTA 버튼을 포함합니다
 * - "프로젝트 보기" 버튼을 클릭하면 프로젝트 섹션으로 부드럽게 스크롤됩니다
 * 
 * @features
 * - 반응형 디자인 (모바일/데스크톱 대응)
 * - 프로젝트 섹션으로의 스크롤 네비게이션
 * - Toss 스타일의 미니멀한 디자인
 */

export function Hero() {
  /**
   * 프로젝트 섹션으로 스크롤하는 함수
   * Projects 섹션의 id를 참조하여 부드럽게 스크롤 이동
   */
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 bg-white"
    >
      <div className="text-center max-w-4xl mx-auto space-y-8">
        {/* 메인 타이틀 - 개발자 소개 문구 */}
        <h1 className="text-[3rem] leading-tight" style={{ fontWeight: 700 }}>
          코드를 넘어 시스템을 설계하고,<br />원리를 탐구하며,<br />성능을 증명합니다.
        </h1>
        
        {/* 서브 타이틀 - 간단한 자기소개 */}
        <p className="text-lg text-[#717182]">
          안녕하세요, 프론트엔드 개발자 황영민입니다.
        </p>
        
        {/* CTA 버튼 - 프로젝트 섹션으로 이동 */}
        <button
          onClick={scrollToProjects}
          className="bg-[#0064FF] text-white px-8 py-3 rounded-lg hover:bg-[#0052CC] transition-colors"
        >
          프로젝트 보기
        </button>
      </div>
    </section>
  );
}
