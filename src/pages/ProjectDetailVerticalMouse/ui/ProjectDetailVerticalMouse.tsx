/**
 * ProjectDetailVerticalMouse Page
 * 
 * 버티컬 마우스 구조 해석 프로젝트의 상세 페이지입니다.
 * 
 * @description
 * CAE 경진대회에서 수행한 버티컬 마우스의 각도별 손목 신경 응력 분석 프로젝트를 소개합니다.
 * ANSYS를 활용한 구조 해석을 통해 60도 각도가 최적임을 증명한 프로젝트입니다.
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

interface ProjectDetailVerticalMouseProps {
  /**
   * 메인 페이지로 돌아가는 함수
   */
  onBack: () => void;
}

export function ProjectDetailVerticalMouse({ onBack }: ProjectDetailVerticalMouseProps) {
  /**
   * 프로젝트 사용 기술 태그 목록
   * 
   * @todo 새로운 기술을 추가하려면 이 배열에 추가하세요
   */
  const tags = ["ANSYS", "SolidWorks", "구조 해석"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-4xl mx-auto">
          {/* 프로젝트 메인 제목 */}
          <h1 className="mb-6 text-[#202632]">
            CAE 경진대회: 버티컬 마우스 구조 해석
          </h1>
          
          {/* 프로젝트 부제 */}
          <h3 className="text-[#717182] mb-8">
            가설과 다른, 데이터를 통해 최적의 설계를 증명하다
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
              src="https://images.unsplash.com/photo-1655890954724-b11c86a46ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGFuYWx5c2lzJTIwc2ltdWxhdGlvbnxlbnwxfHx8fDE3NjI1MTc4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="ANSYS 구조 해석 이미지"
              className="w-full h-auto"
            />
          </div>

          {/* 프로젝트 요약 */}
          <div className="space-y-4">
            <h2 className="text-[#202632]">
              Project Summary
            </h2>
            
            <p className="text-[#202632] leading-relaxed">
              CAE 경진대회에서 버티컬 마우스의 최적 각도를 찾는 프로젝트를 진행했습니다. 
              '45도'가 손목에 가장 무리가 적을 것이라는 초기 가설을 세우고, 
              이를 ANSYS 구조 해석을 통해 검증하는 것이 목표였습니다. 
              SolidWorks로 다양한 각도의 모델을 만들고, ANSYS를 사용해 각 모델이 손목의 정중 신경에 가하는 응력을 정밀하게 분석했습니다.
            </p>
            
            <p className="text-[#202632] leading-relaxed">
              해석 결과, 초기 가설과 달리 <strong>60도 각도가 손목의 정중 신경에 가장 적은 응력을 가한다</strong>는 
              예상 밖의 결과를 도출하여 데이터를 기반으로 최적의 설계를 증명했습니다.
            </p>

            {/* 주요 성과 하이라이트 */}
            <div className="bg-[#F9FAFB] rounded-xl p-6 border-l-4 border-[#0064FF]">
              <h3 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                핵심 인사이트
              </h3>
              <p className="text-[#202632]">
                초기 가설과 다른 결과를 얻었으나, 데이터를 신뢰하고 분석 결과를 통해 
                60도 각도가 인체공학적으로 최적임을 객관적으로 증명했습니다. 
                이는 가설에 얽매이지 않고 데이터 기반 의사결정의 중요성을 보여줍니다.
              </p>
            </div>
          </div>

          {/* 프로젝트 상세 정보 (선택사항) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                분석 방법
              </h4>
              <p className="text-[#202632]">
                ANSYS를 활용한 유한요소해석(FEA)을 통해 다양한 각도에서 
                손목 정중 신경에 가해지는 응력을 정량적으로 측정하고 비교했습니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                설계 도구
              </h4>
              <p className="text-[#202632]">
                SolidWorks로 버티컬 마우스의 3D 모델을 설계하고, 
                각도 변화에 따른 다양한 설계안을 생성하여 해석에 활용했습니다.
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
