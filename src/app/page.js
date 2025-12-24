"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { getAllBeaches } from '@/data/beaches';

export default function Home() {
  const contentRef = useRef(null);
  const beaches = getAllBeaches();

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
        <Link
          href="/beach/hyeopjae"
          ref={contentRef}
          className="content-section clickable-section group"
        >
          <div className="content-left image-container">
            <img src="/hero.jpg" alt="협재 해수욕장" className="content-image" />
          </div>
          <div className="content-right">
            <h2 className="group-hover:beach-title-underline">협재 해수욕장</h2>
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              제주 제주시 한림읍 협재리 2497-1
            </p>
            <div className="mt-4 text-[#1E90FF] font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              자세히 보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
        <Link
          href="/beach/hamdeok"
          className="content-section clickable-section group"
        >
          <div className="content-left">
            <h2 className="group-hover:beach-title-underline">함덕 해수욕장</h2>
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              제주 제주시 조천읍 조함해안로 525
            </p>
            <div className="mt-4 text-[#1E90FF] font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              자세히 보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="content-right image-container">
            <img src="/m.jpg" alt="함덕 해수욕장" className="content-image" />
          </div>
        </Link>
        <Link
          href="/beach/woljeong"
          className="content-section clickable-section group"
        >
          <div className="content-left image-container">
            <img src="/h.jpg" alt="월정리 해수욕장" className="content-image" />
          </div>
          <div className="content-right">
            <h2 className="group-hover:beach-title-underline">월정리 해수욕장</h2>
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[#1E90FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              제주 제주시 구좌읍 해맞이해안로 481 485,
            </p>
            <div className="mt-4 text-[#1E90FF] font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
              자세히 보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
