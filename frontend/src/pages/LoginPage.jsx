import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-mono tracking-tight">
            ThinkBoard
          </h1>
          <p className="text-base-content/60 mt-2">Welcome back</p>
        </div>

        <div className="bg-base-100/50 backdrop-blur-sm border border-base-content/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-base-content/80">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full bg-base-200/50 focus:border-[#00FF9D] focus:outline-none transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-base-content/80">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-base-200/50 focus:border-[#00FF9D] focus:outline-none transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn bg-[#00FF9D] hover:bg-[#00FF9D]/80 text-black border-none font-semibold w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2Icon className="size-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-base-content/60">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#00FF9D] hover:underline font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
