/**
 * ProjectDetailWebCreatorX Page
 * 
 * Web-Creator-X 프로젝트의 상세 페이지입니다.
 * 
 * @description
 * No-code 웹 빌더 프로젝트의 상세 내용을 표시합니다.
 * - AWS와 Nginx를 활용한 Blue/Green 무중단 배포
 * - DevOps 및 인프라 구축 경험
 * - 프로젝트 배경, 기술 스택, 성과, 회고를 포함
 * 
 * @features
 * - 뒤로가기 버튼
 * - 스크롤 애니메이션 적용된 섹션별 내용
 * - 성과 및 기술적 도전 상세 설명
 */

import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../shared/lib/hooks/useScrollAnimation';

interface ProjectDetailWebCreatorXProps {
  /** 메인 페이지로 돌아가는 콜백 함수 */
  onBack: () => void;
}

export function ProjectDetailWebCreatorX({ onBack }: ProjectDetailWebCreatorXProps) {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#0064FF] mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontWeight: 500 }}>모든 프로젝트로 돌아가기</span>
          </button>
          
          <h1 className="text-[3rem] mb-4" style={{ fontWeight: 700 }}>
            Project: Web-Creator-X
          </h1>
          <h3 className="text-[1.5rem] mb-6 text-[#202632]" style={{ fontWeight: 600 }}>
            Beyond Frontend: 주도적인 아키텍처 설계 및 0-Downtime 배포
          </h3>
          <p className="text-lg text-[#202632] leading-relaxed max-w-3xl">
            드래그 앤 드롭 기능을 통해 사용자가 시각적으로 웹사이트를 디자인하고 만들 수 있는 No-code 웹 빌더입니다.
          </p>
        </div>
      </section>

      {/* Overview Bar */}
      <section className="py-8 px-6 bg-white border-b border-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="text-sm text-[#717182] mb-2" style={{ fontWeight: 500 }}>
                My Role
              </div>
              <div className="text-[#202632]" style={{ fontWeight: 600 }}>
                1인 인프라팀, DevOps 총괄
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="text-sm text-[#717182] mb-2" style={{ fontWeight: 500 }}>
                Duration
              </div>
              <div className="text-[#202632]" style={{ fontWeight: 600 }}>
                2025.10 ~ 진행 중
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="text-sm text-[#717182] mb-2" style={{ fontWeight: 500 }}>
                Core Tech
              </div>
              <div className="text-[#202632]" style={{ fontWeight: 600 }}>
                AWS CodeDeploy, Nginx, PM2, GitHub Actions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Project Summary */}
      <section 
        ref={section1.ref as React.RefObject<HTMLElement>}
        className="py-24 px-6 bg-white"
      >
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            section1.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-[2rem] mb-8" style={{ fontWeight: 700 }}>
            Project Summary
          </h2>
          <div className="bg-[#F9FAFB] p-8 rounded-2xl">
            <p className="text-[#202632] leading-relaxed text-lg mb-4">
              팀은 FE 3명, BE 0명으로 구성되어 MVP에 필수적인 DB, 서버, 배포 인프라 전체가 부재한 심각한 병목 상황에 직면했습니다. 
              팀장으로서 이 기술 공백을 해결하고, 팀원들이 FE 개발에만 100% 집중할 수 있는 환경을 구축하는 것을 최우선 과제로 삼았습니다.
            </p>
            <p className="text-[#202632] leading-relaxed text-lg mb-4">
              프론트엔드 역할을 넘어 AWS CodeDeploy, Nginx, PM2, Shell Script를 통합하여 Blue/Green 무중단 배포 파이프라인 전체를 주도적으로 설계하고 구축했습니다. 
              'curl'을 이용한 Health Check 자동화 스크립트를 작성하여 안정성을 확보했습니다.
            </p>
            <p className="text-[#202632] leading-relaxed text-lg">
              배포 중 오류 응답 0%의 <strong>'Zero Downtime'을 객관적으로 증명</strong>했으며, 배포 속도를 45% 단축했습니다. 
              팀원들은 인프라 걱정 없이 'git push'만으로 개발에 몰입할 수 있는 환경을 제공하여 <strong>팀 생산성을 극대화</strong>했습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-full text-sm text-[#202632]" style={{ fontWeight: 500 }}>
                FE 3명, BE 0명
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm text-[#202632]" style={{ fontWeight: 500 }}>
                인프라 주도 구축
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm text-[#202632]" style={{ fontWeight: 500 }}>
                Zero Downtime 달성
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: My Solution */}
      <section 
        ref={section2.ref as React.RefObject<HTMLElement>}
        className="py-24 px-6 bg-[#F9FAFB]"
      >
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            section2.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-[2rem] mb-12" style={{ fontWeight: 700 }}>
            My Solution: Blue/Green 무중단 배포 시스템
          </h2>
          
          {/* Architecture Diagram Placeholder */}
          <div className="bg-white p-8 rounded-2xl mb-12 shadow-sm">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#0064FF] mb-4" style={{ fontWeight: 600 }}>
                  Blue/Green Deployment Architecture
                </div>
                <div className="text-sm text-[#717182] max-w-md mx-auto">
                  AWS CodeDeploy + Nginx + PM2 통합 아키텍처 다이어그램
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Solution Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-[1.25rem] mb-4 text-[#0064FF]" style={{ fontWeight: 600 }}>
                아키텍처 설계
              </h3>
              <p className="text-[#202632] leading-relaxed mb-4">
                AWS CodeDeploy, Nginx 리버스 프록시, PM2를 통합하여 안정적인 무중단 배포 파이프라인을 구축했습니다.
              </p>
              <p className="text-[#202632] leading-relaxed">
                GitHub Actions로 CI/CD를 자동화하여 개발자가 git push만으로 전체 배포 프로세스가 실행되도록 했습니다.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>AWS CodeDeploy 통합</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>Nginx 리버스 프록시 설정</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>PM2 프로세스 관리</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-[1.25rem] mb-4 text-[#0064FF]" style={{ fontWeight: 600 }}>
                자동화된 Health Check
              </h3>
              <p className="text-[#202632] leading-relaxed mb-4">
                배포 안정성을 위해 Shell Script를 작성했습니다. 'curl'로 신규 서버의 /health 엔드포인트를 10회 검증하고, 검증 성공 시에만 Nginx 설정을 동적으로 변경하여 트래픽을 전환하는 제어 로직을 구현했습니다.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>10회 Health Check 검증</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>동적 Nginx 설정 변경</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>자동 트래픽 전환</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Key Results */}
      <section 
        ref={section3.ref as React.RefObject<HTMLElement>}
        className="py-24 px-6 bg-white"
      >
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            section3.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-[2rem] mb-12 text-center" style={{ fontWeight: 700 }}>
            Key Results: 증명된 안정성과 생산성
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
              <div className="text-sm text-[#717182] mb-3" style={{ fontWeight: 500 }}>
                배포 다운타임
              </div>
              <div className="text-[3rem] text-[#0064FF] mb-2" style={{ fontWeight: 700 }}>
                0%
              </div>
              <div className="text-sm text-[#202632]" style={{ fontWeight: 500 }}>
                달성
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
              <div className="text-sm text-[#717182] mb-3" style={{ fontWeight: 500 }}>
                배포 속도
              </div>
              <div className="text-[3rem] text-[#0064FF] mb-2" style={{ fontWeight: 700 }}>
                45%
              </div>
              <div className="text-sm text-[#202632]" style={{ fontWeight: 500 }}>
                향상
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl text-center">
              <div className="text-sm text-[#717182] mb-3" style={{ fontWeight: 500 }}>
                팀 생산성
              </div>
              <div className="text-[2rem] text-[#0064FF] mb-2" style={{ fontWeight: 700 }}>
                극대화
              </div>
              <div className="text-sm text-[#202632]" style={{ fontWeight: 500 }}>
                인프라 걱정 없는 git push 환경
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section 
        ref={section4.ref as React.RefObject<HTMLElement>}
        className="py-16 px-6 bg-[#F9FAFB]"
      >
        <div 
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            section4.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0064FF] text-white rounded-xl hover:bg-[#0052CC] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>모든 프로젝트로 돌아가기</span>
          </button>
        </div>
      </section>
    </div>
  );
}
