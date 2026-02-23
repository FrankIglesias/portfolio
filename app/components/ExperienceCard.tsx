import type { Position } from '../data/experience';

interface ExperienceCardProps {
  position: Position;
}

export default function ExperienceCard({ position }: ExperienceCardProps) {
  return (
    <div className="flex flex-col max-w-125 my-5">
      <span
        className="text-[32px] leading-8.5 before:content-['>>_']"
        style={{ fontFamily: 'var(--font-bebas), cursive' }}
      >
        {position.title}
      </span>
      <span style={{ fontFamily: 'var(--font-bebas), cursive' }} className="text-[18px] opacity-80">
        {position.company} · {position.location}
      </span>
      <span className="text-sm opacity-60">{position.startDate} – {position.endDate}</span>
      <span
        className="max-[900px]:hidden mt-2"
        dangerouslySetInnerHTML={{ __html: position.description }}
      />
    </div>
  );
}
