"use client";

import React, { useEffect, useState } from "react";
import { supabase, ContactMessage } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";

export default function MessageDetail() {
  const [message, setMessage] = useState<ContactMessage | null>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .eq("id", params.id)
        .single();
      if (error) {
        alert("Message not found.");
        router.push("/admin/dashboard");
      } else {
        setMessage(data);
        setReplyMessage(data.reply_message || "");
      }
      setLoading(false);
    };
    fetch();
  }, [params.id, router]);

  const handleSaveReply = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("contact_messages")
      .update({
        reply_message: replyMessage,
        replied: true,
        replied_at: new Date().toISOString(),
      })
      .eq("id", params.id);
    setSaving(false);
    if (error) alert("Failed to save reply.");
    else router.push("/admin/dashboard");
  };

  const handleDelete = () => {
    if (!confirm("Delete this message?")) return;
    supabase.from("contact_messages").delete().eq("id", params.id).then(() => router.push("/admin/dashboard"));
  };

  if (loading) return <div className="container py-5 text-center">Loading...</div>;
  if (!message) return null;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Message Details</h2>
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={() => router.push("/admin/dashboard")}>Back</button>
              <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-3 fw-bold">From:</div>
                <div className="col-sm-9">{message.first_name} {message.last_name} ({message.email})</div>
              </div>
              {message.phone && (
                <div className="row mb-3">
                  <div className="col-sm-3 fw-bold">Phone:</div>
                  <div className="col-sm-9">{message.phone}</div>
                </div>
              )}
              {message.service && (
                <div className="row mb-3">
                  <div className="col-sm-3 fw-bold">Service:</div>
                  <div className="col-sm-9">{message.service}</div>
                </div>
              )}
              {message.subject && (
                <div className="row mb-3">
                  <div className="col-sm-3 fw-bold">Subject:</div>
                  <div className="col-sm-9">{message.subject}</div>
                </div>
              )}
              <div className="row mb-3">
                <div className="col-sm-3 fw-bold">Message:</div>
                <div className="col-sm-9">{message.message}</div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3 fw-bold">Received:</div>
                <div className="col-sm-9">{new Date(message.created_at).toLocaleString()}</div>
              </div>
              {message.replied && (
                <div className="row mb-3">
                  <div className="col-sm-3 fw-bold">Replied at:</div>
                  <div className="col-sm-9">{message.replied_at ? new Date(message.replied_at).toLocaleString() : "—"}</div>
                </div>
              )}
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="mb-0">Reply</h5>
            </div>
            <div className="card-body">
              <textarea
                className="form-control"
                rows={6}
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Type your reply here..."
              />
              <div className="mt-3">
                <button className="btn btn-primary" onClick={handleSaveReply} disabled={saving}>
                  {saving ? "Saving..." : "Send Reply"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
