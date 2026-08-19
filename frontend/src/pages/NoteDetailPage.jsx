import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, Loader2Icon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2Icon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-base-content/60 hover:text-base-content transition-colors"
            >
              <ArrowLeftIcon className="size-4" />
              <span className="text-sm">Back to Notes</span>
            </Link>
            <button
              onClick={handleDelete}
              className="inline-flex items-center gap-2 text-sm text-error/80 hover:text-error transition-colors"
            >
              <Trash2Icon className="size-4" />
              Delete
            </button>
          </div>

          <div className="bg-base-100/50 backdrop-blur-sm border border-base-content/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8">Edit Note</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-base-content/80">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Note title..."
                  className="input input-bordered w-full bg-base-200/50 focus:border-[#00FF9D] focus:outline-none transition-colors"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-base-content/80">
                  Content
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-48 bg-base-200/50 focus:border-[#00FF9D] focus:outline-none transition-colors resize-none"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  className="btn bg-[#00FF9D] hover:bg-[#00FF9D]/80 text-black border-none font-semibold px-8"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? (
                    <>
                      <Loader2Icon className="size-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
