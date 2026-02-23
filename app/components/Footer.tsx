export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-5 text-center text-sm opacity-60 max-[900px]:text-xs max-[900px]:py-3">
      Feel free to check{' '}
      <a
        className="underline hover:opacity-80"
        href="https://www.github.com/FrankIglesias/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        the repository
      </a>{' '}
      on Github.
    </footer>
  );
}
