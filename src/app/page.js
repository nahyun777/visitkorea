"use client";

import { useRef } from 'react';

export default function Home() {
  const contentRef = useRef(null);

  const handleScrollDown = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      <div className="hero">
        <div className="bg-panel-container">
          <div className="bg-panel" style={{ backgroundImage: "url('/hero.jpg')" }} />
          <div
            className="bg-panel"
            style={{
              backgroundImage: "url('/m.jpg')",
            }}
          />
          <div className="bg-panel" style={{ backgroundImage: "url('/h.jpg')" }} />
        </div>
        <div className="hero-text">

          <h1>BEACH</h1>
        </div>
        <div className="scroll-down" onClick={handleScrollDown}>
          <span>scroll</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L7 14M12 19L17 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="content-container">
        <div ref={contentRef} className="content-section">
          <div className="content-left image-container">
            <img src="/hero.jpg" alt="Hero Image" className="content-image" />
          </div>
          <div className="content-right">
            <h2>협재 해수욕장</h2>
            <p>제주 제주시 한림읍 협재리 2497-1</p>
          </div>
        </div>
        <div className="content-section">
          <div className="content-left">
            <h2>함덕 해수욕장</h2>
            <p>제주 제주시 조천읍 조함해안로 525</p>
          </div>
          <div className="content-right image-container">
            <img src="/m.jpg" alt="M Image" className="content-image" />
          </div>
        </div>
        <div className="content-section">
          <div className="content-left image-container">
            <img src="/h.jpg" alt="H Image" className="content-image" />
          </div>
          <div className="content-right">
            <h2>월정리 해수욕장</h2>
            <p>제주 제주시 구좌읍 해맞이해안로 481 485,</p>
          </div>
        </div>
      </div>
    </main>
  );
}
