"use client";

import { useParams, useRouter } from 'next/navigation';
import { getBeachById } from '@/data/beaches';
import { useEffect, useState } from 'react';

export default function BeachDetail() {
  const params = useParams();
  const router = useRouter();
  const [beach, setBeach] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const beachData = getBeachById(params.id);
    if (!beachData) {
      router.push('/');
      return;
    }
    setBeach(beachData);
    setIsLoading(false);
  }, [params.id, router]);

  if (isLoading || !beach) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse">
          <div className="h-12 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-[#2C3E50] font-medium hover:text-[#1E90FF] transition-all duration-200 hover:-translate-x-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>돌아가기</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px] mt-[70px] overflow-hidden">
        <img
          src={beach.image}
          alt={beach.name}
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        
        {/* Title */}
        <h1 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-5xl md:text-6xl font-bold text-center w-full px-4 z-10 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
          {beach.name}
        </h1>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#1E90FF] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-sm text-[#7F8C8D] font-medium mb-2">주소</div>
            <div className="text-lg text-[#2C3E50] font-semibold">{beach.address}</div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#1E90FF] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-sm text-[#7F8C8D] font-medium mb-2">운영시간</div>
            <div className="text-lg text-[#2C3E50] font-semibold">{beach.hours}</div>
            <div className="text-sm text-[#7F8C8D] mt-2">{beach.openSeason}</div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#1E90FF] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-sm text-[#7F8C8D] font-medium mb-2">연락처</div>
            <div className="text-lg text-[#2C3E50] font-semibold">{beach.contact}</div>
          </div>

          {/* Parking Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
            <div className="text-[#1E90FF] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <div className="text-sm text-[#7F8C8D] font-medium mb-2">주차</div>
            <div className="text-lg text-[#2C3E50] font-semibold">{beach.parking}</div>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-6 pb-4 relative">
            소개
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#1E90FF] to-[#FF7F50] rounded-full"></span>
          </h2>
          <p className="text-lg leading-relaxed text-[#555] whitespace-pre-line">
            {beach.description}
          </p>
        </div>

        {/* Facilities Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-8 pb-4 relative">
            부대시설
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#1E90FF] to-[#FF7F50] rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {beach.facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-[#F8F9FA] rounded-xl hover:bg-[#1E90FF] hover:text-white hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">
                  {getFacilityIcon(facility)}
                </div>
                <div className="text-base font-medium text-center">
                  {facility}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attractions */}
        {beach.nearby && beach.nearby.length > 0 && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-8 pb-4 relative">
              주변 명소
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#1E90FF] to-[#FF7F50] rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {beach.nearby.map((place, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1E90FF]/5 to-[#FF7F50]/5 border-2 border-[#E0E0E0] rounded-xl p-6 text-center hover:border-[#1E90FF] transition-all duration-300"
                >
                  <div className="text-xl font-semibold text-[#2C3E50]">{place}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// Helper function to get facility icons
function getFacilityIcon(facility) {
  const icons = {
    '주차장': '🅿️',
    '샤워실': '🚿',
    '화장실': '🚻',
    '탈의실': '👔',
    '편의점': '🏪',
    '식당': '🍽️',
    '파라솔 대여': '⛱️',
    '튜브 대여': '🏊',
    '카페거리': '☕'
  };
  return icons[facility] || '✓';
}

