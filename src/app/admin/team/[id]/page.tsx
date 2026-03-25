"use client";

import React, { useEffect, useState } from "react";
import { supabase, TeamMember } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";

export default function TeamMemberEdit() {
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .eq("id", params.id)
        .single();
      if (error) {
        alert("Team member not found.");
        router.push("/admin/dashboard");
      } else {
        setMember(data);
      }
      setLoading(false);
    };
    fetch();
  }, [params.id, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!member) return;
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
    if (!member) return;
    setSaving(true);
    let imageUrl = member.image_url;
    if (file) {
      imageUrl = await uploadImage(file);
    }
    const { error } = await supabase
      .from("team_members")
      .update({
        name: member.name,
        role: member.role,
        bio: member.bio,
        image_url: imageUrl,
        order_index: member.order_index,
        active: member.active,
        updated_at: new Date().toISOString(),
      })
      .eq("id", params.id);
    setSaving(false);
    if (error) alert("Failed to update team member.");
    else router.push("/admin/dashboard");
  };

  const handleDelete = () => {
    if (!confirm("Delete this team member?")) return;
    supabase.from("team_members").delete().eq("id", params.id).then(() => router.push("/admin/dashboard"));
  };

  if (loading) return <div className="container py-5 text-center">Loading...</div>;
  if (!member) return null;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Edit Team Member</h2>
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={() => router.push("/admin/dashboard")}>Back</button>
              <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
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
              {member.image_url && (
                <div className="mt-2">
                  <img src={member.image_url} alt="Preview" style={{ maxHeight: 120 }} className="img-thumbnail" />
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
                value={member.order_index}
                onChange={handleChange}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="active"
                name="active"
                checked={member.active}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="active">Active</label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
