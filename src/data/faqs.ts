export interface FAQ {
	id: string;
	question: string;
	answer: string;
}

export const faqs: FAQ[] = [
	{
		id: 'collapseOne',
		question: 'What areas do you service in Edmonton?',
		answer: 'We proudly serve Edmonton and all surrounding areas including St. Albert, Sherwood Park, Spruce Grove, Leduc, Beaumont, and nearby communities. Contact us to confirm service in your specific location.'
	},
	{
		id: 'collapseTwo',
		question: 'Are you insured and bonded?',
		answer: 'Yes! As a professional cleaning company, we are fully insured and bonded to protect both our clients and our team. Your peace of mind is our priority.'
	},
	{
		id: 'collapseThree',
		question: 'What cleaning products do you use?',
		answer: 'We use eco-friendly, professional-grade cleaning products that are safe for your family, pets, and the environment. All our products are hospital-grade disinfectants that effectively eliminate germs and bacteria.'
	},
	{
		id: 'collapseFour',
		question: 'How do I schedule a cleaning service?',
		answer: 'You can schedule a cleaning service by calling us at (780) 709-1707, sending a WhatsApp message, or filling out this contact form. We\'ll respond within 24 hours to discuss your needs and provide a free quote.'
	},
	{
		id: 'collapseFive',
		question: 'Do you offer recurring cleaning services?',
		answer: 'Yes! We offer flexible recurring cleaning schedules including weekly, bi-weekly, and monthly services. Recurring clients receive priority scheduling and discounted rates.'
	}
];
