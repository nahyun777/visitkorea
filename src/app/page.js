import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">
          <a href="#">VISITKOREA</a>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div className="hero">
        <div className="prize-badge">
          <Image src="/prize.svg" alt="Winner Prize" width={80} height={80} />
        </div>
        <div className="hero-text">
          <h1>WORK</h1>
          <h1>ON THE</h1>
          <h1>BEACH</h1>
        </div>
        <div className="scroll-down">
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
    </main>
  );
}
