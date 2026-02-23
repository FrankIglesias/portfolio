interface Position {
  title: string;
  date: string;
  description: string;
}

interface ExperienceCardProps {
  position: Position;
}

export default function ExperienceCard({ position }: ExperienceCardProps) {
  return (
    <div className="flex flex-col max-w-[500px] my-5">
      <span
        className="text-[32px] leading-[34px] before:content-['>>_']"
        style={{ fontFamily: 'var(--font-bebas), cursive' }}
      >
        {position.title}
      </span>
      <span>{position.date}</span>
      <span
        className="max-[900px]:hidden"
        dangerouslySetInnerHTML={{ __html: position.description }}
      />
    </div>
  );
}
