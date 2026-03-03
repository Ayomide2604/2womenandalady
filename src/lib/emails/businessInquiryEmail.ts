export type BusinessInquiryEmailParams = {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	service: string;
	subject: string;
	message: string;
};

export function businessInquiryEmailHtml({
	firstName,
	lastName,
	email,
	phone,
	service,
	subject,
	message,
}: BusinessInquiryEmailParams): string {
	const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim();
	const phoneRow = phone
		? `<div style="margin:0 0 6px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color:#00539c; text-decoration:none; font-weight:700;">${phone}</a></div>`
		: "";

	return `
		<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
			New inquiry from ${fullName} — ${service}.
		</div>
		<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f6f8; margin:0; padding:0; width:100%;">
			<tr>
				<td align="center" style="padding:24px 12px;">
					<table role="presentation" width="680" cellspacing="0" cellpadding="0" border="0" style="width:680px; max-width:680px;">
						<tr>
							<td style="padding:0 0 14px 0; font-family: Arial, sans-serif;">
								<div style="text-align:center; color:#6c757d; font-size:12px; line-height:18px;">
									Website Contact Form
								</div>
							</td>
						</tr>
						<tr>
							<td style="background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e9ecef; box-shadow: 0 12px 30px rgba(16,24,40,0.08);">
								<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
									<tr>
										<td style="background: linear-gradient(135deg, #00539c 0%, #0b6bd3 100%); padding:22px 22px; font-family: Arial, sans-serif;">
											<div style="color:#ffffff; font-weight:800; font-size:16px; line-height:22px; letter-spacing:0.02em;">New Cleaning Inquiry</div>
											<div style="display:flex; align-items:center; gap:10px; margin-top:10px;">
												<div style="color:rgba(255,255,255,0.92); font-size:13px; line-height:18px; font-weight:700;">2 Women and a Lady</div>
											</div>
										</td>
									</tr>
									<tr>
										<td style="padding:22px 22px; font-family: Arial, sans-serif; color:#0f172a;">
											<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
												<tr>
													<td style="background:#f8fafc; border:1px solid #e9ecef; border-radius:12px; padding:16px 16px;">
														<div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#64748b; font-weight:800;">Customer</div>
														<div style="margin-top:10px; font-size:14px; line-height:20px; color:#0f172a;">
															<div style="margin:0 0 6px 0;"><strong>Name:</strong> ${fullName}</div>
															<div style="margin:0 0 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#00539c; text-decoration:none; font-weight:700;">${email}</a></div>
															${phoneRow}
															<div style="margin:0 0 6px 0;"><strong>Service:</strong> ${service}</div>
															<div style="margin:0;"><strong>Subject:</strong> ${subject}</div>
														</div>
													</td>
												</tr>
											</table>

											<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:14px;">
												<tr>
													<td style="background:#ffffff; border:1px solid #e9ecef; border-radius:12px; padding:16px 16px;">
														<div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#64748b; font-weight:800;">Message</div>
														<div style="margin-top:10px; font-size:14px; line-height:22px; color:#0f172a; white-space:pre-line;">${message}</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td style="padding:14px 22px 20px 22px; font-family: Arial, sans-serif; color:#94a3b8; font-size:12px; line-height:18px; border-top:1px solid #eef2f7;">
											Received: ${new Date().toLocaleString()}
										</td>
									</tr>
									<tr>
										<td style="padding:14px 22px 20px 22px; font-family: Arial, sans-serif; color:#94a3b8; font-size:11px; line-height:16px; border-top:1px solid #eef2f7; text-align:center;">
											<div>This is an automated email from your website contact form.</div>
											<div style="margin-top:4px;">Please do not reply to this email.</div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	`;
}
