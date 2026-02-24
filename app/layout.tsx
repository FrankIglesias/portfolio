import type { Metadata } from 'next';
import { Bebas_Neue, Open_Sans } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--nextfont-bebas',
});

const openSans = Open_Sans({
	subsets: ['latin'],
	variable: '--nextfont-open',
});

export const metadata: Metadata = {
	title: 'Francisco Iglesias',
	description:
		'Tech Lead at Tree Nation and podcast co-host at Frontend Army. Frontend engineer specialising in architecture, engineering excellence, and building high-quality web products.',
	icons: {
		icon: '/favicon.png',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${bebasNeue.variable} ${openSans.variable}`}
			suppressHydrationWarning
		>
			<body>{children}</body>
		</html>
	);
}
