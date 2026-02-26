import {
	Document,
	Font,
	Page,
	StyleSheet,
	Text,
	View,
	renderToBuffer,
} from '@react-pdf/renderer';
import { basics, certifications, education, experience, skills } from '../../../data/resume';

Font.register({
	family: 'Arial',
	fonts: [
		{ src: 'https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.ttf' },
		{
			src: 'https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVc.ttf',
			fontWeight: 700,
		},
	],
});

const styles = StyleSheet.create({
	page: {
		fontFamily: 'Arial',
		fontSize: 10,
		color: '#1a1a1a',
		paddingTop: 40,
		paddingBottom: 40,
		paddingHorizontal: 48,
		lineHeight: 1.4,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingBottom: 12,
		borderBottomWidth: 1.5,
		borderBottomColor: '#1a1a1a',
		marginBottom: 16,
	},
	headerLeft: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	name: {
		fontSize: 24,
		fontWeight: 700,
		letterSpacing: -0.3,
		lineHeight: 1.1,
		marginBottom: 4,
	},
	jobTitle: {
		fontSize: 10,
		color: '#555',
		lineHeight: 1.3,
	},
	contact: {
		alignItems: 'flex-end',
		gap: 2,
	},
	contactText: {
		fontSize: 9,
		color: '#555',
	},
	section: {
		marginBottom: 16,
	},
	sectionTitle: {
		fontSize: 8,
		fontWeight: 700,
		letterSpacing: 1.2,
		textTransform: 'uppercase',
		color: '#1a1a1a',
		marginBottom: 8,
		paddingBottom: 3,
		borderBottomWidth: 0.5,
		borderBottomColor: '#ccc',
	},
	summaryText: {
		fontSize: 10,
		color: '#333',
		lineHeight: 1.6,
	},
	skillsRow: {
		flexDirection: 'row',
		gap: 4,
		marginBottom: 3,
	},
	skillLabel: {
		fontSize: 9.5,
		fontWeight: 700,
		color: '#1a1a1a',
		width: 60,
	},
	skillValue: {
		fontSize: 9.5,
		color: '#444',
		flex: 1,
	},
	expItem: {
		marginBottom: 12,
	},
	expHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 3,
	},
	expTitleRow: {
		flex: 1,
	},
	expTitle: {
		fontSize: 10.5,
		fontWeight: 700,
		color: '#1a1a1a',
	},
	expCompany: {
		fontSize: 10,
		color: '#444',
	},
	expMeta: {
		alignItems: 'flex-end',
	},
	expLocation: {
		fontSize: 9,
		color: '#777',
	},
	expDates: {
		fontSize: 9,
		color: '#777',
	},
	expDesc: {
		fontSize: 9.5,
		color: '#444',
		lineHeight: 1.55,
	},
	eduItem: {
		marginBottom: 6,
	},
	eduHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	eduDegree: {
		fontSize: 10.5,
		fontWeight: 700,
	},
	eduField: {
		fontSize: 10,
		color: '#444',
	},
	eduInstitution: {
		fontSize: 9.5,
		color: '#666',
		marginTop: 2,
	},
	certItem: {
		fontSize: 9.5,
		color: '#444',
		marginBottom: 3,
	},
});

function formatDate(dateStr: string): string {
	if (dateStr === 'Present') return 'Present';
	const [year, month] = dateStr.split('-');
	const date = new Date(Number(year), Number(month) - 1);
	return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function ResumeDocument() {
	return (
		<Document title="Francisco Iglesias – Resume" author={basics.name}>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<Text style={styles.name}>{basics.name}</Text>
						<Text style={styles.jobTitle}>{basics.title}</Text>
					</View>
					<View style={styles.contact}>
						<Text style={styles.contactText}>{basics.location}</Text>
						<Text style={styles.contactText}>{basics.email}</Text>
						<Text style={styles.contactText}>{basics.linkedin}</Text>
						<Text style={styles.contactText}>{basics.github}</Text>
					</View>
				</View>

				{/* Summary */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Summary</Text>
					<Text style={styles.summaryText}>{basics.summary}</Text>
				</View>

				{/* Skills */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Skills</Text>
					<View style={styles.skillsRow}>
						<Text style={styles.skillLabel}>Frontend</Text>
						<Text style={styles.skillValue}>{skills.frontend.join(', ')}</Text>
					</View>
					<View style={styles.skillsRow}>
						<Text style={styles.skillLabel}>Backend</Text>
						<Text style={styles.skillValue}>{skills.backend.join(', ')}</Text>
					</View>
					<View style={styles.skillsRow}>
						<Text style={styles.skillLabel}>Tools</Text>
						<Text style={styles.skillValue}>{skills.tools.join(', ')}</Text>
					</View>
					<View style={styles.skillsRow}>
						<Text style={styles.skillLabel}>Languages</Text>
						<Text style={styles.skillValue}>{skills.languages.join(', ')}</Text>
					</View>
				</View>

				{/* Experience */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Experience</Text>
					{experience.map((pos) => (
						<View key={`${pos.title}-${pos.company}-${pos.startDate}`} style={styles.expItem} wrap={false}>
							<View style={styles.expHeader}>
								<View style={styles.expTitleRow}>
									<Text>
										<Text style={styles.expTitle}>{pos.title}</Text>
										<Text style={styles.expCompany}> · {pos.company}</Text>
									</Text>
								</View>
								<View style={styles.expMeta}>
									<Text style={styles.expLocation}>{pos.location}</Text>
									<Text style={styles.expDates}>
										{formatDate(pos.startDate)} – {formatDate(pos.endDate)}
									</Text>
								</View>
							</View>
							<Text style={styles.expDesc}>{pos.description}</Text>
						</View>
					))}
				</View>

				{/* Education */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Education</Text>
					{education.map((edu) => (
						<View key={edu.institution} style={styles.eduItem}>
							<View style={styles.eduHeader}>
								<Text>
									<Text style={styles.eduDegree}>{edu.degree}</Text>
									<Text style={styles.eduField}> · {edu.field}</Text>
								</Text>
								<Text style={styles.expDates}>
									{edu.startYear} – {edu.endYear}
								</Text>
							</View>
							<Text style={styles.eduInstitution}>{edu.institution}</Text>
						</View>
					))}
				</View>

				{/* Certifications */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Certifications</Text>
					{certifications.map((cert) => (
						<Text key={cert.name} style={styles.certItem}>
							{cert.name}
						</Text>
					))}
				</View>
			</Page>
		</Document>
	);
}

export async function GET() {
	const buffer = await renderToBuffer(<ResumeDocument />);

	return new Response(new Uint8Array(buffer), {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename="Francisco_Iglesias_Resume.pdf"',
		},
	});
}
