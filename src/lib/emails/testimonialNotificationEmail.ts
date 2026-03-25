export type TestimonialNotificationEmailParams = {
	name: string;
	message: string;
	profession?: string;
	company?: string;
	imageUrl?: string;
};

export function testimonialNotificationEmailHtml({
	name,
	message,
	profession,
	company,
	imageUrl,
}: TestimonialNotificationEmailParams): string {
	const professionRow = profession
		? `<div style="margin:0 0 6px 0;"><strong>Profession:</strong> ${profession}</div>`
		: "";
	const companyRow = company
		? `<div style="margin:0 0 6px 0;"><strong>Company:</strong> ${company}</div>`
		: "";
	const imageRow = imageUrl
		? `<div style="margin:10px 0;"><strong>Photo:</strong><br><img src="${imageUrl}" alt="Testimonial photo" style="max-width:200px; max-height:200px; border-radius:8px; margin-top:8px; border:1px solid #e9ecef;"></div>`
		: "";

	return `
		<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
			New testimonial submission from ${name}.
		</div>
		<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f6f8; margin:0; padding:0; width:100%;">
			<tr>
				<td align="center" style="padding:24px 12px;">
					<table role="presentation" width="680" cellspacing="0" cellpadding="0" border="0" style="width:680px; max-width:680px;">
						<tr>
							<td style="padding:0 0 14px 0; font-family: Arial, sans-serif;">
								<div style="text-align:center; color:#6c757d; font-size:12px; line-height:18px;">
									Website Testimonial Form
								</div>
							</td>
						</tr>
						<tr>
							<td style="background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e9ecef; box-shadow: 0 12px 30px rgba(16,24,40,0.08);">
								<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
									<tr>
										<td style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding:22px 22px; font-family: Arial, sans-serif;">
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
														<div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#64748b; font-weight:800;">Testimonial Details</div>
														<div style="margin-top:10px; font-size:14px; line-height:20px; color:#0f172a;">
															<div style="margin:0 0 6px 0;"><strong>Name:</strong> ${name}</div>
															${professionRow}
															${companyRow}
														</div>
														${imageRow}
													</td>
												</tr>
											</table>

											<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:14px;">
												<tr>
													<td style="background:#ffffff; border:1px solid #e9ecef; border-radius:12px; padding:16px 16px;">
														<div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#64748b; font-weight:800;">Testimonial Message</div>
														<div style="margin-top:10px; font-size:14px; line-height:22px; color:#0f172a; white-space:pre-line;">${message}</div>
													</td>
												</tr>
											</table>

											<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:14px;">
												<tr>
													<td style="background:#fff3cd; border:1px solid #ffeaa7; border-radius:12px; padding:16px 16px;">
														<div style="font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#856404; font-weight:800;">⚠️ Action Required</div>
														<div style="margin-top:10px; font-size:13px; line-height:20px; color:#856404;">
															This testimonial is awaiting approval. Please review and approve it to display on the website.
														</div>
														<div style="margin-top:16px; text-align:center;">
															<a href="${process.env.NEXT_PUBLIC_URL || "https://2womenandalady.ca"}/admin/dashboard" style="display:inline-block; background:#28a745; color:#ffffff; padding:12px 24px; text-decoration:none; border-radius:8px; font-weight:600; font-size:14px; font-family: Arial, sans-serif;">
																🔐 Login to Admin Panel
															</a>
														</div>
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
											<div>This is an automated email from your website testimonial form.</div>
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
