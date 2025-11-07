/**
 * ProjectDetailAutomationMachine Page
 * 
 * 자동화 소분 기계 졸업작품 프로젝트의 상세 페이지입니다.
 * 
 * @description
 * 팀장으로서 기획부터 설계, 예상치 못한 문제 해결까지
 * 전체 프로젝트를 주도한 졸업작품 프로젝트를 소개합니다.
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

interface ProjectDetailAutomationMachineProps {
  /**
   * 메인 페이지로 돌아가는 함수
   */
  onBack: () => void;
}

export function ProjectDetailAutomationMachine({ onBack }: ProjectDetailAutomationMachineProps) {
  /**
   * 프로젝트 사용 기술 태그 목록
   * 
   * @todo 새로운 기술을 추가하려면 이 배열에 추가하세요
   */
  const tags = ["SolidWorks", "ANSYS", "Python", "YOLO V5", "3D 프린팅"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-4xl mx-auto">
          {/* 프로젝트 메인 제목 */}
          <h1 className="mb-6 text-[#202632]">
            졸업작품: 자동화 소분 기계 (팀장)
          </h1>
          
          {/* 프로젝트 부제 */}
          <h3 className="text-[#717182] mb-8">
            기획부터 설계, 그리고 예상치 못한 문제 해결까지
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
              src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwbWFjaGluZSUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzYyNTE4MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="자동화 기계 제조 이미지"
              className="w-full h-auto"
            />
          </div>

          {/* 프로젝트 요약 */}
          <div className="space-y-4">
            <h2 className="text-[#202632]">
              Project Summary
            </h2>
            
            <p className="text-[#202632] leading-relaxed">
              졸업 작품 '자동화 소분 기계' 제작 중, 제어 모듈 담당 팀원이 이탈하여 프로젝트가 중단될 위기에 처했습니다. 
              전공 외 분야인 Python 기반 영상 인식과 모터 제어 기능을 구현해야 하는 시급한 상황에서, 
              즉시 유튜브와 구글링으로 관련 기술을 독학하여 제어 로직을 직접 구현하고 남은 팀원들과 협력해 시스템을 성공적으로 통합했습니다.
            </p>
            
            <p className="text-[#202632] leading-relaxed">
              팀장으로서 기획, 일정 관리, 하드웨어 설계를 주도했으며, 
              SolidWorks로 맞춤형 부품을 설계하고 ANSYS로 안정성을 확보했습니다. 
              최종적으로 기계의 안정적인 구동을 실현하여 프로젝트를 성공적으로 마쳤으며, 
              <strong>새로운 IT 기술을 두려움 없이 학습하고 적용하는 자신감</strong>을 얻었습니다.
            </p>

            {/* 주요 성과 하이라이트 */}
            <div className="bg-[#F9FAFB] rounded-xl p-6 border-l-4 border-[#0064FF]">
              <h3 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                핵심 리더십 & 문제 해결
              </h3>
              <div className="space-y-2">
                <p className="text-[#202632]">
                  <strong>• 팀장 역할:</strong> 프로젝트 기획, 일정 관리, 하드웨어 설계 주도
                </p>
                <p className="text-[#202632]">
                  <strong>• 위기 대응:</strong> 팀원 이탈 시 Python 독학으로 모터 제어 구현
                </p>
                <p className="text-[#202632]">
                  <strong>• 기술 융합:</strong> YOLO V5 객체 인식 + 3D 프린팅 맞춤 부품 설계
                </p>
              </div>
            </div>
          </div>

          {/* 프로젝트 상세 정보 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                하드웨어 설계
              </h4>
              <p className="text-[#202632]">
                SolidWorks로 기계 구조를 설계하고, ANSYS 구조 해석을 통해 
                안정성을 검증했습니다. 3D 프린팅을 활용하여 맞춤형 부품을 
                직접 제작하고 조립했습니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="mb-3 text-[#202632]" style={{ fontWeight: 600 }}>
                소프트웨어 개발
              </h4>
              <p className="text-[#202632]">
                위기 상황에서 Python을 독학하여 모터 제어 시스템을 구현했습니다.
                YOLO V5를 활용한 객체 인식 기능을 추가하여 자동화 정확도를 향상시켰습니다.
              </p>
            </div>
          </div>

          {/* 프로젝트 여정 */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-8 border border-gray-200">
            <h3 className="mb-4 text-[#202632]" style={{ fontWeight: 600 }}>
              프로젝트 여정과 배운 점
            </h3>
            <div className="space-y-4">
              <p className="text-[#202632] leading-relaxed">
                졸업작품 프로젝트의 팀장으로서 전체 프로세스를 주도하며 
                기획부터 설계, 제작, 테스트까지 경험했습니다.
              </p>
              <p className="text-[#202632] leading-relaxed">
                프로젝트 중반 팀원의 이탈로 모터 제어 부분에 공백이 생겼을 때, 
                포기하지 않고 Python을 독학하여 직접 구현했습니다. 
                이 과정에서 <strong>새로운 기술을 빠르게 습득하고 적용하는 능력</strong>과 
                <strong>문제 해결을 위한 적극적인 자세</strong>를 키울 수 있었습니다.
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
