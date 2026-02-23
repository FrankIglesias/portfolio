import ExperienceCard from './ExperienceCard';
import positions from '../data/experience';

export default function ExperienceSection() {
  return (
    <div className="flex flex-col h-full justify-center">
      <h1 className="text-[60px] leading-[62px]" style={{ fontFamily: 'var(--font-bebas), cursive' }}>
        Job experience
      </h1>
      <div className="grid grid-cols-3 gap-5 max-[900px]:flex max-[900px]:flex-col">
        {positions.map((position) => (
          <ExperienceCard key={`${position.title}-${position.company}`} position={position} />
        ))}
      </div>
    </div>
  );
}
