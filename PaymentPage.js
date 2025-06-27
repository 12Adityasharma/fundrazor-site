"use client";
import React, { useState } from "react";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import { useSession } from "next-auth/react";

const PaymentPage = ({ username }) => {

  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
const [currentUser, setcurrentUser] = useState({})
  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    // if (typeof window === "undefined" || typeof window.Razorpay === "undefined") {
    //   alert("Razorpay SDK not loaded");
    //   return;
    // }

    // Get the order ID from backend
    const order = await initiate(amount, username, paymentform);
    const options = {
      key: process.env.KEY_ID, 
      amount: amount,
      currency: "INR",
      name: "Fund-Razor",
      description: "Test Transaction",
      image: "https://example.com/your_logo", 
      order_id: order.id,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name || "Anonymous",
        email: "example@email.com",
        contact: "9999999999",
      },
      notes: {
        message: paymentform.message,
      },
      theme: {
        color: "#3399cc",
      },
    };

     const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments) 
    }

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      <div className="min-h-screen">
        <div className="bg-slate-700 w-full min-h-80 relative -z-10 ">
          <img
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4424453/6e8aaded0cd74ff78dd79d664a30dcd5/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.png?token-hash=xf06fV_JUkkUAmE45Tr4SltYL0GaajfIoUWyWF3n9CU%3D&token-time=1751587200"
            alt=""
          />
          <div className="absolute -bottom-12 bg-gray-600 right-[46%] rounded-full">
            <img
              width={120}
              height={120}
              
              alt=""
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center py-16">
          <div className="font-semibold text-2xl">@{username}</div>
          <div className="text-slate-300">let's Help to get a cup of tea</div>
          <div className="text-gray-400">0 supporters . ₹0 raised</div>

          <div className="flex w-full gap-4 min-h-[60vh] relative  mt-8">
            <div className="w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black ml-1 pl-3 rounded-lg">
              <h1 className="font-bold text-2xl py-6 px-4">Supporters</h1>
              <ul>
                <li>Shubham donated you $30 with a message ""</li>
                <li>Shubham donated you $30 with a message ""</li>
                <li>Shubham donated you $30 with a message ""</li>
                <li>Shubham donated you $30 with a message ""</li>
              </ul>
            </div>

            <div className="w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black mr-1 pl-3 rounded-lg">
              <h1 className="font-bold text-2xl py-6 px-4">Make a payment</h1>
              <div className="flex flex-col gap-4 p-6">
                <input
                  onChange={handleChange}
                  value={paymentform.name}
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
                <input
                  onChange={handleChange}
                  value={paymentform.message}
                  name="message"
                  type="text"
                  placeholder="Message"
                  className="px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
                <input
                 
                  onChange={handleChange}
                  value={paymentform.amount}
                  name="amount"
                  type="text"
                  placeholder="Amount"
                  className="px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />

                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition shadow-lg">
                  Donate
                </button>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => pay(1000)}
                    className="px-6 py-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-medium rounded-xl shadow-sm transition"
                  >
                    Pay ₹10
                  </button>
                  <button
                    onClick={() => pay(2000)}
                    className="px-6 py-3 bg-[#333333] hover:bg-[#444444] text-white font-medium rounded-xl shadow-sm transition"
                  >
                    Pay ₹20
                  </button>
                  <button
                    onClick={() => pay(5000)}
                    className="px-6 py-3 bg-[#1f1f1f] hover:bg-[#2b2b2b] text-white font-medium rounded-xl shadow-sm transition"
                  >
                    Pay ₹50
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
