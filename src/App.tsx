/**
 * App - 애플리케이션 엔트리 포인트
 * 
 * 포트폴리오 웹사이트의 메인 애플리케이션 컴포넌트입니다.
 * 
 * @description
 * 이 컴포넌트는 애플리케이션의 라우팅과 상태 관리를 담당합니다.
 * - 메인 페이지(HomePage)와 프로젝트 상세 페이지들을 관리합니다
 * - 프로젝트 간 네비게이션 및 스크롤 위치 복원을 처리합니다
 * 
 * @architecture
 * FSD (Feature-Sliced Design) 아키텍처를 따릅니다:
 * - app/ - 애플리케이션 초기화 및 라우팅 (이 파일)
 * - pages/ - 페이지 레벨 컴포넌트
 * - widgets/ - 독립적인 섹션 컴포넌트
 * - shared/ - 공통 UI 및 유틸리티
 * 
 * @state
 * - currentView: 현재 표시 중인 페이지
 * - lastViewedProjectId: 마지막으로 본 프로젝트의 ID (스크롤 복원용)
 */

import { useState } from 'react';
import { HomePage } from './pages/HomePage/ui/HomePage';
import { ProjectDetailVerticalMouse } from './pages/ProjectDetailVerticalMouse/ui/ProjectDetailVerticalMouse';
import { ProjectDetailCarRoofBox } from './pages/ProjectDetailCarRoofBox/ui/ProjectDetailCarRoofBox';
import { ProjectDetailAutomationMachine } from './pages/ProjectDetailAutomationMachine/ui/ProjectDetailAutomationMachine';
import { ProjectDetailGalaxyZFlip } from './pages/ProjectDetailGalaxyZFlip/ui/ProjectDetailGalaxyZFlip';
import { ProjectDetailWebCreatorX } from './components/ProjectDetailWebCreatorX';
import { ProjectDetailCollaborationTool } from './components/ProjectDetailCollaborationTool';
import { ProjectDetailMiniReact } from './components/ProjectDetailMiniReact';

/**
 * ViewType
 * 
 * 애플리케이션의 가능한 뷰 타입을 정의합니다.
 * - 'home': 메인 페이지
 * - 'vertical-mouse': 버티컬 마우스 구조 해석 프로젝트 상세 페이지
 * - 'car-roof-box': 자동차 툴레 후류 현상 분석 프로젝트 상세 페이지
 * - 'automation-machine': 자동화 소분 기계 프로젝트 상세 페이지
 * - 'galaxy-z-flip': GALAXY Z FLIP 1 개선 설계 프로젝트 상세 페이지
 * - 'web-creator-x': Web-Creator-X 프로젝트 상세 페이지
 * - 'collaboration-tool': 협업 도구 프로젝트 상세 페이지
 * - 'mini-react': Mini React 프로젝트 상세 페이지
 */
type ViewType = 'home' | 'vertical-mouse' | 'car-roof-box' | 'automation-machine' | 'galaxy-z-flip' | 'web-creator-x' | 'collaboration-tool' | 'mini-react';

export default function App() {
  // 현재 표시 중인 뷰
  const [currentView, setCurrentView] = useState<ViewType>('home');
  // 마지막으로 본 프로젝트 ID (스크롤 위치 복원용)
  const [lastViewedProjectId, setLastViewedProjectId] = useState<string | null>(null);

  /**
   * 페이지 최상단으로 스크롤
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * 특정 프로젝트 카드로 스크롤
   * 
   * @param {string} projectId - 스크롤할 프로젝트의 ID
   */
  const scrollToProject = (projectId: string) => {
    // DOM 렌더링 후 스크롤하도록 약간의 지연 적용
    setTimeout(() => {
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        const yOffset = -100; // 상단 여백
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  /**
   * 프로젝트 클릭 핸들러
   * 
   * 프로젝트 상세 페이지로 이동하고 프로젝트 ID를 저장합니다.
   * 
   * @param {string} projectId - 클릭한 프로젝트의 ID
   */
  const handleProjectClick = (projectId: string) => {
    setLastViewedProjectId(projectId);
    setCurrentView(projectId as ViewType);
    scrollToTop();
  };

  /**
   * 메인 페이지로 돌아가기 핸들러
   * 
   * 메인 페이지로 돌아가면서, 이전에 본 프로젝트가 있다면
   * 해당 프로젝트 위치로 스크롤합니다.
   */
  const handleBackToHome = () => {
    setCurrentView('home');
    if (lastViewedProjectId) {
      scrollToProject(lastViewedProjectId);
    } else {
      scrollToTop();
    }
  };

  // 프로젝트 상세 페이지 라우팅 - Engineering Background
  if (currentView === 'vertical-mouse') {
    return <ProjectDetailVerticalMouse onBack={handleBackToHome} />;
  }

  if (currentView === 'car-roof-box') {
    return <ProjectDetailCarRoofBox onBack={handleBackToHome} />;
  }

  if (currentView === 'automation-machine') {
    return <ProjectDetailAutomationMachine onBack={handleBackToHome} />;
  }

  if (currentView === 'galaxy-z-flip') {
    return <ProjectDetailGalaxyZFlip onBack={handleBackToHome} />;
  }

  // 프로젝트 상세 페이지 라우팅 - Software Projects
  if (currentView === 'web-creator-x') {
    return <ProjectDetailWebCreatorX onBack={handleBackToHome} />;
  }

  if (currentView === 'collaboration-tool') {
    return <ProjectDetailCollaborationTool onBack={handleBackToHome} />;
  }

  if (currentView === 'mini-react') {
    return <ProjectDetailMiniReact onBack={handleBackToHome} />;
  }

  // 메인 페이지
  return <HomePage onProjectClick={handleProjectClick} />;
}
