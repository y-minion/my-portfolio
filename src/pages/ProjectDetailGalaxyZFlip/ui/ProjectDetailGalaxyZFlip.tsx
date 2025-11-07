/**
 * ProjectDetailGalaxyZFlip Page
 * 
 * GALAXY Z FLIP 1 개선 설계 프로젝트의 상세 페이지입니다.
 * 
 * @description
 * GALAXY Z FLIP 1 모델을 역설계하여 힌지 구조 단순화, 경량화, 
 * 내구성 향상, 언더컷 문제 해결을 수행한 프로젝트를 소개합니다.
 * 
 * @features
 * - Hero Section: 프로젝트 제목과 부제
 * - Content Section: 프로젝트 이미지, 요약, 태그
 * - Navigation: 메인 페이지로 돌아가기
 * 
 * @props
 * - onBack: 메인 페이지로 돌아가는 함수
 */

import { ImageWithFallback } from '../../../shared/components/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailGalaxyZFlipProps {
  /**
   * 메인 페이지로 돌아가는 함수
   */
  onBack: () => void;
}

export function ProjectDetailGalaxyZFlip({ onBack }: ProjectDetailGalaxyZFlipProps) {
  /**
   * 프로젝트 사용 기술 태그 목록
   * 
   * @todo 새로운 기술을 추가하려면 이 배열에 추가하세요
   */
  const tags = ["SolidWorks", "ANSYS", "역설계", "리브 보강"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-4xl mx-auto">
          {/* 프로젝트 메인 제목 */}
          <h1 className="mb-6 text-[#202632]">
            역설계: GALAXY Z FLIP 1 개선 설계
          </h1>
          
          {/* 프로젝트 부제 */}
          <h3 className="text-[#717182] mb-8">
            기존 구조의 한계를 분석하고 대안을 제시하다
          </h3>

          {/* 기술 태그 */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-[#202632] rounded-full border border-gray-200"
                style={{ fontWeight: 500 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 프로젝트 이미지 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576153192621-7a3be10b356e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZW5naW5lZXJpbmclMjBkZXNpZ258ZW58MXx8fHwxNzYyNTE4MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="스마트폰 엔지니어링 설계 이미지"
              className="w-full h-auto"
            />
          </div>

          {/* 프로젝트 요약 */}
          <div className="space-y-4">
            <h2 className="text-[#202632]">
              Project Summary
            </h2>
            
            <p className="text-[#202632] leading-relaxed">
              'GALAXY Z FLIP 개선 설계' 프로젝트를 진행하며 기존 제품을 사용자 관점에서 직접 사용해본 결과, 
              힌지 구조의 복잡성과 무게감 등 구조적인 불편함을 발견했습니다. 
              사용자가 느끼는 이러한 불편함을 해소하고 편의성을 높이기 위해, 
              제품 구조를 면밀히 분석하여 불편함의 원인을 파악했습니다.
            </p>
            
            <p className="text-[#202632] leading-relaxed">
              GALAXY Z FLIP 1 모델을 역설계하여 <strong>세 가지 주요 개선</strong>을 수행했습니다. 
              힌지 구조 단순화 및 티타늄 소재 적용 등 부품을 최적화하는 재설계 작업을 통해 
              경량화 및 내구성을 향상시켰으며, 프레임 구조 변경을 통해 언더컷 문제를 해결했습니다. 
              이 개선 설계를 통해 <strong>사용자의 불편함을 실질적으로 줄이고 제품의 전반적인 편의성을 향상</strong>시키는 성과를 거두었습니다.
            </p>

            {/* 주요 성과 하이라이트 */}
            <div className="bg-[#F9FAFB] rounded-xl p-6 border-l-4 border-[#0064FF]">
              <h3 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                3대 핵심 개선사항
              </h3>
              <div className="space-y-2">
                <p className="text-[#202632]">
                  <strong>1. 힌지 구조 단순화:</strong> 복잡한 부품 수를 줄여 조립성 향상
                </p>
                <p className="text-[#202632]">
                  <strong>2. 티타늄 소재 적용:</strong> 경량화 및 내구성 개선
                </p>
                <p className="text-[#202632]">
                  <strong>3. 언더컷 문제 해결:</strong> 프레임 구조 변경으로 제조 용이성 확보
                </p>
              </div>
            </div>
          </div>

          {/* 프로젝트 상세 정보 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                역설계 프로세스
              </h4>
              <p className="text-[#202632]">
                실제 제품을 분해하고 SolidWorks로 3D 모델링을 진행했습니다.
                각 부품의 형상과 조립 방식을 분석하여 기존 설계의 
                장점과 개선점을 파악했습니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                구조 검증
              </h4>
              <p className="text-[#202632]">
                ANSYS 구조 해석을 통해 개선된 힌지 구조의 강도와 내구성을 검증했습니다.
                리브 보강 설계를 적용하여 강성을 유지하면서도 경량화를 달성했습니다.
              </p>
            </div>
          </div>

          {/* 설계 개선 세부 사항 */}
          <div className="space-y-6">
            <h3 className="text-[#202632]" style={{ fontWeight: 600 }}>
              설계 개선 세부 사항
            </h3>

            {/* 개선 1: 힌지 구조 단순화 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#0064FF]" style={{ fontWeight: 600 }}>
                개선 1: 힌지 구조 단순화
              </h4>
              <p className="text-[#202632]">
                기존 GALAXY Z FLIP 1의 힌지는 여러 개의 작은 부품으로 구성되어 있어 
                조립이 복잡하고 내구성 문제가 발생할 수 있었습니다. 
                힌지 구조를 재설계하여 부품 수를 줄이고, 조립 공정을 단순화했습니다.
              </p>
            </div>

            {/* 개선 2: 티타늄 소재 적용 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#0064FF]" style={{ fontWeight: 600 }}>
                개선 2: 티타늄 소재 적용
              </h4>
              <p className="text-[#202632]">
                기존 스테인리스 스틸 대신 티타늄 소재를 적용하여 무게를 줄이면서도 
                더 높은 강도와 내식성을 확보했습니다. 
                ANSYS 해석을 통해 충분한 구조적 안정성을 검증했습니다.
              </p>
            </div>

            {/* 개선 3: 언더컷 문제 해결 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#0064FF]" style={{ fontWeight: 600 }}>
                개선 3: 언더컷 문제 해결
              </h4>
              <p className="text-[#202632]">
                기존 프레임 구조의 언더컷은 사출 성형 시 금형 분리를 어렵게 만들었습니다. 
                프레임 구조를 변경하여 언더컷을 제거하고, 
                리브 보강을 추가하여 강성 저하 없이 제조 용이성을 확보했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#0064FF] hover:text-[#0052CC] transition-colors group"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft 
              size={20} 
              className="group-hover:-translate-x-1 transition-transform" 
            />
            Back to Main
          </button>
        </div>
      </section>
    </div>
  );
}
