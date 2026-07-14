import soSureImage from '../assets/projects/so-sure.svg';
import gravitiqImage from '../assets/projects/gravitiq.svg';
import graphiquesDigitaleImage from '../assets/projects/graphiques-digitale.svg';
import neansyImage from '../assets/projects/neansy.svg';

export type Project = {
	slug: string;
	number: string;
	name: string;
	sector: string;
	url?: string;
	image: ImageMetadata;
	summary: string;
	work: string;
	accent: 'lime' | 'violet' | 'amber' | 'cyan';
	accentRgb: string;
	introduction: string;
	challenge: string[];
	approach: string[];
	focusAreas: string[];
	value: string[];
};

export const projects: Project[] = [
	{
		slug: 'so-sure',
		number: '01',
		name: 'SO-SURE',
		sector: 'Insurtech',
		image: soSureImage,
		summary:
			'A digital insurance business built around making cover simpler, more transparent, and easier to manage.',
		work:
			'Technical leadership across customer journeys, platform development, integrations, and the systems behind a growing insurance product.',
		accent: 'lime',
		accentRgb: '192 255 102',
		introduction:
			'SO-SURE set out to make insurance feel more direct and understandable. Delivering that experience required the customer-facing product and the operational systems behind it to evolve together.',
		challenge: [
			'Insurance products combine customer journeys, third-party services, policy administration, payments, and operational processes. Each part needs to remain dependable while the product and business continue to change.',
			'The engineering challenge was to support that growth without allowing new integrations, product decisions, or delivery pressure to make the platform harder to understand and operate.',
		],
		approach: [
			'The work combined technical direction with hands-on delivery. Architecture decisions were grounded in the needs of real customer and operational journeys rather than treated as a separate exercise.',
			'Clearer system boundaries, pragmatic delivery practices, and close collaboration across product and engineering helped turn complex requirements into changes that could be shipped and supported confidently.',
		],
		focusAreas: [
			'Customer quote and purchase journeys',
			'Policy and account experiences',
			'Third-party platform integrations',
			'Cloud architecture and delivery',
			'Engineering standards and documentation',
			'Technical planning and team support',
		],
		value: [
			'A clearer relationship between customer experience and the services supporting it.',
			'Technical decisions that balanced immediate product needs with long-term maintainability.',
			'More structured delivery across a platform with multiple external and operational dependencies.',
		],
	},
	{
		slug: 'gravitiq',
		number: '02',
		name: 'Gravitiq',
		sector: 'Commerce & operations',
		image: gravitiqImage,
		summary:
			'An operator that acquires and scales health, wellness, and beauty brands across digital and retail channels.',
		work:
			'Technical direction for the data, integrations, automation, and operational platforms supporting a multi-brand portfolio.',
		accent: 'violet',
		accentRgb: '190 145 255',
		introduction:
			'Gravitiq operates a portfolio of consumer brands, each with its own commercial systems, data, channels, and operational history. Technology has to support individual brand needs while creating useful consistency across the group.',
		challenge: [
			'Multi-brand commerce environments accumulate overlapping tools, integrations, reporting flows, and manual processes. Acquiring or launching another brand increases that complexity unless there is a practical shared technical model.',
			'The challenge was to improve visibility and repeatability across the portfolio without imposing a rigid central platform that ignored how individual brands actually operated.',
		],
		approach: [
			'The work focused on identifying the capabilities worth sharing, the differences worth preserving, and the highest-friction operational processes to address first.',
			'Technical direction was paired with incremental implementation across data movement, integrations, automation, and internal tooling, allowing the platform to mature alongside day-to-day business priorities.',
		],
		focusAreas: [
			'Commerce and operational integrations',
			'Portfolio-wide data flows',
			'Automation of repeatable processes',
			'Brand onboarding and technical discovery',
			'Shared services and platform boundaries',
			'Delivery planning and technical governance',
		],
		value: [
			'A more coherent technical view across independently evolving brands.',
			'Reusable patterns for integrations, automation, and the onboarding of new businesses.',
			'Better alignment between platform investment and operational priorities.',
		],
	},
	{
		slug: 'graphiques-digitale',
		number: '03',
		name: 'Graphiques Digitale',
		sector: 'Digital studio',
		url: 'https://www.graphiquesdigitale.net',
		image: graphiquesDigitaleImage,
		summary:
			'A London-based digital studio building bespoke websites, web systems, and applications for brands that need more than a brochure site.',
		work:
			'Full-stack delivery across discovery, specification, CMS-driven platforms, integrations, and long-term system maintenance.',
		accent: 'amber',
		accentRgb: '255 176 92',
		introduction:
			'Graphiques Digitale grew out of a long-running practice in bespoke web development and business analysis. The studio focused on small to medium-scale systems where careful discovery, clear specification, and maintainable delivery mattered as much as the interface.',
		challenge: [
			'Client projects often combined brand experience, content management, commerce, integrations, and operational workflows. Each system had to remain dependable while continuing to evolve after launch.',
			'The work needed to balance aesthetic intent with practical architecture, especially when projects moved from campaign sites into longer-lived platforms and internal tools.',
		],
		approach: [
			'Projects began with structured discovery and specification, grounding delivery in the requirements of the business rather than a fixed technical template.',
			'Implementation combined CMS and framework-driven development with hands-on integration, configuration, and support, allowing each system to mature alongside the client\'s priorities.',
		],
		focusAreas: [
			'Project discovery and requirements gathering',
			'Software design specifications',
			'CMS and framework-driven web platforms',
			'Commerce and content-rich brand experiences',
			'Integrations and server configuration',
			'SEO, maintenance, and ongoing support',
		],
		value: [
			'Clearer alignment between business requirements and the systems built to support them.',
			'More complete delivery across specification, build, launch, and maintenance.',
			'A foundation of bespoke platform work that later shaped the NeAnSy consultancy practice.',
		],
	},
	{
		slug: 'neansy',
		number: '04',
		name: 'NeAnSy',
		sector: 'Technical consultancy',
		image: neansyImage,
		summary:
			'Independent engineering support for companies navigating complex platforms, changing teams, and difficult delivery environments.',
		work:
			'Architecture, legacy modernisation, cloud delivery, engineering leadership, and pragmatic AI-assisted development.',
		accent: 'cyan',
		accentRgb: '92 231 255',
		introduction:
			'NeAnSy provides experienced technical support where strategy and implementation need to meet. The work is designed for organisations that need senior engineering judgment without separating advice from delivery.',
		challenge: [
			'Complex systems rarely have a single isolated problem. Architecture, delivery process, team confidence, operational risk, and business priorities tend to affect one another.',
			'The challenge is to create enough clarity to move forward while continuing to operate, deliver, and learn from the existing platform.',
		],
		approach: [
			'Engagements begin by understanding the system, the people working with it, and the decisions the business needs to make. That context shapes a practical sequence of improvements rather than a disconnected target architecture.',
			'The work can move between technical leadership, architecture, implementation, documentation, mentoring, and AI-assisted engineering workflows as the situation requires.',
		],
		focusAreas: [
			'Legacy platform modernisation',
			'Architecture and technical strategy',
			'AWS and cloud delivery',
			'Engineering leadership and mentoring',
			'Documentation and delivery practices',
			'Pragmatic AI-assisted development',
		],
		value: [
			'Clearer technical decisions tied to business and delivery realities.',
			'Incremental modernisation that reduces risk while preserving momentum.',
			'Stronger engineering practices that remain useful after the engagement.',
		],
	},
];

export const getProject = (slug: string | undefined) =>
	projects.find((project) => project.slug === slug);
