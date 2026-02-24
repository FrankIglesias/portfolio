'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useEffect, useMemo, useState } from 'react';
import styles from './PortfolioSection.module.css';
import ProjectCard from './ProjectCard';

interface Repo {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	language: string | null;
}

const ITEMS_DESKTOP = 12;
const ITEMS_MOBILE = 9;

export default function PortfolioSection() {
	const [projects, setProjects] = useState<Repo[]>([]);
	const [langs, setLangs] = useState<string[]>([]);
	const [selectedLang, setSelectedLang] = useState('');
	const [page, setPage] = useState(1);
	const [itemsCount, setItemsCount] = useState(ITEMS_DESKTOP);

	useEffect(() => {
		setItemsCount(window.innerWidth > 900 ? ITEMS_DESKTOP : ITEMS_MOBILE);
	}, []);

	useEffect(() => {
		fetch('https://api.github.com/users/Frankiglesias/repos?type=owner', {
			headers: { accept: 'application/vnd.github.mercy-preview+json' },
		})
			.then((res) => res.json())
			.then((data: Repo[]) => {
				setProjects(data);
				const uniqueLangs = Object.keys(
					data.reduce<Record<string, number>>((acc, project) => {
						if (project.language) acc[project.language] = 1;
						return acc;
					}, {}),
				);
				setLangs(uniqueLangs);
			})
			.catch(() => {});
	}, []);

	const filteredProjects = useMemo(
		() => projects.filter((p) => (selectedLang ? p.language === selectedLang : true)),
		[projects, selectedLang],
	);

	const totalPages = Math.ceil(filteredProjects.length / itemsCount);
	const paginatedProjects = filteredProjects.slice((page - 1) * itemsCount, page * itemsCount);

	function handleLangChange(lang: string) {
		setSelectedLang(lang);
		setPage(1);
	}

	return (
		<div className="column full-height">
			<h1 className="title">Portfolio</h1>

			{filteredProjects.length > 0 && (
				<div className={styles.filterGroup}>
					<div className={styles.radioInput}>
						<input
							type="radio"
							id="all"
							name="lang"
							checked={selectedLang === ''}
							onChange={() => handleLangChange('')}
						/>
						<label htmlFor="all">All</label>
					</div>
					{langs.map((lang) => (
						<div key={lang} className={styles.radioInput}>
							<input
								type="radio"
								id={lang}
								name="lang"
								checked={selectedLang === lang}
								onChange={() => handleLangChange(lang)}
							/>
							<label htmlFor={lang}>{lang}</label>
						</div>
					))}
				</div>
			)}
			<div className="column">
				<div className={styles.projectsContainer}>
					{paginatedProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
			{totalPages > 1 && (
				<div className={`row ${styles.pageButtons}`}>
					{page !== 1 && (
						<button
							type="button"
							className="text-lg"
							onClick={() => setPage(page - 1)}
							aria-label="Previous page"
						>
							<ArrowLeftIcon width={24} height={24} />
						</button>
					)}
					{page !== totalPages && (
						<button
							type="button"
							className="text-lg"
							onClick={() => setPage(page + 1)}
							aria-label="Next page"
						>
							<ArrowRightIcon width={24} height={24} />
						</button>
					)}
				</div>
			)}
		</div>
	);
}
