import languages from '../utils/languages';
import styles from './ProjectCard.module.css';

interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const langColor = project.language
    ? { backgroundColor: languages[project.language]?.color ?? undefined }
    : undefined;

  return (
    <a
      className={`column ${styles.project}`}
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={`subtitle double-greater-decoration ${styles.projectName}`}>
        {project.name}
      </span>
      {project.language && (
        <span className={styles.language} style={langColor}>
          {project.language}
        </span>
      )}
      <span className="hide-sm">{project.description}</span>
    </a>
  );
}
