export type CustomerConfirmationEmailParams = {
	firstName: string;
	lastName: string;
	service: string;
	subject: string;
	message: string;
	phone?: string;
};

export function customerConfirmationEmailHtml({
	firstName,
	lastName,
	service,
	subject,
	message,
	phone,
}: CustomerConfirmationEmailParams): string {
	const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim();
	const phoneRow = phone
		? `<div style="margin:0 0 6px 0;"><strong>Phone:</strong> ${phone}</div>`
		: "";

	return `
		<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
			Thanks for reaching out — we received your message and will reply within 24 hours.
		</div>
		<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f6f8; margin:0; padding:0; width:100%;">
			<tr>
				<td align="center" style="padding:24px 12px;">
					<table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:600px; max-width:600px;">
						<tr>
							<td style="padding:0 0 14px 0; font-family: Arial, sans-serif;">
								<div style="text-align:center; color:#6c757d; font-size:12px; line-height:18px;">
									2 Women and a Lady
								</div>
							</td>
						</tr>
						<tr>
							<td style="background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e9ecef; box-shadow: 0 12px 30px rgba(16,24,40,0.08);">
								<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
									<tr>
										<td style="background: linear-gradient(135deg, #00539c 0%, #0b6bd3 100%); padding:26px 22px; font-family: Arial, sans-serif;">
											<div style="display:flex; align-items:center; gap:12px;">
												<div style="color:#ffffff; font-weight:700; font-size:18px; line-height:24px;">2 Women and a Lady</div>
											</div>
											<div style="color:rgba(255,255,255,0.9); margin-top:6px; font-size:13px; line-height:18px;">Professional Cleaning Services</div>
										</td>
									</tr>
									<tr>
										<td style="padding:26px 22px; font-family: Arial, sans-serif; color:#1f2937;">
											<h2 style="margin:0; font-size:22px; line-height:28px; color:#0f172a;">Thank you, ${fullName}.</h2>
											<p style="margin:10px 0 0 0; font-size:15px; line-height:22px; color:#334155;">
												We’ve received your inquiry and we’ll get back to you within <strong>24 hours</strong>.
											</p>

											<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:18px;">
												<tr>
													<td style="background:#f8fafc; border:1px solid #e9ecef; border-radius:12px; padding:16px 16px;">
														<div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#64748b; font-weight:700;">Your inquiry summary</div>
														<div style="margin-top:10px; font-size:14px; line-height:20px; color:#0f172a;">
															<div style="margin:0 0 6px 0;"><strong>Service:</strong> ${service}</div>
															<div style="margin:0 0 6px 0;"><strong>Subject:</strong> ${subject}</div>
														${phoneRow}
															<div style="margin:0;"><strong>Message:</strong> ${message}</div>
														</div>
													</td>
												</tr>
											</table>

											<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:18px;">
												<tr>
													<td style="background:#fff7db; border:1px solid rgba(255, 214, 98, 0.6); border-radius:12px; padding:16px 16px;">
														<div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a; font-weight:800;">What’s next</div>
														<div style="margin-top:10px; font-size:14px; line-height:20px; color:#0f172a;">
															<div style="margin:0 0 6px 0;">We’ll review your inquiry</div>
															<div style="margin:0 0 6px 0;">We’ll prepare a personalized quote</div>
															<div style="margin:0;">We’ll contact you within 24 hours</div>
														</div>
													</td>
												</tr>
											</table>

											<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:20px;">
												<tr>
													<td style="border-top:1px solid #eef2f7; padding-top:16px;">
														<div style="font-size:13px; line-height:19px; color:#475569;">
															<strong>Need help sooner?</strong>
															<div style="margin-top:12px;">
																<div style="margin:8px 0;">
																	<span style="color:#00539c; font-weight:bold; font-size:16px;">☎</span>&nbsp;&nbsp;
																	<a href="tel:7807091707" style="color:#00539c; text-decoration:none; font-weight:700;">Call: (780) 709-1707</a>
																</div>
																<div style="margin:8px 0;">
																	<span style="font-size:16px;">📱</span>&nbsp;&nbsp;
																	<a href="https://wa.me/17807091707" style="color:#00539c; text-decoration:none; font-weight:700;">WhatsApp: Chat with us</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td style="padding:14px 8px 0 8px; text-align:center; font-family: Arial, sans-serif; color:#94a3b8; font-size:12px; line-height:18px;">
								<div> 2026 2 Women and a Lady. Serving Edmonton and surrounding areas.</div>
								<div style="margin-top:6px;">This is an automated confirmation. Please do not reply to this email.</div>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	`;
}
