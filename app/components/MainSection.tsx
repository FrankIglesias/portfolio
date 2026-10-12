export default function MainSection() {
	return (
		<div className="flex flex-row items-center h-full justify-between">
			<div className="flex flex-col">
				<h1 className="font-bebas text-[60px] leading-15.5">Francisco Iglesias</h1>
				<h2 className="font-bebas text-[32px] leading-8.5">
					Senior Frontend Engineer @ Qonto
					<br />
					Podcast Co-Host @ Frontend Army
				</h2>
				<span className="text-base leading-relaxed max-w-lg">
					Building scalable frontend solutions within the Accounts Receivable team at Qonto, a
					leading European fintech. Delivering product features, improving user experiences, and
					collaborating closely with product, design, and engineering to help businesses streamline
					invoicing, payments, and receivables management.
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
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static safe HTML entity
				dangerouslySetInnerHTML={{ __html: '&lt; /&gt;' }}
			/>
		</div>
	);
}
