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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border border-green-100">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Add New Resume
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Enter resume title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] disabled:opacity-50 text-white py-3 px-4 rounded-xl font-medium shadow-lg transition-all duration-200"
          >
            {loading ? "Creating..." : "Create Resume"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-5 text-sm text-center font-medium ${
              message.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddResume;
