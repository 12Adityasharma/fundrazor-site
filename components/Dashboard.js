"use client"
import {React, useEffect, useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const {data: session} = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session){
       router.push('/login')
    }
  
  }, [session, router])

  const [formData, setFormData] = useState({
    name: 'Aditya Sharma',
    email: '12adityasharma34@gmail.com',
    username: '12adityasharma34',
    profilePic: '',
    coverPic: '',
    razorpayId: '',
    razorpaySecret: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };
  
  return (
    
    <main className="relative -z-10   flex justify-center pt-2">
  <div className="w-[38%]  p-6  shadow-lg min-h-fit">
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-2xl font-bold text-center mb-2">
        Welcome to your dashboard
      </h2>

      <div>
        <label className="block font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-1 rounded-lg font-light bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-1 font-light rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-1 font-light rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Profile Picture</label>
        <input
          type="text"
          name="profilePic"
          value={formData.profilePic}
          onChange={handleChange}
          className="w-full px-4 py-1 font-light rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Cover Picture</label>
        <input
          type="text"
          name="coverPic"
          value={formData.coverPic}
          onChange={handleChange}
          className="w-full px-4 py-1 font-light rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Razorpay ID</label>
        <input
          type="text"
          name="razorpayId"
          value={formData.razorpayId}
          onChange={handleChange}
          className="w-full px-4 py-1 font-light rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Razorpay Secret</label>
        <input
          type="text"
          name="razorpaySecret"
          value={formData.razorpaySecret}
          onChange={handleChange}
          className="w-full px-4 py-1 font-light rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
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
</main>


  )
}

export default Dashboard
