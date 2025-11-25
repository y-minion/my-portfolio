/**
 * ProjectDetailMiniReact Page
 *
 * Mini React 프레임워크 제작 프로젝트의 상세 페이지입니다.
 *
 * @description
 * React의 내부 동작 원리를 탐구한 프로젝트 상세 내용을 표시합니다.
 * - VNode 및 Diffing 알고리즘 구현
 * - 재조정(Reconciliation) 엔진 설계
 * - Vanilla JS로 React 핵심 기능 구현
 *
 * @features
 * - 뒤로가기 버튼
 * - 스크롤 애니메이션 적용된 섹션별 내용
 * - 기술적 도전 및 학습 내용 설명
 */

import { ArrowLeft, CheckCircle2, Code2, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../shared/lib/hooks/useScrollAnimation";

export function ProjectDetailMiniReact() {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#0064FF] mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontWeight: 500 }}>모든 프로젝트로 돌아가기</span>
          </Link>

          <h1 className="text-[3rem] mb-4" style={{ fontWeight: 700 }}>
            Project: Mini-React
          </h1>
          <h3
            className="text-[1.5rem] mb-6 text-[#202632]"
            style={{ fontWeight: 600 }}
          >
            React를 '사용'하는 것을 넘어, 그 '본질'을 이해하다
          </h3>
          <p className="text-lg text-[#202632] leading-relaxed max-w-3xl">
            프레임워크의 본질적인 로직에 대한 깊은 이해를 위해, VDOM, Hook,
            재조정 엔진을 Vanilla JS로 직접 설계하고 구현했습니다.
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
                Solo Project (Architecture & Implementation)
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
                2025.06 ~ 진행 중
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
                VanillaJS, Esbuild, VDOM, Diffing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Core Implementations */}
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
          <h2 className="text-[2rem] mb-8" style={{ fontWeight: 700 }}>
            Project Summary
          </h2>

          <div className="bg-[#F9FAFB] p-8 rounded-2xl mb-12">
            <p className="text-[#202632] leading-relaxed text-lg mb-4">
              React를 사용하면서 VDOM, Hook 등 핵심 동작 원리에 대한 깊은 이해
              없이 '사용'만 하고 있다는 의문을 느꼈습니다. React의 본질을
              이해하기 위해 VDOM, Hook, 재조정 엔진(Reconciliation)을 Vanilla
              JS로 직접 설계하고 구현하는 것을 목표로 삼았습니다.
            </p>
            <p className="text-[#202632] leading-relaxed text-lg mb-4">
              <strong>(Build)</strong> Esbuild의{" "}
              <code className="bg-white px-2 py-1 rounded text-sm">
                jsxFactory
              </code>
              를 오버라이드하여 JSX가 커스텀 VNode 객체로 변환되는 과정을
              통제했습니다.
              <strong>(Render)</strong> 'Symbol'과 'WeakSet'을 이용한 효율적인
              이벤트 위임 아키텍처를 구현했습니다.
              <strong>(Reconcile)</strong> 'key' 기반의 지능형 Diffing 알고리즘(
              <code className="bg-white px-2 py-1 rounded text-sm">
                diffTargetFinder
              </code>
              )을 설계하여 DOM 업데이트를 최소화했습니다.
            </p>
            <p className="text-[#202632] leading-relaxed text-lg">
              빌드-렌더링-재조정으로 이어지는{" "}
              <strong>React의 핵심 성능 최적화 원리를 증명하고 내재화</strong>
              했으며, JSX가 VNode 객체로 변환되는 과정을 완벽히 통제할 수 있게
              되었습니다.
            </p>
          </div>

          <h2 className="text-[2rem] mb-12" style={{ fontWeight: 700 }}>
            Key Implementations: Build, Render, Reconcile
          </h2>

          <div className="space-y-12">
            {/* Part 1: Build Pipeline */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  style={{ fontWeight: 700 }}
                >
                  1
                </div>
                <h3 className="text-[1.5rem]" style={{ fontWeight: 600 }}>
                  빌드 파이프라인 (JSX가 VNode가 되기까지)
                </h3>
              </div>

              <div className="mb-6">
                <div
                  className="text-[1.125rem] text-[#0064FF] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  Esbuild jsxFactory 오버라이드
                </div>
                <p className="text-[#202632] leading-relaxed">
                  Vite의 Esbuild를 단순 도구로 사용하는 것을 넘어,{" "}
                  <code className="bg-white px-2 py-1 rounded text-sm">
                    jsxFactory
                  </code>{" "}
                  옵션을 자체 구현한 'createElement' 함수로 연결했습니다. 이를
                  통해 JSX 구문이 VNode 객체로 변환되는 과정을 완벽하게
                  통제하고, 빌드 설정과 프레임워크 코어가 연결되는 과정을
                  내재화했습니다.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {/* Code Block - vite.config.ts */}
                <div className="bg-[#202632] p-6 rounded-xl overflow-x-auto">
                  <div className="text-sm text-gray-400 mb-2">
                    vite.config.ts
                  </div>
                  <pre className="text-sm text-white">
                    <code>{`export default defineConfig({
  //...
  esbuild: {
    jsxFactory: "MyReact.createElement",
    jsxFragment: "MyReact.Fragment",
    jsxInject: "import MyReact from '@/core';",
  },
});


  `}</code>
                  </pre>
                </div>
                {/* Code Block - vite.config.ts */}
                <div className="bg-[#202632] p-6 rounded-xl overflow-x-auto">
                  <div className="text-sm text-gray-400 mb-2">
                    /core/createElement.ts
                  </div>
                  <pre className="text-sm text-white">
                    <code>{`
export default function createElement(
  type,
  props,
  ...children
){
 //...
  const vnode: VNode = {
    type,
    key,
    ref,
    props: {
      ...rest,
      children
    },
  };

  if (typeof type === "function") {
    vnode.hookMetaData = {
      hooks: [],
      pointer: 0,
    };
  }

  const result: Readonly<VNode> = Object.freeze(vnode);

  return result;
}
  `}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>커스텀 createElement 함수 구현</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>JSX → VNode 변환 프로세스 완전 제어</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>빌드 파이프라인과 프레임워크 코어 통합</span>
                </div>
              </div>
            </div>

            {/* Part 2: Render Pipeline */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg"
                  style={{ fontWeight: 700 }}
                >
                  2
                </div>
                <h3 className="text-[1.5rem]" style={{ fontWeight: 600 }}>
                  렌더링 파이프라인과 이벤트 위임
                </h3>
              </div>

              <div className="mb-6">
                <div
                  className="text-[1.125rem] text-[#0064FF] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  VNode to DOM, 그리고 효율적인 이벤트 위임
                </div>
                <p className="text-[#202632] leading-relaxed mb-4">
                  <code className="bg-white px-2 py-1 rounded text-sm">
                    internalRender
                  </code>{" "}
                  함수를 설계하여, 함수형 컴포넌트(Function VNode)와 네이티브
                  태그(String VNode)를 구분하는 재귀적 렌더링 파이프라인을
                  설계했습니다.
                </p>
                <p className="text-[#202632] leading-relaxed">
                  또한, 루트 컨테이너에{" "}
                  <code className="bg-white px-2 py-1 rounded text-sm">
                    WeakSet
                  </code>
                  으로 단 한 번만 리스너를 등록하고,{" "}
                  <code className="bg-white px-2 py-1 rounded text-sm">
                    Symbol
                  </code>{" "}
                  키를 사용해 DOM 오염 없이 핸들러를 저장하는 효율적인 이벤트
                  위임 아키텍처를 구현했습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-purple-500" />
                    <div style={{ fontWeight: 600 }}>재귀적 렌더링</div>
                  </div>
                  <p className="text-sm text-[#717182]">
                    Function VNode와 String VNode를 구분하여 재귀적으로 DOM 생성
                    설계. (현재 작업중입니다.)
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-purple-500" />
                    <div style={{ fontWeight: 600 }}>이벤트 위임</div>
                  </div>
                  <p className="text-sm text-[#717182]">
                    WeakSet + Symbol로 메모리 효율적인 이벤트 핸들러 관리
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>타입별 VNode 재귀 렌더링 구현 설계</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>WeakSet 기반 중복 리스너 방지</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>Symbol 키를 활용한 DOM 오염 방지</span>
                </div>
              </div>
            </div>

            {/* Part 3: Reconciliation */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg"
                  style={{ fontWeight: 700 }}
                >
                  3
                </div>
                <h3 className="text-[1.5rem]" style={{ fontWeight: 600 }}>
                  React 성능의 핵심: Key 기반 Diffing
                </h3>
              </div>

              <div className="mb-6">
                <div
                  className="text-[1.125rem] text-[#0064FF] mb-4"
                  style={{ fontWeight: 600 }}
                >
                  지능형 재조정(Reconciliation) 엔진
                </div>
                <p className="text-[#202632] leading-relaxed mb-4">
                  React 성능의 핵심인 'Key' 기반의 지능형 Diffing 알고리즘을
                  설계했습니다.{" "}
                  <code className="bg-white px-2 py-1 rounded text-sm">
                    diffTargetFinder
                  </code>
                  를 구현하여, 'key'가 존재하면 'key'로, 없으면 'index'로 비교
                  대상을 찾는 지능형 탐색 로직을 완성했습니다.
                </p>
                <p className="text-[#202632] leading-relaxed">
                  이를 통해 불필요한 DOM 재생성을 방지하고 성능 최적화 원리를
                  증명했습니다.
                </p>
              </div>

              {/* Code Block - diffTargetFinder.ts */}
              <div className="bg-[#202632] p-6 rounded-xl overflow-x-auto">
                <div className="text-sm text-gray-400 mb-2">
                  diffTargetFinder.ts
                </div>
                <pre className="text-sm text-white">
                  <code>{`export function diffTargetFinder(
  newVNode: VNode,
  oldVNodes: VNode[]
): VNode | undefined {
  // Key가 있으면 Key로 찾기
  if (newVNode.props?.key !== undefined) {
    return oldVNodes.find(
      (oldVNode) => oldVNode.props?.key === newVNode.props.key
    );
  }
  
  // Key가 없으면 Index로 찾기
  const index = oldVNodes.indexOf(newVNode);
  return oldVNodes[index];
}

// Diffing 알고리즘: 변경된 부분만 업데이트
export function diff(
  newVNode: VNode,
  oldVNode: VNode,
  parentElement: HTMLElement
) {
  const target = diffTargetFinder(newVNode, [oldVNode]);
  if (target) {
    // 기존 DOM 재사용 (Key 기반)
    updateElement(target, newVNode, parentElement);
  } else {
    // 새로운 DOM 생성
    createElement(newVNode, parentElement);
  }
}`}</code>
                </pre>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>Key 기반 지능형 노드 탐색</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>불필요한 DOM 재생성 방지</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#717182]">
                  <CheckCircle2 className="w-4 h-4 text-[#0064FF]" />
                  <span>리스트 렌더링 성능 최적화</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Outcome */}
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
          <h2
            className="text-[2rem] mb-8 text-center"
            style={{ fontWeight: 700 }}
          >
            Key Outcome: Virtual DOM 핵심 원리 내재화
          </h2>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 p-4 rounded-xl">
                <Code2 className="w-12 h-12 text-[#0064FF]" />
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#202632] leading-relaxed mb-6">
                  선언적 상태 변경(
                  <code className="bg-[#F9FAFB] px-2 py-1 rounded text-sm">
                    useState
                  </code>
                  )이{" "}
                  <code className="bg-[#F9FAFB] px-2 py-1 rounded text-sm">
                    diff.ts
                  </code>
                  를 통해 변경된 부분만 선별적으로 DOM에 업데이트하는 Virtual
                  DOM의 핵심 로직을 직접 설계하면 본질을 탐구했습니다.
                </p>
                <p className="text-lg text-[#202632] leading-relaxed">
                  Key 속성을 활용한 노드 탐색 및 재사용 로직을 구현함으로써,
                  프레임워크가 불필요한 DOM 조작을 최소화하고 리스트 업데이트
                  성능을 효율적으로 관리할 수 있는 아키텍처적 기반을
                  마련했습니다.
                </p>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg text-center">
                    <div
                      className="text-sm text-[#717182] mb-2"
                      style={{ fontWeight: 500 }}
                    >
                      구현한 핵심 기능
                    </div>
                    <div className="text-[#0064FF]" style={{ fontWeight: 700 }}>
                      VDOM + Diffing
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg text-center">
                    <div
                      className="text-sm text-[#717182] mb-2"
                      style={{ fontWeight: 500 }}
                    >
                      최적화 전략
                    </div>
                    <div className="text-[#0064FF]" style={{ fontWeight: 700 }}>
                      Key 기반 재사용
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg text-center">
                    <div
                      className="text-sm text-[#717182] mb-2"
                      style={{ fontWeight: 500 }}
                    >
                      학습 성과
                    </div>
                    <div className="text-[#0064FF]" style={{ fontWeight: 700 }}>
                      프레임워크 본질 이해
                    </div>
                  </div>
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
