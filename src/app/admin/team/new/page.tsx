"use client";

import React, { useState } from "react";
import { supabase, TeamMember } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function TeamMemberNew() {
  const [member, setMember] = useState<Partial<TeamMember>>({
    name: "",
    role: "",
    bio: "",
    image_url: null,
    order_index: 0,
    active: true,
  });
  const [saving, setSaving] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setMember({ ...member, [name]: val });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { error } = await supabase.storage
      .from('team')
      .upload(fileName, file, { upsert: true });
    if (error) {
      console.error('Image upload error:', error);
      return null;
    }
    const { data } = supabase.storage
      .from('team')
      .getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    let imageUrl = member.image_url;
    if (file) {
      imageUrl = await uploadImage(file);
    }
    const { error } = await supabase.from("team_members").insert({
      name: member.name!,
      role: member.role!,
      bio: member.bio,
      image_url: imageUrl,
      order_index: member.order_index ?? 0,
      active: member.active ?? true,
    });
    setSaving(false);
    if (error) alert("Failed to create team member.");
    else router.push("/admin/dashboard");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>New Team Member</h2>
            <button className="btn btn-outline-secondary" onClick={() => router.push("/admin/dashboard")}>Back</button>
          </div>

          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
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
              <label htmlFor="role" className="form-label">Role</label>
              <input
                type="text"
                className="form-control"
                id="role"
                name="role"
                value={member.role}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">Bio</label>
              <textarea
                className="form-control"
                id="bio"
                name="bio"
                rows={4}
                value={member.bio || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Photo</label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={handleFileChange}
              />
              {file && (
                <div className="mt-2">
                  <img src={URL.createObjectURL(file)} alt="Preview" style={{ maxHeight: 120 }} className="img-thumbnail" />
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="order_index" className="form-label">Display Order</label>
              <input
                type="number"
                className="form-control"
                id="order_index"
                name="order_index"
                value={member.order_index ?? 0}
                onChange={handleChange}
              />
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
              <label className="form-check-label" htmlFor="active">Active</label>
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
