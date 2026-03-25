"use client";

import React, { useState } from "react";
import { supabase, TeamMember } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function TeamMemberNew() {
	const [member, setMember] = useState<Partial<TeamMember>>({
		name: "",
		image_url: null,
		active: true,
	});
	const [saving, setSaving] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const router = useRouter();

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value, type } = e.target;
		const val =
			type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
		setMember({ ...member, [name]: val });
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const uploadImage = async (file: File): Promise<string | null> => {
		try {
			console.log("Starting image upload for:", file.name, "Size:", file.size);

			const fileExt = file.name.split(".").pop();
			const fileName = `${Date.now()}.${fileExt}`;

			console.log("Uploading to storage as:", fileName);

			const { data: uploadData, error: uploadError } = await supabase.storage
				.from("team")
				.upload(fileName, file, { upsert: true });

			if (uploadError) {
				console.error("Storage upload error:", uploadError);
				console.error("Error details:", JSON.stringify(uploadError, null, 2));
				return null;
			}

			console.log("Upload successful:", uploadData);

			const { data: urlData } = supabase.storage
				.from("team")
				.getPublicUrl(fileName);

			console.log("Public URL:", urlData.publicUrl);
			return urlData.publicUrl;
		} catch (error) {
			console.error("Unexpected error during upload:", error);
			return null;
		}
	};

	const handleSave = async (e: React.FormEvent) => {
		e.preventDefault();
		setSaving(true);

		try {
			console.log("Starting team member creation...");
			console.log("Form data:", member);
			console.log("Has file:", !!file);

			let imageUrl = member.image_url;
			if (file) {
				console.log("Uploading image:", file.name);
				imageUrl = await uploadImage(file);
				if (!imageUrl) {
					console.error("Image upload failed");
					alert("Failed to upload image. Please try again.");
					setSaving(false);
					return;
				}
				console.log("Image uploaded successfully:", imageUrl);
			}

			console.log("Inserting team member into database...");
			const { error, data } = await supabase
				.from("team_members")
				.insert({
					name: member.name!,
					image_url: imageUrl,
					active: member.active ?? true,
				})
				.select();

			if (error) {
				console.error("Database error:", error);
				alert(`Failed to create team member: ${error.message}`);
			} else {
				console.log("Team member created successfully:", data);
				alert("Team member created successfully!");
				router.push("/admin/dashboard");
			}
		} catch (err) {
			console.error("Unexpected error:", err);
			alert(
				`Unexpected error: ${err instanceof Error ? err.message : "Unknown error"}`,
			);
		} finally {
			setSaving(false);
		}
	};

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h2>New Team Member</h2>
						<button
							className="btn btn-outline-secondary"
							onClick={() => router.push("/admin/dashboard")}
						>
							Back
						</button>
					</div>

					<form onSubmit={handleSave}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								value={member.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="image" className="form-label">
								Photo
							</label>
							<input
								type="file"
								className="form-control"
								id="image"
								accept="image/*"
								onChange={handleFileChange}
							/>
							{file && (
								<div className="mt-2">
									<img
										src={URL.createObjectURL(file)}
										alt="Preview"
										style={{ maxHeight: 120 }}
										className="img-thumbnail"
									/>
								</div>
							)}
						</div>
						<div className="form-check mb-3">
							<input
								type="checkbox"
								className="form-check-input"
								id="active"
								name="active"
								checked={member.active ?? true}
								onChange={handleChange}
							/>
							<label className="form-check-label" htmlFor="active">
								Active
							</label>
						</div>
						<button type="submit" className="btn btn-primary" disabled={saving}>
							{saving ? "Saving..." : "Create Team Member"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
