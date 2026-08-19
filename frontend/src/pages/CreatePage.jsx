import React, { useState } from "react";
import { ArrowLeftIcon, Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:5001/api/notes", { title, content });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-base-content/60 hover:text-base-content transition-colors mb-8"
          >
            <ArrowLeftIcon className="size-4" />
            <span className="text-sm">Back to Notes</span>
          </Link>

          <div className="bg-base-100/50 backdrop-blur-sm border border-base-content/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8">
              Create New Note
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-base-content/80">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Give your note a title..."
                  className="input input-bordered w-full bg-base-200/50 focus:border-[#00FF9D] focus:outline-none transition-colors"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-base-content/80">
                  Content
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-48 bg-base-200/50 focus:border-[#00FF9D] focus:outline-none transition-colors resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="btn bg-[#00FF9D] hover:bg-[#00FF9D]/80 text-black border-none font-semibold px-8"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2Icon className="size-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Note"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
