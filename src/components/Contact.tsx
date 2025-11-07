import { Mail, Github, BookOpen } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="contact" 
      className="py-24 px-6 bg-white"
    >
      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-[2rem] mb-8" style={{ fontWeight: 700 }}>Contact Me</h2>
        
        <div className="mb-12">
          <a 
            href="mailto:dudals2963@tukorea.ac.kr"
            className="inline-flex items-center gap-3 text-xl text-[#0064FF] hover:underline"
          >
            <Mail className="w-6 h-6" />
            <span>dudals2963@tukorea.ac.kr</span>
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#F9FAFB] rounded-lg hover:bg-[#ececf0] transition-colors"
          >
            <Github className="w-5 h-5" />
            <span style={{ fontWeight: 500 }}>GitHub</span>
          </a>
          
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
