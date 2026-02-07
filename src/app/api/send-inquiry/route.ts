import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { name, email, service, subject, message } = await request.json();

		// Send email to business (you)
		const businessEmail = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: [process.env.RECIPIENT_EMAIL!],
			subject: `New Cleaning Inquiry: ${name}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #00539c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">2 Women and a Lady</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Cleaning Service Inquiry</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <h2 style="color: #00539c; margin-top: 0;">Customer Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Service Type:</strong> ${service}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 6px;">
              <h3 style="margin-top: 0; color: #00539c;">Message:</h3>
              <p style="line-height: 1.6; margin: 0;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
            <p>This inquiry was sent from your website contact form</p>
            <p>Received: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
		});

		// Send confirmation email to customer
		const customerEmail = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: [email], // Customer's email
			subject: "Thank You for Your Inquiry - 2 Women and a Lady",
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #00539c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">2 Women and a Lady</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Professional Cleaning Services</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <h2 style="color: #00539c; margin-top: 0;">Thank You, ${name}!</h2>
            
            <p style="font-size: 16px; line-height: 1.6;">We've received your inquiry about <strong>${service}</strong> and will get back to you within 24 hours.</p>
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #00539c; margin-top: 0;">Your Inquiry Summary:</h3>
              <p style="margin: 8px 0;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 8px 0;"><strong>Message:</strong> ${message}</p>
            </div>
            
            <div style="background: #ffd662; padding: 20px; border-radius: 6px; text-align: center; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #00539c;">What's Next?</h3>
              <p style="margin: 8px 0;">✅ We'll review your inquiry</p>
              <p style="margin: 8px 0;">✅ We'll prepare a personalized quote</p>
              <p style="margin: 8px 0;">✅ We'll contact you within 24 hours</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="margin: 0;"><strong>Need immediate assistance?</strong></p>
              <p style="margin: 5px 0;">Call us: <a href="tel:7807091707" style="color: #00539c; text-decoration: none;">(780) 709-1707</a></p>
              <p style="margin: 5px 0;">WhatsApp: <a href="https://wa.me/17807091707" style="color: #00539c; text-decoration: none;">Chat with us</a></p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px; border-top: 1px solid #e9ecef; padding-top: 20px;">
            <p> 2024 2 Women and a Lady. Serving Edmonton and surrounding areas.</p>
            <p>This is an automated confirmation. Please do not reply to this email.</p>
          </div>
        </div>
      `,
		});

		// Check for errors
		if (businessEmail.error || customerEmail.error) {
			console.error("Email errors:", {
				business: businessEmail.error,
				customer: customerEmail.error,
			});
			return Response.json(
				{
					error: "Failed to send email",
					details: {
						business: businessEmail.error?.message,
						customer: customerEmail.error?.message,
					},
				},
				{ status: 400 },
			);
		}

		return Response.json({
			success: true,
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
