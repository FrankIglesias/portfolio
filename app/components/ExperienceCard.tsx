import type { Position } from '../data/experience';

interface ExperienceCardProps {
  position: Position;
}

export default function ExperienceCard({ position }: ExperienceCardProps) {
  return (
    <div className="flex flex-col w-full max-w-2xl">
      <span
        className="text-[48px] leading-13 before:content-['>>_']"
        style={{ fontFamily: 'var(--font-bebas), cursive' }}
      >
        {position.title}
      </span>
      <span style={{ fontFamily: 'var(--font-bebas), cursive' }} className="text-[26px] opacity-80">
        {position.company} · {position.location}
      </span>
      <span className="text-base opacity-60 mt-1">{position.startDate} – {position.endDate}</span>
      <span className="max-[900px]:hidden mt-4 leading-relaxed text-lg">
        {position.description}
      </span>
    </div>
  );
}
