import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <span className="full-width align-text-center">
        Feel free to check{' '}
        <a
          className="link"
          href="https://www.github.com/FrankIglesias/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          the repository
        </a>{' '}
        on Github.
      </span>
    </footer>
  );
}
