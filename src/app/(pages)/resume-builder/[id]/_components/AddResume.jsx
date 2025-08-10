"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddResume = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setMessage("Please enter a resume title.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const { data } = await axios.post("/api/resume", { title });

      if (data?.resume?._id) {
        // Redirect to the resume builder page
        router.push(`/resume-builder/${data.resume._id}`);
      } else {
        setMessage("❌ Failed to get resume ID.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to create resume. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter resume title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
        >
          {loading ? "Creating..." : "Create Resume"}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
};

export default AddResume;
