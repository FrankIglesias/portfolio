import { GitHubLogoIcon, IdCardIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const socialLinks = [
	{
		icon: GitHubLogoIcon,
		link: 'https://github.com/FrankIglesias',
		label: 'GitHub',
	},
	{
		icon: LinkedInLogoIcon,
		link: 'https://www.linkedin.com/in/francisco-janin-iglesias/',
		label: 'LinkedIn',
	},
];

const RESUME_PDF = 'https://go-mailer.franciscojiglesias.vercel.app/CV.pdf';

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 h-screen w-[50px] p-[10px] z-10 border-r border-gray-500 flex flex-col justify-between items-center max-[900px]:pb-[75px]">
			<a
				href="/"
				className="font-bebas no-underline text-white text-sm leading-none [writing-mode:vertical-lr] rotate-180"
			>
				<span>{'< / >'}</span>
			</a>
			<div className="flex flex-col gap-2">
				{socialLinks.map((social) => (
					<a
						key={social.label}
						href={social.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center text-white"
						aria-label={social.label}
					>
						<social.icon width={24} height={24} />
					</a>
				))}
				<a
					href={RESUME_PDF}
					download
					className="flex items-center justify-center text-white"
					aria-label="Download resume"
				>
					<IdCardIcon width={24} height={24} />
				</a>
			</div>
		</nav>
	);
}
