"use client";

import React, { useEffect, useState } from "react";
import { supabase, Testimonial, TeamMember } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Tab = "testimonials" | "team";

export default function AdminDashboard() {
	const [activeTab, setActiveTab] = useState<Tab>("testimonials");
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const pageSize = 10;
	const router = useRouter();

	useEffect(() => {
		if (activeTab === "testimonials") fetchTestimonials();
		if (activeTab === "team") fetchTeamMembers();
	}, [activeTab, page]);

	const fetchTestimonials = async () => {
		const from = (page - 1) * pageSize;
		const { data, error } = await supabase
			.from("testimonials")
			.select("*")
			.order("created_at", { ascending: false })
			.range(from, from + pageSize - 1);
		if (error) console.error(error);
		else setTestimonials(data || []);
		setLoading(false);
	};

	const fetchTeamMembers = async () => {
		const { data, error } = await supabase
			.from("team_members")
			.select("*")
			.order("created_at", { ascending: false });
		if (error) console.error(error);
		else setTeamMembers(data || []);
		setLoading(false);
	};

	const toggleApproved = async (id: string, approved: boolean) => {
		const { error } = await supabase
			.from("testimonials")
			.update({ approved: !approved })
			.eq("id", id);
		if (error) alert("Failed to update status.");
		else fetchTestimonials();
	};

	const deleteTestimonial = async (id: string) => {
		if (!confirm("Delete this testimonial?")) return;

		try {
			// First get the testimonial to get the image URL
			const { data: testimonial, error: fetchError } = await supabase
				.from("testimonials")
				.select("image_url")
				.eq("id", id)
				.single();

			if (fetchError) {
				console.error("Failed to fetch testimonial:", fetchError);
				alert("Failed to fetch testimonial details.");
				return;
			}

			// Delete the testimonial from database
			const { error: deleteError } = await supabase
				.from("testimonials")
				.delete()
				.eq("id", id);

			if (deleteError) {
				console.error("Failed to delete testimonial:", deleteError);
				alert("Failed to delete testimonial.");
				return;
			}

			// If testimonial had an image, delete it from storage
			if (testimonial?.image_url) {
				try {
					// Extract file path from URL
					const url = new URL(testimonial.image_url);
					const filePath = url.pathname.split("/").pop(); // Get just the filename

					if (filePath) {
						const { error: storageError } = await supabase.storage
							.from("testimonials")
							.remove([filePath]);

						if (storageError) {
							console.error(
								"Failed to delete image from storage:",
								storageError,
							);
							// Don't show error to user since testimonial was deleted successfully
						} else {
							console.log("Image deleted from storage successfully");
						}
					}
				} catch (storageErr) {
					console.error("Error deleting image from storage:", storageErr);
					// Don't show error to user since testimonial was deleted successfully
				}
			}

			// Refresh the testimonials list
			fetchTestimonials();
		} catch (error) {
			console.error("Unexpected error deleting testimonial:", error);
			alert("Failed to delete testimonial.");
		}
	};

	const deleteTeamMember = async (id: string) => {
		if (!confirm("Delete this team member?")) return;

		try {
			// First get the team member to get the image URL
			const { data: teamMember, error: fetchError } = await supabase
				.from("team_members")
				.select("image_url")
				.eq("id", id)
				.single();

			if (fetchError) {
				console.error("Failed to fetch team member:", fetchError);
				alert("Failed to fetch team member details.");
				return;
			}

			// Delete the team member from database
			const { error: deleteError } = await supabase
				.from("team_members")
				.delete()
				.eq("id", id);

			if (deleteError) {
				console.error("Failed to delete team member:", deleteError);
				alert("Failed to delete team member.");
				return;
			}

			// If team member had an image, delete it from storage
			if (teamMember?.image_url) {
				try {
					// Extract file path from URL
					const url = new URL(teamMember.image_url);
					const filePath = url.pathname.split("/").pop(); // Get just the filename

					if (filePath) {
						const { error: storageError } = await supabase.storage
							.from("team")
							.remove([filePath]);

						if (storageError) {
							console.error(
								"Failed to delete image from storage:",
								storageError,
							);
							// Don't show error to user since team member was deleted successfully
						} else {
							console.log("Image deleted from storage successfully");
						}
					}
				} catch (storageErr) {
					console.error("Error deleting image from storage:", storageErr);
					// Don't show error to user since team member was deleted successfully
				}
			}

			// Refresh the team members list
			fetchTeamMembers();
		} catch (error) {
			console.error("Unexpected error deleting team member:", error);
			alert("Failed to delete team member.");
		}
	};

	return (
		<div className="container py-4 py-md-5">
			<div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
				<h2 className="mb-3 mb-md-0">Admin Dashboard</h2>
				<button
					className="btn btn-outline-danger"
					onClick={() =>
						supabase.auth.signOut().then(() => router.push("/admin/login"))
					}
				>
					Logout
				</button>
			</div>

			<ul className="nav nav-tabs mb-4 flex-column flex-md-row">
				<li className="nav-item">
					<button
						className={`nav-link ${activeTab === "testimonials" ? "active" : ""}`}
						onClick={() => {
							setActiveTab("testimonials");
							setPage(1);
							setLoading(true);
						}}
					>
						Testimonials
					</button>
				</li>
				<li className="nav-item">
					<button
						className={`nav-link ${activeTab === "team" ? "active" : ""}`}
						onClick={() => {
							setActiveTab("team");
							setPage(1);
							setLoading(true);
						}}
					>
						Team Members
					</button>
				</li>
			</ul>

			{loading ? (
				<div className="text-center py-5">Loading...</div>
			) : (
				<>
					{activeTab === "testimonials" && (
						<>
							<div className="table-responsive mb-3">
								<table className="table table-bordered table-hover">
									<thead>
										<tr>
											<th>Name</th>
											<th className="d-none d-md-table-cell">Message</th>
											<th>Status</th>
											<th className="text-center">Actions</th>
										</tr>
									</thead>
									<tbody>
										{testimonials.map((t) => (
											<tr key={t.id}>
												<td>{t.name}</td>
												<td className="d-none d-md-table-cell">
													{t.message.slice(0, 80)}
													{t.message.length > 80 && "..."}
												</td>
												<td>
													<span
														className={`badge ${t.approved ? "bg-success" : "bg-warning"}`}
													>
														{t.approved ? "Approved" : "Pending"}
													</span>
												</td>
												<td>
													<div className="d-flex flex-column flex-md-row gap-1">
														<Link
															href={`/admin/testimonials/${t.id}`}
															className="btn btn-sm btn-outline-primary"
														>
															View/Edit
														</Link>
														<button
															className="btn btn-sm btn-outline-success"
															onClick={() => toggleApproved(t.id, t.approved)}
														>
															{t.approved ? "Unapprove" : "Approve"}
														</button>
														<button
															className="btn btn-sm btn-outline-danger"
															onClick={() => deleteTestimonial(t.id)}
														>
															Delete
														</button>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="d-flex justify-content-between align-items-center mt-3 flex-column flex-md-row">
								<button
									className="btn btn-outline-secondary mb-2 mb-md-0"
									disabled={page === 1}
									onClick={() => {
										setPage(page - 1);
										setLoading(true);
									}}
								>
									Previous
								</button>
								<span>Page {page}</span>
								<button
									className="btn btn-outline-secondary"
									disabled={testimonials.length < pageSize}
									onClick={() => {
										setPage(page + 1);
										setLoading(true);
									}}
								>
									Next
								</button>
							</div>
						</>
					)}

					{activeTab === "team" && (
						<>
							<div className="mb-3">
								<Link href="/admin/team/new" className="btn btn-primary">
									Add Team Member
								</Link>
							</div>
							<div className="table-responsive mb-3">
								<table className="table table-bordered table-hover">
									<thead>
										<tr>
											<th>Name</th>
											<th>Image</th>
											<th>Active</th>
											<th className="text-center">Actions</th>
										</tr>
									</thead>
									<tbody>
										{teamMembers.map((t) => (
											<tr key={t.id}>
												<td>{t.name}</td>
												<td>
													{t.image_url ? (
														<img
															src={t.image_url}
															alt={t.name}
															style={{
																width: "50px",
																height: "50px",
																objectFit: "cover",
																borderRadius: "4px",
															}}
														/>
													) : (
														<span className="text-muted">No image</span>
													)}
												</td>
												<td>
													<span
														className={`badge ${t.active ? "bg-success" : "bg-secondary"}`}
													>
														{t.active ? "Active" : "Inactive"}
													</span>
												</td>
												<td>
													<div className="d-flex flex-column flex-md-row gap-1">
														<Link
															href={`/admin/team/${t.id}`}
															className="btn btn-sm btn-outline-primary"
														>
															Edit
														</Link>
														<button
															className="btn btn-sm btn-outline-danger"
															onClick={() => deleteTeamMember(t.id)}
														>
															Delete
														</button>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
}
