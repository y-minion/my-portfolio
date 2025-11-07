/**
 * useScrollAnimation Hook
 * 
 * 요소가 뷰포트에 들어올 때 애니메이션을 트리거하기 위한 커스텀 훅입니다.
 * 
 * @description
 * Intersection Observer API를 사용하여 요소가 화면에 나타나는 것을 감지합니다.
 * 한 번 보이면 isVisible 상태가 true로 유지됩니다 (재숨김 없음).
 * 
 * @param {IntersectionObserverInit} options - Intersection Observer 옵션
 * @returns {{ ref: RefObject<HTMLElement>, isVisible: boolean }}
 * 
 * @example
 * ```tsx
 * const { ref, isVisible } = useScrollAnimation();
 * 
 * return (
 *   <div 
 *     ref={ref} 
 *     className={isVisible ? 'opacity-100' : 'opacity-0'}
 *   >
 *     Content
 *   </div>
 * );
 * ```
 */

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options = {}) {
  // 요소의 가시성 상태
  const [isVisible, setIsVisible] = useState(false);
  // 관찰할 요소의 ref
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    /**
     * Intersection Observer 생성
     * 
     * @param {IntersectionObserverEntry[]} entries - 관찰 중인 요소들의 교차 정보
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 요소가 뷰포트에 들어오면 isVisible을 true로 설정
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // 요소의 10%가 보이면 트리거
        rootMargin: '0px 0px -50px 0px', // 하단에서 50px 전에 트리거
        ...options, // 커스텀 옵션 병합
      }
    );

    const currentRef = ref.current;
    
    // 요소가 존재하면 관찰 시작
    if (currentRef) {
      observer.observe(currentRef);
    }

    // 클린업: 컴포넌트 언마운트 시 관찰 중단
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
}
