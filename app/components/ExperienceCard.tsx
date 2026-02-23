import type { Position } from '../data/experience';

interface ExperienceCardProps {
  position: Position;
}

export default function ExperienceCard({ position }: ExperienceCardProps) {
  return (
    <div className="flex flex-col w-full max-w-2xl">
      <span className="font-bebas text-[48px] leading-13 max-[900px]:text-[32px] max-[900px]:leading-9 before:content-['>>_']">
        {position.title}
      </span>
      <span className="font-bebas text-[26px] max-[900px]:text-[18px] opacity-80">
        {position.company} · {position.location}
      </span>
      <span className="text-base opacity-60 mt-1">{position.startDate} – {position.endDate}</span>
      <span className="mt-4 leading-relaxed text-lg max-[900px]:text-sm">
        {position.description}
      </span>
    </div>
  );
}
