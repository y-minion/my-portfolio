export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-[3rem] leading-tight" style={{ fontWeight: 700 }}>
          코드를 넘어 시스템을 설계하고,<br />원리를 탐구하며,<br />성능을 증명합니다.
        </h1>
        <p className="text-lg text-[#717182]">
          안녕하세요, 프론트엔드 개발자 황영민입니다.
        </p>
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
