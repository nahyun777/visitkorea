# 해수욕장 상세보기 페이지 구현 계획서

## 1. 현재 상황 분석
- Next.js 프로젝트 (App Router 사용)
- 메인 페이지(`src/app/page.js`)에 3개의 해수욕장 정보가 표시됨
  - 협재 해수욕장
  - 함덕 해수욕장
  - 월정리 해수욕장
- 각 해수욕장은 `content-section` div로 구성되어 있으며, 이미지, 제목, 주소 포함
- 현재는 클릭 기능이 없음

## 2. 구현 목표
각 해수욕장 섹션을 클릭하면 해당 해수욕장의 상세 정보를 보여주는 페이지로 이동

## 3. 라우팅 전략
Next.js App Router의 동적 라우팅(Dynamic Routes) 사용

### 라우팅 경로 설계
- 협재 해수욕장: `/beach/hyeopjae`
- 함덕 해수욕장: `/beach/hamdeok`
- 월정리 해수욕장: `/beach/woljeong`

## 4. 파일 구조 계획

```
src/
  app/
    page.js (메인 페이지 - 수정 필요)
    beach/
      [id]/
        page.js (동적 상세 페이지)
    globals.css (스타일 추가 필요)
  data/
    beaches.js (해수욕장 데이터 관리 파일 - 신규 생성)
```

## 5. 데이터 구조 설계

### beaches.js (데이터 파일)
```javascript
{
  hyeopjae: {
    id: 'hyeopjae',
    name: '협재 해수욕장',
    address: '제주 제주시 한림읍 협재리 2497-1',
    image: '/hero.jpg',
    description: '협재 해수욕장 상세 설명',
    facilities: ['주차장', '샤워실', '화장실'],
    contact: '연락처 정보',
    hours: '운영 시간'
  },
  // hamdeok, woljeong도 동일한 구조
}
```

## 6. 단계별 구현 계획

### Step 1: 데이터 관리 파일 생성
- `src/data/beaches.js` 파일 생성
- 세 해수욕장의 기본 정보 및 상세 정보 정의

### Step 2: 메인 페이지 수정 (`src/app/page.js`)
- Next.js의 `Link` 컴포넌트 import
- 각 `content-section`을 클릭 가능하도록 변경
  - Link 컴포넌트로 감싸기 또는 onClick으로 useRouter 사용
- 해수욕장 데이터를 `beaches.js`에서 import하여 사용

### Step 3: 동적 라우트 생성
- `src/app/beach/[id]/` 디렉토리 생성
- `page.js` 파일 생성 (동적 상세 페이지)

### Step 4: 상세 페이지 컴포넌트 구현
- URL 파라미터로부터 해수욕장 id 추출
- 해당 id의 데이터를 `beaches.js`에서 가져오기
- 상세 정보 표시
  - 큰 이미지
  - 이름
  - 주소
  - 상세 설명
  - 부대시설 정보
  - 연락처
  - 운영시간
- 뒤로가기 버튼 추가

### Step 5: 스타일링
- 상세 페이지의 CSS 스타일 추가
- 클릭 가능한 섹션임을 나타내는 hover 효과 추가
- 반응형 디자인 고려

### Step 6: 404 처리
- 존재하지 않는 해수욕장 id로 접근 시 처리
- Not Found 페이지 또는 메인 페이지로 리다이렉트

## 7. 기술 스택 및 사용할 Next.js 기능

- **Next.js App Router**: 파일 기반 라우팅
- **Dynamic Routes**: `[id]` 폴더 구조
- **Link 컴포넌트**: 클라이언트 사이드 네비게이션
- **useRouter Hook**: 프로그래밍 방식 네비게이션 (필요시)
- **useParams Hook**: URL 파라미터 추출

## 7.5. 디자인 상세 계획

### 7.5.1 디자인 컨셉
- **테마**: 깨끗하고 모던한 제주 바다 느낌
- **분위기**: 차분하고 여유로운, 미니멀리즘
- **핵심 가치**: 가독성, 직관성, 심미성

### 7.5.2 색상 팔레트

#### 주요 색상
- **Primary (바다색)**: `#1E90FF` (DodgerBlue) - 제주 바다를 상징
- **Secondary (모래색)**: `#F5DEB3` (Wheat) - 해변의 모래
- **Accent (산호색)**: `#FF7F50` (Coral) - 포인트 컬러

#### 중립 색상
- **Background**: `#FFFFFF` (흰색) - 깨끗한 배경
- **Text Primary**: `#2C3E50` (진한 회색) - 본문 텍스트
- **Text Secondary**: `#7F8C8D` (회색) - 부가 정보
- **Border**: `#E0E0E0` (연한 회색) - 구분선

#### 상태별 색상
- **Hover**: `rgba(30, 144, 255, 0.1)` - 투명한 파란색 오버레이
- **Active**: `#1873CC` - 어두운 파란색
- **Shadow**: `rgba(0, 0, 0, 0.1)` - 부드러운 그림자

### 7.5.3 타이포그래피

#### 폰트 패밀리
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### 폰트 크기 시스템
- **Hero Title**: `72px` / `48px` (모바일) - 메인 타이틀 "BEACH"
- **H1**: `48px` / `32px` (모바일) - 상세 페이지 제목
- **H2**: `32px` / `24px` (모바일) - 해수욕장 이름
- **H3**: `24px` / `20px` (모바일) - 섹션 제목
- **Body Large**: `18px` - 주요 설명
- **Body**: `16px` - 일반 텍스트
- **Small**: `14px` - 부가 정보, 주소

#### 폰트 굵기
- **Light**: 300 - 부가 정보
- **Regular**: 400 - 일반 텍스트
- **Medium**: 500 - 강조
- **Bold**: 700 - 제목

#### 줄간격
- **제목**: `1.2`
- **본문**: `1.6`
- **작은 텍스트**: `1.4`

### 7.5.4 메인 페이지 디자인 개선

#### A. 해수욕장 섹션 (content-section) 인터랙션
```css
/* 클릭 가능한 카드 스타일 */
.content-section {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.content-section::before {
  /* 호버 시 배경 오버레이 */
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(30, 144, 255, 0.05);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.content-section:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.content-section:hover::before {
  opacity: 1;
}

.content-section:active {
  transform: translateY(-2px);
}
```

#### B. 이미지 처리
- 호버 시 이미지 확대 효과 (`scale(1.05)`)
- 부드러운 트랜지션 (0.5s)
- 오버플로우 hidden으로 이미지가 컨테이너 밖으로 나가지 않도록

#### C. 텍스트 영역
- 제목에 밑줄 애니메이션 추가 (호버 시)
- 주소 아이콘 추가 (📍 또는 SVG)
- "자세히 보기" 텍스트 또는 화살표 아이콘 추가

### 7.5.5 상세 페이지 레이아웃

#### A. 전체 구조
```
┌─────────────────────────────────────┐
│  Header (네비게이션 바)              │
├─────────────────────────────────────┤
│                                     │
│  Hero Image (전체 너비, 높이 60vh)   │
│  + 그라디언트 오버레이               │
│  + 해수욕장 이름 (중앙)              │
│                                     │
├─────────────────────────────────────┤
│  Content Container (max-width)      │
│  ┌───────────────────────────────┐  │
│  │  정보 카드 섹션                │  │
│  │  - 주소                       │  │
│  │  - 운영시간                   │  │
│  │  - 연락처                     │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  상세 설명 섹션                │  │
│  │  (긴 텍스트)                  │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  부대시설 그리드               │  │
│  │  [아이콘] [아이콘] [아이콘]    │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

#### B. Header (네비게이션 바)
```css
/* 상단 고정 헤더 */
.detail-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

/* 뒤로가기 버튼 */
.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  color: #2C3E50;
  font-weight: 500;
  transition: all 0.2s;
}

.back-button:hover {
  color: #1E90FF;
  transform: translateX(-4px);
}
```

#### C. Hero Section (큰 이미지)
```css
.detail-hero {
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

/* 이미지 */
.detail-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 그라디언트 오버레이 */
.detail-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

/* 제목 */
.detail-hero-title {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
  text-align: center;
  width: 100%;
}
```

#### D. 정보 카드 그리드
```css
.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.info-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.info-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.info-card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  color: #1E90FF;
}

.info-card-label {
  font-size: 14px;
  color: #7F8C8D;
  margin-bottom: 8px;
  font-weight: 500;
}

.info-card-value {
  font-size: 18px;
  color: #2C3E50;
  font-weight: 600;
}
```

#### E. 상세 설명 섹션
```css
.description-section {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 24px;
}

.description-title {
  font-size: 32px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 16px;
}

.description-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #1E90FF, #FF7F50);
  border-radius: 2px;
}

.description-text {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  white-space: pre-line;
}
```

#### F. 부대시설 그리드
```css
.facilities-section {
  margin: 60px 0;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.facility-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: #F8F9FA;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.facility-item:hover {
  background: #1E90FF;
  color: white;
  transform: translateY(-4px);
}

.facility-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
}

.facility-name {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
```

### 7.5.6 애니메이션 & 인터랙션

#### A. 페이지 전환 애니메이션
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* 순차적 애니메이션 */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
```

#### B. 스크롤 애니메이션
- Intersection Observer 사용
- 스크롤 시 섹션별로 페이드인
- 부드러운 등장 효과

#### C. 버튼 인터랙션
```css
.button {
  position: relative;
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.button:active::before {
  width: 300px;
  height: 300px;
}
```

### 7.5.7 반응형 디자인 브레이크포인트

#### 모바일 (< 640px)
```css
@media (max-width: 640px) {
  /* 단일 컬럼 레이아웃 */
  .content-section {
    flex-direction: column !important;
  }
  
  /* 폰트 크기 축소 */
  .hero-text h1 { font-size: 48px; }
  .detail-hero-title { font-size: 32px; }
  
  /* 패딩 조정 */
  .content-container { padding: 0 16px; }
  
  /* 버튼 크기 증가 (터치 친화적) */
  .button { min-height: 48px; padding: 12px 24px; }
  
  /* 카드 그리드 단일 컬럼 */
  .info-cards { grid-template-columns: 1fr; }
}
```

#### 태블릿 (640px - 1024px)
```css
@media (min-width: 640px) and (max-width: 1024px) {
  /* 2컬럼 그리드 */
  .info-cards { grid-template-columns: repeat(2, 1fr); }
  .facilities-grid { grid-template-columns: repeat(3, 1fr); }
  
  /* 패딩 조정 */
  .content-container { padding: 0 32px; }
}
```

#### 데스크톱 (> 1024px)
```css
@media (min-width: 1024px) {
  /* 최대 너비 제한 */
  .content-container { 
    max-width: 1200px; 
    margin: 0 auto; 
  }
  
  /* 호버 효과 활성화 */
  .content-section:hover { /* ... */ }
}
```

### 7.5.8 아이콘 시스템

#### 사용할 아이콘
- **주소**: 📍 또는 Location Pin SVG
- **시간**: 🕐 또는 Clock SVG
- **전화**: 📞 또는 Phone SVG
- **주차장**: 🅿️ 또는 Parking SVG
- **샤워실**: 🚿 또는 Shower SVG
- **화장실**: 🚻 또는 Restroom SVG
- **뒤로가기**: ← 또는 Arrow Left SVG

#### 아이콘 라이브러리 옵션
1. **Heroicons** (추천): MIT 라이선스, 모던한 디자인
2. **Lucide Icons**: 가볍고 커스터마이징 용이
3. **React Icons**: 다양한 아이콘 셋 통합

### 7.5.9 로딩 & 에러 상태 디자인

#### 로딩 스켈레톤
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

#### 404 / 에러 페이지
- 중앙 정렬 메시지
- 친근한 일러스트 또는 아이콘
- "홈으로 돌아가기" 버튼
- 밝고 위안이 되는 색상

### 7.5.10 접근성 고려 디자인

#### 색상 대비
- WCAG AA 기준 준수 (최소 4.5:1)
- 텍스트와 배경의 충분한 대비
- 색맹 사용자를 위한 아이콘 + 텍스트 조합

#### 포커스 표시
```css
*:focus-visible {
  outline: 3px solid #1E90FF;
  outline-offset: 2px;
  border-radius: 4px;
}
```

#### 터치 타겟 크기
- 최소 44x44px (모바일)
- 충분한 간격 확보

### 7.5.11 마이크로 인터랙션

#### 좋아요/북마크 버튼 (추후 확장 가능)
- 클릭 시 하트 애니메이션
- 부드러운 바운스 효과

#### 이미지 갤러리 (여러 이미지가 있을 경우)
- 스와이프 제스처 지원
- 썸네일 네비게이션
- 확대/축소 기능

#### 공유 버튼
- 클릭 시 공유 옵션 모달
- 소셜 미디어 공유 링크

### 7.5.12 그림자 시스템 (Elevation)

```css
/* Level 1 - 카드 기본 */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Level 2 - 카드 호버 */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Level 3 - 모달, 드롭다운 */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

/* Level 4 - 상단 고정 헤더 */
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
```

### 7.5.13 Border Radius 시스템

```css
--radius-sm: 8px;   /* 작은 요소 (버튼, 태그) */
--radius-md: 12px;  /* 중간 요소 (카드) */
--radius-lg: 16px;  /* 큰 요소 (섹션, 이미지) */
--radius-xl: 24px;  /* 특별한 요소 */
--radius-full: 9999px; /* 원형 (아바타, 아이콘) */
```

## 8. 고려사항

### 8.1 사용자 경험 (UX)
- 부드러운 페이지 전환
- 로딩 상태 표시 (필요시)
- 뒤로가기 버튼으로 쉬운 네비게이션
- 호버 효과로 클릭 가능함을 명확히 표시

### 8.2 성능
- Next.js의 이미지 최적화 (`next/image` 컴포넌트 사용 고려)
- 정적 생성(SSG) 또는 서버 사이드 렌더링(SSR) 선택

### 8.3 확장성
- 추가 해수욕장 데이터를 쉽게 추가할 수 있도록 구조화
- 데이터 파일을 JSON으로 분리하거나 향후 API 연동 고려

### 8.4 접근성
- 시맨틱 HTML 사용
- 키보드 네비게이션 지원
- alt 태그 적절히 사용

## 9. 테스트 계획
1. 각 해수욕장 섹션 클릭 테스트
2. 상세 페이지 정보 표시 확인
3. 뒤로가기 기능 테스트
4. 존재하지 않는 경로 접근 테스트
5. 반응형 디자인 테스트 (모바일, 태블릿, 데스크톱)

## 10. 구현 순서 요약
1. ✅ `src/data/beaches.js` 생성 및 데이터 정의
2. ✅ `src/app/beach/[id]/page.js` 생성 및 상세 페이지 구현
3. ✅ `src/app/page.js` 수정 - Link 추가
4. ✅ 스타일 추가 및 조정
5. ✅ 테스트 및 디버깅

