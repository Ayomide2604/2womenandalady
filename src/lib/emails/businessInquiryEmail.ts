export type BusinessInquiryEmailParams = {
	firstName: string;
	lastName: string;
	email: string;
	service: string;
	subject: string;
	message: string;
};

export function businessInquiryEmailHtml({
	firstName,
	lastName,
	email,
	service,
	subject,
	message,
}: BusinessInquiryEmailParams): string {
	const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim();
	return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #00539c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">2 Women and a Lady</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Cleaning Service Inquiry</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <h2 style="color: #00539c; margin-top: 0;">Customer Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${fullName}</p>
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
      `;
}
