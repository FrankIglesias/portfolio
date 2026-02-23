export default function MainSection() {
  return (
    <div className="flex flex-row items-center h-full justify-between">
      <div className="flex flex-col">
        <h1 className="text-[60px] leading-[62px]" style={{ fontFamily: 'var(--font-bebas), cursive' }}>
          Ignacio Francisco Janin Iglesias
        </h1>
        <h2 className="text-[32px] leading-[34px]" style={{ fontFamily: 'var(--font-bebas), cursive' }}>
          Frontend developer
        </h2>
        <span className="text-base leading-[18px] max-w-[300px]">
          I&apos;m a graduate software engineer from UTN. I&apos;m currently
          working at Wolox as Front-End Engineering Manager using technologies
          such as React, Angular and Vue. I also love doing research on new
          technologies and putting them into practice in personal projects.
        </span>
      </div>
      <span
        className="hidden md:block text-transparent text-[500px] leading-[500px] select-none whitespace-nowrap bg-fixed bg-center bg-cover"
        style={{
          fontFamily: 'var(--font-bebas), cursive',
          backgroundImage: "url('/hero_image.jpeg')",
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: '&lt; /&gt;' }}
      />
    </div>
  );
}
