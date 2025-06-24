
import React from "react";



const Username = ({ params }) => {
  return (
    <div className="min-h-screen">
      <div className="bg-slate-700 w-full min-h-80 relative -z-10 ">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4424453/6e8aaded0cd74ff78dd79d664a30dcd5/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.png?token-hash=xf06fV_JUkkUAmE45Tr4SltYL0GaajfIoUWyWF3n9CU%3D&token-time=1751587200"
          alt=""
        />
        <div className="absolute -bottom-12 bg-white  right-[46%] rounded-full">
          <img
            width={120}
            height={120}
            src="https://www.pngkit.com/png/detail/126-1262807_instagram-default-profile-picture-png.png"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center py-16">
        <div className="font-semibold text-2xl">{params.username}</div>
        <div className="text-slate-300">
          let's Help  to get a cup of tea
        </div>
        <div className="text-gray-400">0 supporters . ₹0 raised</div>
        <div className="flex w-full gap-4 min-h-[60vh] relative -z-20 mt-8">
          <div className="w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black ml-1 pl-3 rounded-lg">
            <h1 className="font-bold text-2xl py-6 px-4">Supporters</h1>
            <ul>
              <li>Shubham donated you $30 with a message ""</li>
              <li>Shubham donated you $30 with a message ""</li>
              <li>Shubham donated you $30 with a message ""</li>
              <li>Shubham donated you $30 with a message ""</li>
            </ul>
          </div>
          <div className="w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-blackmr-1 pl-3 rounded-lg">
            <h1 className="font-bold text-2xl py-6 px-4">Make a payment</h1>
            <div className="flex flex-col gap-4 p-6">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
              <input
                type="text"
                placeholder="Message"
                className="px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
              <input
                type="text"
                placeholder="Amount"
                className="px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition shadow-lg">
                Donate
              </button>
              <div className="flex gap-4 mt-6">
                <button className="px-6 py-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-medium rounded-xl shadow-sm transition">
                  Pay $10
                </button>
                <button className="px-6 py-3 bg-[#333333] hover:bg-[#444444] text-white font-medium rounded-xl shadow-sm transition">
                  Pay $20
                </button>
                <button className="px-6 py-3 bg-[#1f1f1f] hover:bg-[#2b2b2b] text-white font-medium rounded-xl shadow-sm transition">
                  Pay $50
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Username;
