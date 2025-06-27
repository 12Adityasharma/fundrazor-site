"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilePic: "",
    coverPic: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      fetchUser();
    }
  }, [session]);

  const fetchUser = async () => {
    try {
      const res = await fetch(`/api/getuser?email=${session.user.email}`);
      const data = await res.json();
      setFormData({
        name: data.name || "",
        email: data.email || "",
        username: data.username || "",
        profilePic: data.profilePic || "",
        coverPic: data.coverPic || "",
        razorpayId: data.razorpayid || "",
        razorpaySecret: data.razorpaysecret || "",
      });
    } catch (err) {
      console.error("Error loading user data:", err);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/updateuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Saved successfully");
    } else {
      const error = await res.json();
      alert("Failed: " + error.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[38%] p-6 shadow-lg min-h-fit">
        <form onSubmit={handleSubmit} className="space-y-3">
          <h2 className="text-2xl font-bold text-center mb-2">
            Welcome to your dashboard
          </h2>

          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Profile Pic</label>
            <input
              name="profilePic"
              value={formData.profilePic}
              onChange={handleChange}
              className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Cover Pic</label>
            <input
              name="coverPic"
              value={formData.coverPic}
              onChange={handleChange}
              className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Razorpay ID</label>
            <input
              name="razorpayId"
              value={formData.razorpayId}
              onChange={handleChange}
              className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Razorpay Secret</label>
            <input
              name="razorpaySecret"
              value={formData.razorpaySecret}
              onChange={handleChange}
              className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-semibold"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
