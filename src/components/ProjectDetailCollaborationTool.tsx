/**
 * ProjectDetailCollaborationTool Page
 *
 * 협업 도구 서비스 프로젝트의 상세 페이지입니다.
 *
 * @description
 * 협업 도구 서비스의 성능 최적화 프로젝트 상세 내용을 표시합니다.
 * - 필터 시스템 아키텍처 개선
 * - 네트워크 요청 80% 감소
 * - 로컬 스토리지 캐싱 전략
 *
 * @features
 * - 뒤로가기 버튼
 * - 스크롤 애니메이션 적용된 섹션별 내용
 * - 성능 최적화 과정 및 결과 설명
 */

import { ArrowLeft, CheckCircle2, Zap, Database, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../shared/lib/hooks/useScrollAnimation";
import alertImage from "../../public/alert_modal_image.png";

export function ProjectDetailCollaborationTool() {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#0064FF] mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontWeight: 500 }}>모든 프로젝트로 돌아가기</span>
          </Link>

          <h1 className="text-[3rem] mb-4" style={{ fontWeight: 700 }}>
            Project: 협업 도구 서비스
          </h1>
          <h3
            className="text-[1.5rem] mb-6 text-[#202632]"
            style={{ fontWeight: 600 }}
          >
            정량적 성과와 견고한 아키텍처로 증명하는 엔지니어링
          </h3>
          <p className="text-lg text-[#202632] leading-relaxed max-w-3xl">
            GitHub UI와 유사한 협업 도구를 Figma 기획서 기반으로 구현했습니다.
            이 과정에서 기존 필터 기능의 비효율성을 개선하고, 복잡한 상태를
            효율적으로 관리하는 것을 주요 과제로 설정했습니다.
          </p>
        </div>
      </section>

      {/* Overview Bar */}
      <section className="py-8 px-6 bg-white border-b border-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div
                className="text-sm text-[#717182] mb-2"
                style={{ fontWeight: 500 }}
              >
                My Role
              </div>
              <div className="text-[#202632]" style={{ fontWeight: 600 }}>
                Frontend Developer (팀: FE 1, BE 2)
              </div>
            </div>

            <div className="text-center md:text-left">
              <div
                className="text-sm text-[#717182] mb-2"
                style={{ fontWeight: 500 }}
              >
                Duration
              </div>
              <div className="text-[#202632]" style={{ fontWeight: 600 }}>
                2025.05 - 2025.06
              </div>
            </div>

            <div className="text-center md:text-left">
              <div
                className="text-sm text-[#717182] mb-2"
                style={{ fontWeight: 500 }}
              >
                Core Tech
              </div>
              <div className="text-[#202632]" style={{ fontWeight: 600 }}>
                React, Zustand, Immer, Caching
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
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-[2rem] mb-12" style={{ fontWeight: 700 }}>
            Project Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - The Result */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-12 h-12 text-[#0064FF]" />
              </div>
              <div
                className="text-[5rem] text-[#0064FF] mb-4"
                style={{ fontWeight: 700 }}
              >
                80%
              </div>
              <div
                className="text-lg text-[#202632]"
                style={{ fontWeight: 600 }}
              >
                네트워크 요청 수 감소
              </div>
              <div className="mt-4 text-[#717182]">5회 → 1회</div>
            </div>

            {/* Right Column - STAR Summary */}
            <div>
              <div className="space-y-6">
                <p className="text-[#202632] leading-relaxed">
                  필터 기능이 옵션 변경 시마다 불필요한 API를 4~5회 중복
                  호출하여 UX 저해 및 서버 부하를 유발했고, 페이지 이동 시
                  메타데이터를 반복 요청하는 중복도 발견했습니다. 아키텍처를
                  개선하여 서버 부하를 줄이고 사용자 경험(UX)을 향상시키는 것이
                  목표였습니다.
                </p>

                <p className="text-[#202632] leading-relaxed">
                  '상세 필터 모달'을 재설계하여 '적용' 시점에만 1회 요청하도록
                  변경했고, Zustand{" "}
                  <code className="bg-[#F9FAFB] px-2 py-1 rounded text-sm">
                    persist
                  </code>{" "}
                  미들웨어로 메타데이터를 로컬 스토리지에 캐싱했습니다.
                </p>

                <p className="text-[#202632] leading-relaxed">
                  <strong>네트워크 요청을 80% 감소</strong>시켰고, 캐싱 전략으로
                  중복 API 호출을 원천 차단하여 페이지 로딩 속도를 단축하고 서버
                  부하를 경감시켰습니다.
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#717182]">
                    <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                    <span>상세 필터 모달 설계 및 구현</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#717182]">
                    <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                    <span>Zustand persist로 캐싱 전략 구현</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#717182]">
                    <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                    <span>네트워크 요청 80% 감소 달성</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Caching & Architecture */}
      <section
        ref={section2.ref as React.RefObject<HTMLElement>}
        className="py-24 px-6 bg-[#F9FAFB]"
      >
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            section2.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-[2rem] mb-12" style={{ fontWeight: 700 }}>
            2. 견고한 FE 아키텍처 설계
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Caching */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Database className="w-6 h-6 text-[#0064FF]" />
                </div>
                <h3
                  className="text-[1.25rem] text-[#0064FF]"
                  style={{ fontWeight: 600 }}
                >
                  캐싱을 통한 중복 요청 제거
                </h3>
              </div>

              <p className="text-[#202632] leading-relaxed mb-6">
                페이지 이동 시마다 반복 요청되던 필터 메타데이터의 중복을
                발견했습니다. Zustand의{" "}
                <code className="bg-[#F9FAFB] px-2 py-1 rounded text-sm">
                  persist
                </code>{" "}
                미들웨어를 활용, 메타데이터를 로컬 스토리지에 캐싱하여 불필요한
                API 호출을 원천 차단하고 로딩 속도를 단축했습니다.
              </p>

              {/* Code Block Placeholder */}
              <div className="bg-[#202632] p-6 rounded-xl overflow-x-auto">
                <div className="text-sm text-gray-400 mb-2">
                  zustand-persist-example.ts
                </div>
                <pre className="text-sm text-white">
                  <code>{`import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFilterStore = create(
  persist(
    (set) => ({
      metadata: null,
      setMetadata: (data) => 
        set({ metadata: data }),
    }),
    {
      name: 'filter-metadata-storage',
    }
  )
);`}</code>
                </pre>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>로컬 스토리지 캐싱 전략</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>중복 API 호출 제거</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>페이지 로딩 속도 개선</span>
                </div>
              </div>
            </div>

            {/* Right Column - Error Handling */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-[#0064FF]" />
                </div>
                <h3
                  className="text-[1.25rem] text-[#0064FF]"
                  style={{ fontWeight: 600 }}
                >
                  전역 에러 핸들링 및 상태 캡슐화
                </h3>
              </div>

              <p className="text-[#202632] leading-relaxed mb-6">
                <code className="bg-[#F9FAFB] px-2 py-1 rounded text-sm">
                  useDataFetch
                </code>{" "}
                커스텀 훅으로 API 로직을 추상화하고, 오류 발생 시{" "}
                <code className="bg-[#F9FAFB] px-2 py-1 rounded text-sm">
                  Zustand
                </code>{" "}
                전역 스토어에 상태를 업데이트했습니다.{" "}
                <code className="bg-[#F9FAFB] px-2 py-1 rounded text-sm">
                  ErrorToast
                </code>{" "}
                컴포넌트가 이 스토어를 구독하여, 앱 전역에서 일관된 에러
                피드백을 제공하도록 구현했습니다.
              </p>

              {/* Error Toast Screenshot Placeholder */}
              <div>
                <img src={alertImage} />
                <div className="text-center mt-4 text-sm text-[#717182]">
                  전역 에러 토스트 UI 예시
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>커스텀 훅으로 API 로직 추상화</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>전역 에러 상태 관리</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>일관된 사용자 피드백 제공</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section
        ref={section3.ref as React.RefObject<HTMLElement>}
        className="py-16 px-6 bg-white"
      >
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            section3.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0064FF] text-white rounded-xl hover:bg-[#0052CC] transition-colors"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>모든 프로젝트로 돌아가기</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
