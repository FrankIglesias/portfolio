'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import ExperienceCard from './ExperienceCard';
import positions from '../data/experience';

interface ExperienceSectionProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export default function ExperienceSection({ scrollContainerRef }: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lockedRef = useRef(false);
  const activeIndexRef = useRef(0);

  function navigate(direction: 1 | -1) {
    if (lockedRef.current) return;
    lockedRef.current = true;

    const next = activeIndexRef.current + direction;

    if (next >= 0 && next < positions.length) {
      activeIndexRef.current = next;
      setActiveIndex(next);
    } else if (direction === 1) {
      const container = scrollContainerRef.current;
      const portfolio = document.getElementById('portfolio');
      if (container && portfolio) {
        container.scrollTo({ top: portfolio.offsetTop, behavior: 'smooth' });
      }
    } else {
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    setTimeout(() => { lockedRef.current = false; }, 700);
  }

  // Wheel — accumulate delta and only navigate once threshold is reached
  useEffect(() => {
    const THRESHOLD = 80;
    let accumulated = 0;
    let resetTimer: ReturnType<typeof setTimeout> | null = null;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      accumulated += e.deltaY;

      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => { accumulated = 0; }, 200);

      if (Math.abs(accumulated) >= THRESHOLD) {
        navigate(accumulated > 0 ? 1 : -1);
        accumulated = 0;
      }
    };
    const section = document.getElementById('experience');
    section?.addEventListener('wheel', onWheel, { passive: false });
    return () => section?.removeEventListener('wheel', onWheel);
  }, []);

  // Touch
  useEffect(() => {
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 30) return;
      navigate(delta > 0 ? 1 : -1);
    };
    const section = document.getElementById('experience');
    section?.addEventListener('touchstart', onTouchStart);
    section?.addEventListener('touchend', onTouchEnd);
    return () => {
      section?.removeEventListener('touchstart', onTouchStart);
      section?.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  function jumpTo(i: number) {
    if (lockedRef.current) return;
    lockedRef.current = true;
    activeIndexRef.current = i;
    setActiveIndex(i);
    setTimeout(() => { lockedRef.current = false; }, 700);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-[60px] leading-15.5" style={{ fontFamily: 'var(--font-bebas), cursive' }}>
          Job experience
        </h1>
        <button
          onClick={() => {
            const container = scrollContainerRef.current;
            const portfolio = document.getElementById('portfolio');
            if (container && portfolio) container.scrollTo({ top: portfolio.offsetTop, behavior: 'smooth' });
          }}
          className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Go to portfolio"
        >
          <ArrowDownIcon width={18} height={18} />
        </button>
      </div>
      <div className="flex-1 flex flex-row gap-12 overflow-hidden">
        {/* Vertical dots */}
        <div className="flex flex-col justify-center gap-1 shrink-0">
          {positions.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className="flex items-center justify-center w-6 py-1 cursor-pointer"
              aria-label={`Go to position ${i + 1}`}
            >
              <span
                className="rounded-full transition-all duration-300"
                style={{
                  width: '10px',
                  height: i === activeIndex ? '28px' : '10px',
                  background: i === activeIndex ? '#fff' : 'rgba(255,255,255,0.3)',
                  display: 'block',
                }}
              />
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="flex-1 relative overflow-hidden">
          {positions.map((position, i) => (
            <div
              key={`${position.title}-${position.company}`}
              className="absolute inset-0 flex items-center transition-all duration-500 ease-in-out"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transform: i === activeIndex
                  ? 'translateY(0)'
                  : i < activeIndex
                    ? 'translateY(-120px)'
                    : 'translateY(120px)',
                pointerEvents: i === activeIndex ? 'auto' : 'none',
              }}
            >
              <ExperienceCard position={position} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
