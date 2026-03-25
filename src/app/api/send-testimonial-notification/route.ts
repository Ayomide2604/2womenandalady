import { Resend } from "resend";
import { testimonialNotificationEmailHtml } from "@/lib/emails/testimonialNotificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		if (!process.env.RESEND_API_KEY) {
			return Response.json(
				{ error: "Missing RESEND_API_KEY" },
				{ status: 500 },
			);
		}
		if (!process.env.RECIPIENT_EMAIL) {
			return Response.json(
				{ error: "Missing RECIPIENT_EMAIL" },
				{ status: 500 },
			);
		}

		const { name, message, profession, company, imageUrl } =
			await request.json();
		
		const fromEmail =
			process.env.FROM_EMAIL ||
			`noreply@${process.env.NEXT_PUBLIC_URL?.replace("https://", "").replace("http://", "")}`;

		// Send email notification to business (you)
		const email = await resend.emails.send({
			from: fromEmail,
			to: [process.env.RECIPIENT_EMAIL!],
			subject: `New Testimonial Submission: ${name}`,
			html: testimonialNotificationEmailHtml({
				name,
				message,
				profession,
				company,
				imageUrl,
			}),
		});

		if (email.error) {
			console.error("Testimonial notification email error:", email.error);
			return Response.json(
				{
					error: "Failed to send testimonial notification",
					details: {
						email: email.error?.message,
						fromEmail,
						recipientEmail: process.env.RECIPIENT_EMAIL,
					},
				},
				{ status: 400 },
			);
		}

		return Response.json({
			success: true,
			data: email.data,
		});
	} catch (error) {
		console.error("Testimonial notification API error:", error);
		return Response.json({ error: "Failed to send testimonial notification" }, { status: 500 });
	}
}
