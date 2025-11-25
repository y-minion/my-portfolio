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

import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { HomePage } from './pages/HomePage/ui/HomePage';
import { ProjectDetailVerticalMouse } from './pages/ProjectDetailVerticalMouse/ui/ProjectDetailVerticalMouse';
import { ProjectDetailCarRoofBox } from './pages/ProjectDetailCarRoofBox/ui/ProjectDetailCarRoofBox';
import { ProjectDetailAutomationMachine } from './pages/ProjectDetailAutomationMachine/ui/ProjectDetailAutomationMachine';
import { ProjectDetailGalaxyZFlip } from './pages/ProjectDetailGalaxyZFlip/ui/ProjectDetailGalaxyZFlip';
import { ProjectDetailWebCreatorX } from './components/ProjectDetailWebCreatorX';
import { ProjectDetailCollaborationTool } from './components/ProjectDetailCollaborationTool';
import { ProjectDetailMiniReact } from './components/ProjectDetailMiniReact';

/**
 * ScrollToTop
 * 
 * 페이지 이동 시 스크롤을 최상단으로 이동시키는 컴포넌트
 * 뒤로가기(POP) 동작 시에는 스크롤 위치를 유지합니다.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Engineering Background Projects */}
        <Route path="/project/vertical-mouse" element={<ProjectDetailVerticalMouse />} />
        <Route path="/project/car-roof-box" element={<ProjectDetailCarRoofBox />} />
        <Route path="/project/automation-machine" element={<ProjectDetailAutomationMachine />} />
        <Route path="/project/galaxy-z-flip" element={<ProjectDetailGalaxyZFlip />} />
        
        {/* Software Projects */}
        <Route path="/project/web-creator-x" element={<ProjectDetailWebCreatorX />} />
        <Route path="/project/collaboration-tool" element={<ProjectDetailCollaborationTool />} />
        <Route path="/project/mini-react" element={<ProjectDetailMiniReact />} />
      </Routes>
    </>
  );
}
