/**
 * HomePage
 * 
 * 포트폴리오 메인 페이지입니다.
 * 
 * @description
 * 모든 위젯 섹션(Hero, About, Skills, Projects, Experience, Contact)과
 * 네비게이션 도트를 포함하는 메인 레이아웃입니다.
 * 
 * @features
 * - 섹션 기반 스크롤 레이아웃
 * - 우측 네비게이션 도트
 * - 프로젝트 클릭 이벤트 처리
 */

import { Hero } from '../../../widgets/Hero/ui/Hero';
import { About } from '../../../widgets/About/ui/About';
import { Skills } from '../../../widgets/Skills/ui/Skills';
import { EngineeringBackground } from '../../../widgets/EngineeringBackground/ui/EngineeringBackground';
import { Projects } from '../../../widgets/Projects/ui/Projects';
import { Experience } from '../../../widgets/Experience/ui/Experience';
import { Contact } from '../../../widgets/Contact/ui/Contact';
import { NavigationDots } from '../../../widgets/NavigationDots/ui/NavigationDots';

interface HomePageProps {
  /** 프로젝트 클릭 시 호출되는 콜백 함수 */
  onProjectClick: (projectId: string) => void;
}

export function HomePage({ onProjectClick }: HomePageProps) {
  return (
    <>
      {/* 우측 네비게이션 도트 */}
      <NavigationDots />
      
      {/* 메인 컨텐츠 */}
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <EngineeringBackground onProjectClick={onProjectClick} />
        <Projects onProjectClick={onProjectClick} />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
