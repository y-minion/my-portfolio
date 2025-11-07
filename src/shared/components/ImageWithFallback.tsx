/**
 * ImageWithFallback Component
 * 
 * 이미지 로딩 실패 시 폴백 UI를 제공하는 컴포넌트입니다.
 * 
 * @description
 * 이미지를 로드하다가 에러가 발생하면 자동으로 대체 이미지를 표시합니다.
 * Figma에서 가져온 이미지나 외부 이미지에 유용합니다.
 * 
 * @features
 * - 이미지 로드 실패 감지
 * - 자동 폴백 UI 표시
 * - 원본 URL을 data 속성으로 보관
 * 
 * @example
 * ```tsx
 * <ImageWithFallback 
 *   src="https://example.com/image.jpg" 
 *   alt="Description" 
 *   className="w-full h-auto"
 * />
 * ```
 */

import React, { useState } from 'react'

/**
 * 에러 발생 시 표시할 기본 이미지 (SVG Base64)
 * 깨진 이미지 아이콘
 */
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  // 이미지 로드 실패 여부 추적
  const [didError, setDidError] = useState(false)

  /**
   * 이미지 로드 실패 시 호출되는 핸들러
   */
  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  // 에러 발생 시 폴백 UI 렌더링
  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        {/* 에러 이미지 표시, 원본 URL은 data 속성으로 보관 */}
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    // 정상적인 이미지 렌더링
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
