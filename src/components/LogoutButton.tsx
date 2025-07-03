"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await axios.get("/api/user/logout");
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
      alert("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="bg-[#0f172a] text-white py-[6px] px-8 dark:bg-gradient hidden md:flex rounded-md"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
