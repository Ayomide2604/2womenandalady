"use client";

import React, { useEffect, useState } from "react";
import {
	supabase,
	Testimonial,
	ContactMessage,
	TeamMember,
} from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Tab = "testimonials" | "messages" | "team";

export default function AdminDashboard() {
	const [activeTab, setActiveTab] = useState<Tab>("testimonials");
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [messages, setMessages] = useState<ContactMessage[]>([]);
	const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const pageSize = 10;
	const router = useRouter();

	useEffect(() => {
		if (activeTab === "testimonials") fetchTestimonials();
		if (activeTab === "messages") fetchMessages();
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

	const fetchMessages = async () => {
		const from = (page - 1) * pageSize;
		const { data, error } = await supabase
			.from("contact_messages")
			.select("*")
			.order("created_at", { ascending: false })
			.range(from, from + pageSize - 1);
		if (error) console.error(error);
		else setMessages(data || []);
		setLoading(false);
	};

	const fetchTeamMembers = async () => {
		const { data, error } = await supabase
			.from("team_members")
			.select("*")
			.order("order_index", { ascending: true });
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
		const { error } = await supabase.from("testimonials").delete().eq("id", id);
		if (error) alert("Failed to delete.");
		else fetchTestimonials();
	};

	const deleteMessage = async (id: string) => {
		if (!confirm("Delete this message?")) return;
		const { error } = await supabase
			.from("contact_messages")
			.delete()
			.eq("id", id);
		if (error) alert("Failed to delete.");
		else fetchMessages();
	};

	const deleteTeamMember = async (id: string) => {
		if (!confirm("Delete this team member?")) return;
		const { error } = await supabase.from("team_members").delete().eq("id", id);
		if (error) alert("Failed to delete.");
		else fetchTeamMembers();
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
						className={`nav-link ${activeTab === "messages" ? "active" : ""}`}
						onClick={() => {
							setActiveTab("messages");
							setPage(1);
							setLoading(true);
						}}
					>
						Contact Messages
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

					{activeTab === "messages" && (
						<>
							<div className="table-responsive mb-3">
								<table className="table table-bordered table-hover">
									<thead>
										<tr>
											<th>Name</th>
											<th className="d-none d-lg-table-cell">Email</th>
											<th>Subject</th>
											<th className="d-none d-lg-table-cell">Message</th>
											<th>Replied</th>
											<th className="text-center">Actions</th>
										</tr>
									</thead>
									<tbody>
										{messages.map((m) => (
											<tr key={m.id}>
												<td>
													{m.first_name} {m.last_name}
												</td>
												<td className="d-none d-lg-table-cell">{m.email}</td>
												<td>{m.subject || "—"}</td>
												<td className="d-none d-lg-table-cell">
													{m.message.slice(0, 80)}
													{m.message.length > 80 && "..."}
												</td>
												<td>
													<span
														className={`badge ${m.replied ? "bg-success" : "bg-warning"}`}
													>
														{m.replied ? "Replied" : "Pending"}
													</span>
												</td>
												<td>
													<div className="d-flex flex-column flex-md-row gap-1">
														<Link
															href={`/admin/messages/${m.id}`}
															className="btn btn-sm btn-outline-primary"
														>
															View/Reply
														</Link>
														<button
															className="btn btn-sm btn-outline-danger"
															onClick={() => deleteMessage(m.id)}
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
									disabled={messages.length < pageSize}
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
											<th className="d-none d-md-table-cell">Role</th>
											<th>Active</th>
											<th className="d-none d-md-table-cell">Order</th>
											<th className="text-center">Actions</th>
										</tr>
									</thead>
									<tbody>
										{teamMembers.map((t) => (
											<tr key={t.id}>
												<td>{t.name}</td>
												<td className="d-none d-md-table-cell">{t.role}</td>
												<td>
													<span
														className={`badge ${t.active ? "bg-success" : "bg-secondary"}`}
													>
														{t.active ? "Active" : "Inactive"}
													</span>
												</td>
												<td className="d-none d-md-table-cell">
													{t.order_index}
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
