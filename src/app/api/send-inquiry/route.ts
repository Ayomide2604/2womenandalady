import { Resend } from "resend";
import { businessInquiryEmailHtml } from "@/lib/emails/businessInquiryEmail";
import { customerConfirmationEmailHtml } from "@/lib/emails/customerConfirmationEmail";

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

		const { name, email, service, subject, message } = await request.json();
		const fromEmail = process.env.FROM_EMAIL || "contact@applybridge.site";

		// Send email to business (you)
		const businessEmail = await resend.emails.send({
			from: fromEmail,
			to: [process.env.RECIPIENT_EMAIL!],
			replyTo: email,
			subject: `New Cleaning Inquiry: ${name}`,
			html: businessInquiryEmailHtml({
				name,
				email,
				service,
				subject,
				message,
			}),
		});

		if (businessEmail.error) {
			console.error("Business email error:", businessEmail.error);
			return Response.json(
				{
					error: "Failed to send business email",
					details: {
						business: businessEmail.error?.message,
						fromEmail,
						recipientEmail: process.env.RECIPIENT_EMAIL,
					},
				},
				{ status: 400 },
			);
		}

		// Send confirmation email to customer
		const customerEmail = await resend.emails.send({
			from: fromEmail,
			to: [email], // Customer's email
			replyTo: process.env.RECIPIENT_EMAIL!,
			subject: "Thank You for Your Inquiry - 2 Women and a Lady",
			html: customerConfirmationEmailHtml({
				name,
				service,
				subject,
				message,
			}),
		});

		if (customerEmail.error) {
			console.error("Customer email error:", customerEmail.error);
			return Response.json({
				success: true,
				customerSent: false,
				customerError: customerEmail.error?.message,
				data: {
					business: businessEmail.data,
					customer: null,
				},
			});
		}

		return Response.json({
			success: true,
			customerSent: true,
			data: {
				business: businessEmail.data,
				customer: customerEmail.data,
			},
		});
	} catch (error) {
		console.error("API error:", error);
		return Response.json({ error: "Failed to send email" }, { status: 500 });
	}
}
