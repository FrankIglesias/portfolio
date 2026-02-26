import { basics, certifications, education, experience, skills } from '../data/resume';
import styles from './resume.module.css';

function formatDate(dateStr: string): string {
	if (dateStr === 'Present') return 'Present';
	const [year, month] = dateStr.split('-');
	const date = new Date(Number(year), Number(month) - 1);
	return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export const metadata = {
	title: 'Resume – Francisco Iglesias',
	description: 'Tech Lead & Senior Frontend Engineer with 8+ years of experience.',
};

export default function ResumePage() {
	return (
		<div className={styles.page}>
			{/* Download button — outside the resume, hidden on print */}
			<div className={styles.toolbar}>
				<a href="/api/resume/pdf" className={styles.downloadBtn}>
					Download PDF
				</a>
			</div>

			<div className={styles.container}>
				{/* Header */}
				<header className={styles.header}>
					<div className={styles.headerLeft}>
						<h1 className={styles.name}>{basics.name}</h1>
						<p className={styles.title}>{basics.title}</p>
					</div>
					<div className={styles.contact}>
						<span>{basics.location}</span>
						<a href={`mailto:${basics.email}`}>{basics.email}</a>
						<a href={`https://${basics.linkedin}`} target="_blank" rel="noreferrer">
							{basics.linkedin}
						</a>
						<a href={`https://${basics.github}`} target="_blank" rel="noreferrer">
							{basics.github}
						</a>
					</div>
				</header>

				{/* Summary */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Summary</h2>
					<p className={styles.summary}>{basics.summary}</p>
				</section>

				{/* Skills */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Skills</h2>
					<div className={styles.skillsGrid}>
						<div>
							<span className={styles.skillLabel}>Frontend</span>
							<span className={styles.skillList}>{skills.frontend.join(', ')}</span>
						</div>
						<div>
							<span className={styles.skillLabel}>Backend</span>
							<span className={styles.skillList}>{skills.backend.join(', ')}</span>
						</div>
						<div>
							<span className={styles.skillLabel}>Tools</span>
							<span className={styles.skillList}>{skills.tools.join(', ')}</span>
						</div>
						<div>
							<span className={styles.skillLabel}>Languages</span>
							<span className={styles.skillList}>{skills.languages.join(', ')}</span>
						</div>
					</div>
				</section>

				{/* Experience */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Experience</h2>
					<ul className={styles.experienceList}>
						{experience.map((pos) => (
							<li key={`${pos.title}-${pos.company}-${pos.startDate}`} className={styles.experienceItem}>
								<div className={styles.experienceHeader}>
									<div>
										<span className={styles.jobTitle}>{pos.title}</span>
										<span className={styles.company}> · {pos.company}</span>
									</div>
									<div className={styles.meta}>
										<span>{pos.location}</span>
										<span className={styles.dates}>
											{formatDate(pos.startDate)} – {formatDate(pos.endDate)}
										</span>
									</div>
								</div>
								<p className={styles.description}>{pos.description}</p>
							</li>
						))}
					</ul>
				</section>

				{/* Education */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Education</h2>
					{education.map((edu) => (
						<div key={edu.institution} className={styles.educationItem}>
							<div className={styles.experienceHeader}>
								<div>
									<span className={styles.jobTitle}>{edu.degree}</span>
									<span className={styles.company}> · {edu.field}</span>
								</div>
								<span className={styles.dates}>
									{edu.startYear} – {edu.endYear}
								</span>
							</div>
							<p className={styles.educationInstitution}>{edu.institution}</p>
						</div>
					))}
				</section>

				{/* Certifications */}
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Certifications</h2>
					<ul className={styles.certList}>
						{certifications.map((cert) => (
							<li key={cert.name}>{cert.name}</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}
