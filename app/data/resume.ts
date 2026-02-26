export interface Position {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	startYear: number;
	endYear: number;
}

export interface Certification {
	name: string;
}

export interface ResumeBasics {
	name: string;
	title: string;
	location: string;
	email: string;
	phone: string;
	linkedin: string;
	github: string;
	summary: string;
}

export interface ResumeSkills {
	frontend: string[];
	backend: string[];
	tools: string[];
	languages: string[];
}

export const basics: ResumeBasics = {
	name: 'Francisco Iglesias',
	title: 'Tech Lead & Senior Frontend Engineer',
	location: 'Munich, Germany',
	email: 'ifrancisco.iglesias@gmail.com',
	phone: '+34 660 08 58 32',
	linkedin: 'linkedin.com/in/ignacio-francisco-janin-iglesias',
	github: 'github.com/FrankIglesias',
	summary:
		'Tech Lead and Senior Frontend Engineer with 8+ years of experience building scalable web applications and leading high-performing engineering teams. Currently driving frontend architecture and engineering excellence at Tree-Nation, a global reforestation platform. Proven track record of owning the full frontend lifecycle — from technical design and code review to mentoring engineers and aligning with product and business stakeholders.',
};

export const skills: ResumeSkills = {
	frontend: ['React', 'Angular', 'Vue', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'HTML', 'CSS'],
	backend: ['Node.js', 'NestJS', 'Express', 'Python'],
	tools: ['AWS', 'Heroku', 'Git', 'Scrum', 'Agile'],
	languages: ['Spanish (Native)', 'English (Bilingual)', 'French (Limited Working)'],
};

export const experience: Position[] = [
	{
		title: 'Technical Lead',
		company: 'Tree-Nation',
		location: 'Barcelona, Spain',
		startDate: '2025-06',
		endDate: 'Present',
		description:
			'Leading engineering teams to build scalable, high-quality web applications. Bridging technical strategy with hands-on development to drive product innovation and team growth.',
	},
	{
		title: 'Podcast Co-Host',
		company: 'Frontend Army',
		location: 'Barcelona, Spain',
		startDate: '2022-06',
		endDate: 'Present',
		description:
			'Co-hosting a Spanish-language podcast dedicated to frontend development, sharing practical insights, trends, and interviews with developers to inspire and grow the tech community.',
	},
	{
		title: 'Senior Frontend Engineer',
		company: 'Tree-Nation',
		location: 'Barcelona, Spain',
		startDate: '2024-06',
		endDate: '2025-06',
		description:
			"Built and maintained high-performance frontend features for Tree-Nation's platform, helping users and companies track their global reforestation impact through intuitive, modern interfaces.",
	},
	{
		title: 'Sr. Frontend Engineer',
		company: 'Deel',
		location: 'Barcelona, Spain',
		startDate: '2023-06',
		endDate: '2024-08',
		description:
			"Developed scalable frontend solutions at one of the world's leading global payroll and HR platforms. Delivered key product features in a fast-paced, fully distributed international team.",
	},
	{
		title: 'Sr. Front-End Engineer',
		company: 'Ankorstore',
		location: 'France',
		startDate: '2022-07',
		endDate: '2023-06',
		description:
			'Drove frontend development for the Growth tribe at Ankorstore, a B2B wholesale marketplace empowering independent brands and retailers across Europe. Focused on conversion optimization and scalable UI solutions.',
	},
	{
		title: 'Sr. Front-End Engineer',
		company: 'True North',
		location: 'Buenos Aires, Argentina',
		startDate: '2020-12',
		endDate: '2022-06',
		description:
			'Crafted full-stack web applications for diverse client projects using Next.js, React, Python, Nest, and Express — delivering clean, performant code across modern tech stacks.',
	},
	{
		title: 'Solutions Designer',
		company: 'Wolox (part of Accenture)',
		location: 'Argentina',
		startDate: '2020-02',
		endDate: '2020-08',
		description:
			'Served as a technical member of the sales team at Accenture, uncovering client needs, proposing tailored solutions, and optimizing estimation processes to drive stakeholder satisfaction.',
	},
	{
		title: 'Engineering Manager',
		company: 'Wolox (part of Accenture)',
		location: 'Argentina',
		startDate: '2019-08',
		endDate: '2020-08',
		description:
			'Led frontend engineering teams at Accenture, setting technical standards, mentoring senior developers, and ensuring quality delivery of frontend projects while contributing as a technical advisor in sales.',
	},
	{
		title: 'Front End Technical Leader',
		company: 'Wolox (part of Accenture)',
		location: 'Argentina',
		startDate: '2018-06',
		endDate: '2019-08',
		description:
			'Led cross-functional development teams of up to 9 at Accenture, managing project plans, Scrum ceremonies, and client communications to deliver high-quality software on time. Grew into a frontend technical leadership role — spearheading tech talks, mentoring developers, coordinating projects, and guiding the career growth of the frontend team.',
	},
	{
		title: 'Software Developer',
		company: 'Wolox (part of Accenture)',
		location: 'Argentina',
		startDate: '2017-06',
		endDate: '2018-10',
		description:
			'Started as a Front-End developer building solutions across education, e-commerce, and banking industries, using JS, CSS, HTML, React, React Native, Angular & Vue, hosted on Heroku and AWS. Grew into a lead role taking technical ownership across multiple projects.',
	},
];

export const education: Education[] = [
	{
		institution: 'Universidad Tecnológica Nacional',
		degree: 'Engineering',
		field: 'Systems Engineering',
		startYear: 2014,
		endYear: 2019,
	},
];

export const certifications: Certification[] = [
	{ name: 'Scrum Foundation Professional Certificate' },
	{ name: 'First Certificate in English (FCE)' },
];
