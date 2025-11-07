/**
 * ProjectDetailCarRoofBox Page
 * 
 * 자동차 툴레 후류 현상 분석 프로젝트의 상세 페이지입니다.
 * 
 * @description
 * CAE 경진대회에서 수행한 자동차 루프 박스(툴레)의 CFD 해석을 통한
 * 항력 감소 및 연비 향상 프로젝트를 소개합니다.
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

interface ProjectDetailCarRoofBoxProps {
  /**
   * 메인 페이지로 돌아가는 함수
   */
  onBack: () => void;
}

export function ProjectDetailCarRoofBox({ onBack }: ProjectDetailCarRoofBoxProps) {
  /**
   * 프로젝트 사용 기술 태그 목록
   * 
   * @todo 새로운 기술을 추가하려면 이 배열에 추가하세요
   */
  const tags = ["ANSYS (CFD)", "SolidWorks", "유동 해석"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-4xl mx-auto">
          {/* 프로젝트 메인 제목 */}
          <h1 className="mb-6 text-[#202632]">
            CAE 경진대회: 자동차 툴레 후류 현상 분석
          </h1>
          
          {/* 프로젝트 부제 */}
          <h3 className="text-[#717182] mb-8">
            정량적 성과로 입증한 공학적 개선
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
              src="https://images.unsplash.com/photo-1705925076727-08b2b1182fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhZXJvZHluYW1pY3MlMjB3aW5kJTIwdHVubmVsfGVufDF8fHx8MTc2MjUxODExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="CFD 자동차 공기역학 해석 이미지"
              className="w-full h-auto"
            />
          </div>

          {/* 프로젝트 요약 */}
          <div className="space-y-4">
            <h2 className="text-[#202632]">
              Project Summary
            </h2>
            
            <p className="text-[#202632] leading-relaxed">
              CAE 경진대회에서 자동차 루프 박스(툴레)가 유발하는 후류 현상과 풍절음 문제를 발견했습니다. 
              CFD(전산유체역학) 해석을 통해 문제를 분석하고, 설계를 변경하여 연비를 개선하는 것이 목표였습니다. 
              ANSYS CFD로 기존 모델의 공기 저항을 분석한 후, 
              루프 스포일러를 제거하고 와류 발생기를 장착하는 설계를 채택하여 후방 공기 저항을 효과적으로 줄이는 방안을 도출했습니다.
            </p>
            
            <p className="text-[#202632] leading-relaxed">
              최종 개선안은 <strong>항력을 30.56% 감소시키고 연비를 약 30% 향상</strong>시키는 정량적 성과를 달성하여 
              대회에서 입상했습니다.
            </p>

            {/* 주요 성과 하이라이트 */}
            <div className="bg-[#F9FAFB] rounded-xl p-6 border-l-4 border-[#0064FF]">
              <h3 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                핵심 성과
              </h3>
              <div className="space-y-2">
                <p className="text-[#202632]">
                  <strong>• 항력 감소:</strong> 30.56% 개선
                </p>
                <p className="text-[#202632]">
                  <strong>• 연비 향상:</strong> 약 30% 개선
                </p>
                <p className="text-[#202632]">
                  <strong>• 설계 개선:</strong> 루프 스포일러 제거 + 와류 발생기 장착
                </p>
              </div>
            </div>
          </div>

          {/* 프로젝트 상세 정보 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                해석 방법
              </h4>
              <p className="text-[#202632]">
                ANSYS CFD를 활용한 전산유체역학 해석을 통해 
                자동차 루프 박스 주변의 공기 흐름과 후류 현상을 분석하고,
                항력 계수를 정량적으로 측정했습니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                설계 최적화
              </h4>
              <p className="text-[#202632]">
                SolidWorks로 루프 박스와 와류 발생기의 3D 모델을 설계하고,
                다양한 설계안을 시뮬레이션하여 최적의 공기역학적 형상을 도출했습니다.
              </p>
            </div>
          </div>

          {/* 기술적 인사이트 */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-8 border border-gray-200">
            <h3 className="mb-4 text-[#202632]" style={{ fontWeight: 600 }}>
              기술적 접근
            </h3>
            <p className="text-[#202632] leading-relaxed">
              초기 가설은 루프 스포일러가 공기 흐름을 개선할 것이라 예상했으나, 
              CFD 시뮬레이션 결과 오히려 스포일러가 와류를 증가시키고 항력을 높이는 것으로 나타났습니다. 
              이에 스포일러를 제거하고 와류 발생기를 전략적으로 배치하여 
              공기 흐름을 제어하는 혁신적인 해결책을 제시했습니다.
            </p>
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
