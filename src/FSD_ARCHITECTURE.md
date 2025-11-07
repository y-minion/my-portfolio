# FSD (Feature-Sliced Design) 아키텍처 가이드

## 📁 프로젝트 구조

이 프로젝트는 **FSD (Feature-Sliced Design)** 아키텍처를 따릅니다.

```
├── App.tsx                 # 애플리케이션 엔트리 포인트 (라우팅 및 상태 관리)
├── pages/                  # 페이지 레이어 - 전체 페이지 컴포넌트
│   ├── HomePage/          # 메인 홈페이지
│   │   ├── ui/
│   │   │   └── HomePage.tsx
│   │   └── index.ts       # 공개 API
│   ├── ProjectDetailVerticalMouse/  # 버티컬 마우스 프로젝트 상세 페이지
│   │   ├── ui/
│   │   │   └── ProjectDetailVerticalMouse.tsx
│   │   └── index.ts       # 공개 API
│   ├── ProjectDetailCarRoofBox/  # 자동차 툴레 프로젝트 상세 페이지
│   │   ├── ui/
│   │   │   └── ProjectDetailCarRoofBox.tsx
│   │   └── index.ts       # 공개 API
│   ├── ProjectDetailAutomationMachine/  # 자동화 소분 기계 프로젝트 상세 페이지
│   │   ├── ui/
│   │   │   └── ProjectDetailAutomationMachine.tsx
│   │   └── index.ts       # 공개 API
│   └── ProjectDetailGalaxyZFlip/  # Galaxy Z Flip 프로젝트 상세 페이지
│       ├── ui/
│       │   └── ProjectDetailGalaxyZFlip.tsx
│       └── index.ts       # 공개 API
├── widgets/               # 위젯 레이어 - 독립적인 섹션 컴포넌트
│   ├── Hero/             # 히어로 섹션
│   ├── About/            # 자기소개 섹션
│   ├── Skills/           # 기술 스택 섹션
│   ├── EngineeringBackground/  # 기계공학 배경 섹션
│   ├── Projects/         # 프로젝트 섹션
│   ├── Experience/       # 경력/교육 섹션
│   ├── Contact/          # 연락처 섹션
│   └── NavigationDots/   # 네비게이션 도트
├── shared/               # 공유 레이어 - 재사용 가능한 코드
│   ├── lib/             # 유틸리티 및 훅
│   │   └── hooks/
│   │       ├── useScrollAnimation.ts  # 스크롤 애니메이션 훅
│   │       └── index.ts
│   └── components/      # 공통 컴포넌트
│       ├── ImageWithFallback.tsx
│       └── index.ts
├── components/           # 레거시 컴포넌트 (마이그레이션 중)
│   ├── ui/              # ShadCN UI 컴포넌트
│   └── ProjectDetail*.tsx  # 프로젝트 상세 페이지 (추후 pages/로 이동 예정)
└── styles/              # 전역 스타일
    └── globals.css
```

## 🏗️ 레이어 설명

### 1. **App Layer** (`/App.tsx`)
- 애플리케이션의 진입점
- 라우팅 로직 및 전역 상태 관리
- 페이지 간 네비게이션 처리

### 2. **Pages Layer** (`/pages/`)
- 전체 페이지를 구성하는 컴포넌트
- 여러 위젯을 조합하여 완전한 페이지를 구성
- 예: `HomePage` - Hero, About, Skills 등을 포함

### 3. **Widgets Layer** (`/widgets/`)
- 비즈니스 로직을 포함한 독립적인 UI 블록
- 페이지의 큰 섹션을 담당 (Hero, About, Projects 등)
- 각 위젯은 자체적으로 완결된 기능을 제공

#### 위젯 구조:
```
widgets/
└── Hero/
    ├── ui/           # UI 컴포넌트
    │   └── Hero.tsx
    └── index.ts      # 공개 API (export)
```

### 4. **Shared Layer** (`/shared/`)
- 애플리케이션 전역에서 재사용되는 코드
- 비즈니스 로직과 무관한 순수 유틸리티
- 예: 공통 훅, 컴포넌트, 유틸 함수

## 📝 수정 가이드

### 새로운 섹션 추가하기

1. **위젯 생성**
```bash
widgets/
└── NewSection/
    ├── ui/
    │   └── NewSection.tsx
    └── index.ts
```

2. **컴포넌트 작성** (`widgets/NewSection/ui/NewSection.tsx`)
```tsx
/**
 * NewSection Widget
 * 
 * @description
 * 새로운 섹션에 대한 설명
 * 
 * @features
 * - 기능 1
 * - 기능 2
 */

import { useScrollAnimation } from '../../../shared/lib/hooks/useScrollAnimation';

export function NewSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="new-section">
      {/* 내용 */}
    </section>
  );
}
```

3. **공개 API 작성** (`widgets/NewSection/index.ts`)
```tsx
export { NewSection } from './ui/NewSection';
```

4. **HomePage에 추가** (`pages/HomePage/ui/HomePage.tsx`)
```tsx
import { NewSection } from '../../../widgets/NewSection/ui/NewSection';

// ...
<main>
  <Hero />
  <About />
  <NewSection />  {/* 새 섹션 추가 */}
  <Contact />
</main>
```

5. **NavigationDots에 추가** (`widgets/NavigationDots/ui/NavigationDots.tsx`)
```tsx
const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "new-section", label: "New" },  // 새 섹션 추가
  // ...
];
```

### 프로젝트 데이터 수정하기

**위치**: `widgets/Projects/ui/Projects.tsx`

```tsx
const projects = [
  {
    id: "new-project",           // 프로젝트 고유 ID
    title: "프로젝트 이름",
    description: "프로젝트 설명",
    tags: ["React", "TypeScript"], // 기술 스택
    gradient: "from-blue-50 to-indigo-50", // 배경 그라데이션
    hasDetailPage: true           // 상세 페이지 유무
  },
  // ...
];
```

### 기술 스택 수정하기

**위치**: `widgets/Skills/ui/Skills.tsx`

```tsx
const skills = [
  { name: "JavaScript", color: "#F7DF1E" },  // 기술명, 브랜드 컬러
  { name: "React", color: "#61DAFB" },
  // 새로운 기술 추가...
];
```

### 경력/교육 이력 수정하기

**위치**: `widgets/Experience/ui/Experience.tsx`

```tsx
const timeline = [
  {
    type: "education",                    // "education" | "certificate"
    icon: GraduationCap,                 // lucide-react 아이콘
    title: "기관명 또는 자격증명",
    period: "2025.02 - 2025.07",         // 기간
    description: "간단한 설명"
  },
  // ...
];
```

### 네비게이션 섹션 추가하기

**위치**: `widgets/NavigationDots/ui/NavigationDots.tsx`

```tsx
const navItems: NavItem[] = [
  { id: "hero", label: "Home" },        // 섹션 id, 표시 레이블
  { id: "new-section", label: "New" },  // 새 섹션 추가
  // ...
];
```

### Engineering Background 섹션 수정하기

**위치**: `widgets/EngineeringBackground/ui/EngineeringBackground.tsx`

Engineering Background 섹션은 기계공학 프로젝트를 카드 형태로 표시합니다.

#### 프로젝트 추가/수정
```tsx
const projects = [
  {
    caption: "프로젝트 카테고리",           // 예: "CAE Competition"
    title: "프로젝트 제목",
    description: "프로젝트 핵심 성과 (1-2줄)",
    tags: ["도구1", "도구2"],              // 사용한 도구/기술
    image: "이미지 URL"                    // Unsplash URL
  },
  // 새 프로젝트 추가...
];
```

#### 레이아웃 변경
- 현재: 반응형 그리드 (모바일 1열, 태블릿 2열, 데스크톱 4열)
- 그리드 열 수 변경: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  - `lg:grid-cols-3`으로 변경하면 데스크톱에서 3열 표시

## 🎨 스타일 수정하기

### 디자인 시스템 컬러
**위치**: `/styles/globals.css`

```css
:root {
  --primary: #0064FF;        /* 메인 액센트 컬러 */
  --foreground: #202632;     /* 텍스트 컬러 */
  --background: #F9FAFB;     /* 배경 컬러 */
  --muted-foreground: #717182; /* 보조 텍스트 컬러 */
}
```

## 🔄 Import 규칙

### 상대 경로 사용
FSD에서는 명확한 의존성 관리를 위해 상대 경로를 사용합니다:

```tsx
// ✅ 올바른 예
import { useScrollAnimation } from '../../../shared/lib/hooks/useScrollAnimation';

// ❌ 잘못된 예
import { useScrollAnimation } from '@/shared/lib/hooks/useScrollAnimation';
```

### 레이어별 Import 규칙
- **상위 레이어는 하위 레이어만 import 가능**
  - App → Pages → Widgets → Shared
  - Shared는 다른 레이어를 import하면 안 됨

## 📚 주석 작성 규칙

모든 파일과 함수에는 JSDoc 스타일의 주석을 작성합니다:

```tsx
/**
 * 컴포넌트/함수 이름
 * 
 * @description
 * 상세 설명
 * 
 * @features (위젯/페이지의 경우)
 * - 기능 1
 * - 기능 2
 * 
 * @param {타입} 파라미터명 - 파��미터 설명
 * @returns {타입} 반환값 설명
 * 
 * @example (필요시)
 * ```tsx
 * <Component prop="value" />
 * ```
 * 
 * @todo (개선사항이 있는 경우)
 * - TODO 항목
 */
```

## 🚀 다음 단계

1. **프로젝트 상세 페이지를 Pages 레이어로 이동**
   - `components/ProjectDetail*.tsx` → `pages/ProjectDetail*/`

2. **Features 레이어 도입 고려**
   - 프로젝트가 커지면 features 레이어를 추가할 수 있습니다

3. **타입 정의 분리**
   - `shared/types/` 디렉토리에 공통 타입 정의

## ✅ FSD 구조 체크리스트

새로운 기능을 추가할 때 다음 사항을 확인하세요:

### 새 위젯 추가 시
- [ ] `widgets/WidgetName/ui/WidgetName.tsx` 파일 생성
- [ ] `widgets/WidgetName/index.ts` 공개 API 파일 생성
- [ ] 컴포넌트에 JSDoc 주석 추가
- [ ] `pages/HomePage/ui/HomePage.tsx`에 import 및 추가
- [ ] `widgets/NavigationDots/ui/NavigationDots.tsx`에 네비게이션 아이템 추가
- [ ] 섹션에 `id` 속성 부여 (네비게이션용)
- [ ] 필요시 `useScrollAnimation` 훅 적용

### Import 경로 규칙
- [ ] 상대 경로 사용 (`../../../shared/...`)
- [ ] `@/` 별칭 사용하지 않기
- [ ] 레이어 의존성 규칙 준수 (상위 → 하위만 가능)

### 코드 품질
- [ ] 모든 함수에 주석 작성
- [ ] `@todo` 태그로 수정 가능한 부분 표시
- [ ] 하드코딩된 데이터는 배열/객체로 분리
- [ ] 반응형 디자인 고려 (Tailwind breakpoints)

## 📖 참고 자료

- [FSD 공식 문서](https://feature-sliced.design/)
- [FSD 한글 가이드](https://feature-sliced.design/kr/)

---

## 🎯 실전 예시

### 예시 1: Engineering Background 위젯 추가

이 섹션은 실제로 FSD 구조를 따라 추가한 예시입니다:

1. ✅ `widgets/EngineeringBackground/` 디렉토리 생성
2. ✅ `ui/EngineeringBackground.tsx` 컴포넌트 작성 (주석 포함)
3. ✅ `index.ts` 공개 API 작성
4. ✅ `HomePage`에 import 및 렌더링
5. ✅ `NavigationDots`에 "Engineering" 아이템 추가
6. ✅ 스크롤 애니메이션 적용
7. ✅ 반응형 그리드 레이아웃 구현

### 예시 2: 프로젝트 상세 페이지 추가 (4개의 Engineering 프로젝트)

Engineering Background의 4개 프로젝트 상세 페이지를 FSD 구조로 추가한 과정:

1. ✅ 각 프로젝트별 `pages/ProjectDetail{Name}/` 디렉토리 생성:
   - `ProjectDetailVerticalMouse/` (버티컬 마우스 구조 해석)
   - `ProjectDetailCarRoofBox/` (자동차 툴레 후류 현상 분석)
   - `ProjectDetailAutomationMachine/` (자동화 소분 기계)
   - `ProjectDetailGalaxyZFlip/` (Galaxy Z Flip 개선 설계)

2. ✅ 각 디렉토리에 `ui/{ComponentName}.tsx` 페이지 컴포넌트 작성
   - Hero Section (H1 제목, H3 부제, 기술 태그)
   - Content Section (이미지, Project Summary, 상세 정보 그리드)
   - Navigation (Back to Main 버튼)

3. ✅ 각 디렉토리에 `index.ts` 공개 API 작성

4. ✅ `App.tsx`에 라우팅 추가:
   - ViewType에 4개 프로젝트 ID 추가
   - import 4개 추가
   - 라우팅 로직에 4개 케이스 추가

5. ✅ `EngineeringBackground` 위젯에서 클릭 이벤트 연결:
   - onProjectClick prop 추가
   - 각 프로젝트에 projectId 설정
   - 클릭 핸들러 구현

6. ✅ `HomePage`에서 EngineeringBackground에 onProjectClick 전달

이 과정을 참고하여 새로운 페이지나 섹션을 추가할 수 있습니다.
