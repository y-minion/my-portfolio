/**
 * Contact Widget
 * 
 * 연락처 정보를 표시하는 섹션입니다.
 * 
 * @description
 * - 이메일, GitHub, Velog 링크를 제공합니다
 * - 각 링크는 아이콘과 함께 표시되며, 외부 링크로 연결됩니다
 * 
 * @features
 * - 스크롤 애니메이션
 * - 이메일 mailto 링크
 * - 외부 링크 (새 탭에서 열기)
 * - 호버 효과
 */

import { Mail, Github, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../../../shared/lib/hooks/useScrollAnimation';

export function Contact() {
  // 스크롤 애니메이션 훅
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="contact" 
      className="py-24 px-6 bg-white"
    >
      {/* 스크롤 애니메이션이 적용되는 컨테이너 */}
      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        {/* 섹션 제목 */}
        <h2 className="text-[2rem] mb-8" style={{ fontWeight: 700 }}>Contact Me</h2>
        
        {/* 이메일 링크 */}
        <div className="mb-12">
          <a 
            href="mailto:dudals2963@tukorea.ac.kr"
            className="inline-flex items-center gap-3 text-xl text-[#0064FF] hover:underline"
          >
            <Mail className="w-6 h-6" />
            <span>dudals2963@tukorea.ac.kr</span>
          </a>
        </div>
        
        {/* 소셜 링크 버튼들 */}
        <div className="flex justify-center gap-6">
          {/* GitHub 링크 */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#F9FAFB] rounded-lg hover:bg-[#ececf0] transition-colors"
          >
            <Github className="w-5 h-5" />
            <span style={{ fontWeight: 500 }}>GitHub</span>
          </a>
          
          {/* Velog 링크 */}
          <a
            href="https://velog.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#F9FAFB] rounded-lg hover:bg-[#ececf0] transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            <span style={{ fontWeight: 500 }}>Velog</span>
          </a>
        </div>
      </div>
    </section>
  );
}
