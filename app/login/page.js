"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


const GoogleIcon = (props) => (
  <svg className={props.className} viewBox="-0.5 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
      <path fill="#FBBC05" d="M9.83,24c0-1.52.25-2.98.7-4.36L2.62,13.6C1.08,16.73.21,20.26.21,24c0,3.74.87,7.26,2.41,10.39l7.91-6.05c-.45-1.36-.71-2.81-.71-4.34Z" />
      <path fill="#EB4335" d="M23.71,10.13c3.31,0,6.3,1.17,8.66,3.1l6.84-6.83C35.04,2.77,29.7.53,23.71.53c-9.29,0-17.27,5.31-21.09,13.07l7.91,6.04c1.82-5.53,6.99-9.51,13.18-9.51Z" />
      <path fill="#34A853" d="M23.71,37.87c-6.18,0-11.35-4-13.17-9.51l-7.91,6.04C6.45,42.16,14.43,47.47,23.71,47.47c5.74,0,11.22-2.04,15.32-5.85l-7.51-5.8c-2.11,1.33-4.78,2.05-7.81,2.05Z" />
      <path fill="#4285F4" d="M46.15,24c0-1.39-.21-2.82-.54-4.27H23.71v9.06h12.6c-.63,3.09-2.35,5.48-4.79,7.03l7.51,5.8C43.34,37.61,46.15,31.65,46.15,24Z" />
    </g>
  </svg>
);


const LinkedInIcon = (props) => (
  <svg className={props.className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#007EBB" d="M44 39h-9.72v-11c0-2.5-.9-4.2-3.14-4.2-1.71 0-2.73 1.15-3.17 2.26-.16.39-.2.93-.2 1.47v11.5H18v-21h9.38v2.89c1.3-1.6 3.25-3.14 6.61-3.14 4.83 0 8.4 3.2 8.4 10.05V39zM9 15.79c-3.13 0-5.18-2.07-5.18-4.65C3.82 8.57 5.87 6.5 9 6.5c3.17 0 5.2 2.07 5.2 4.65 0 2.58-2.03 4.64-5.2 4.64zm-4.86 23.2H14V18H4.14v20.99z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg className={props.className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#00AAEC" d="M42 12.8c-1.5.7-3.1 1.1-4.8 1.4 1.7-1 3-2.5 3.6-4.3-1.6.9-3.4 1.6-5.3 2-1.5-1.6-3.6-2.5-5.9-2.5-4.4 0-7.9 3.6-7.9 8 0 .6.1 1.3.3 1.9-6.6-.4-12.5-3.5-16.5-8.3-.7 1.3-1 2.7-1 4.2 0 2.8 1.3 5.2 3.4 6.6-1.3 0-2.6-.4-3.6-1v.1c0 4 2.8 7.4 6.6 8.1-.7.2-1.4.3-2.2.3-.5 0-1 0-1.5-.1 1 3.2 4 5.6 7.5 5.6-2.8 2.3-6.3 3.7-10.2 3.7-.7 0-1.4 0-2-.1 3.7 2.4 8.2 3.8 13 3.8 15.6 0 24-13.1 24-24.4v-1.1c1.6-1.2 3-2.6 4.1-4.2z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg className={props.className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4460A0" d="M24 4C12.95 4 4 12.95 4 24c0 9.7 7.16 17.74 16.44 19.45v-13.7h-4.95v-5.75h4.95v-4.38c0-4.9 2.9-7.61 7.35-7.61 2.13 0 4.35.38 4.35.38v4.77h-2.45c-2.4 0-3.15 1.49-3.15 3.02v3.43h5.35l-.85 5.75h-4.5v13.7C36.84 41.74 44 33.7 44 24c0-11.05-8.95-20-20-20z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#000000" d="M12 0.5C5.73 0.5.5 5.73.5 12.01c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.39-3.88-1.39-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.05 1.8 2.76 1.28 3.44.98.11-.77.4-1.28.73-1.57-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.19a10.94 10.94 0 0 1 5.76 0c2.2-1.5 3.17-1.19 3.17-1.19.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.7.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.79.56A10.5 10.5 0 0 0 23.5 12c0-6.28-5.23-11.5-11.5-11.5z" />
  </svg>
);

const AppleIcon = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#000000" d="M16.7 13.3c0-2.2 1.8-3.3 1.9-3.4-1-1.4-2.6-1.6-3.2-1.6-1.4-.1-2.8.8-3.6.8-.7 0-1.8-.8-3-0.8-1.5 0-2.9.9-3.7 2.4-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.8 2.3 3.1 2.2 1.2-.1 1.6-.7 3-0.7 1.3 0 1.7.7 3 .7 1.3 0 2.1-1.1 2.9-2.2.9-1.3 1.2-2.6 1.2-2.7 0-.1-2.3-.9-2.3-3.6zM14.6 6.1c.6-.8 1-1.8.9-2.9-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.7 1 .1 2-.4 2.6-1.2z" />
  </svg>
);

export default function SocialLoginPage() {
  
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

 

  

  return (
    <div className="flex flex-col items-center justify-center flex-grow px-4 py-10 min-h-[87vh]">
      <h1 className='text-white pb-6 font-bold text-3xl'>Login/Signup To Get Started</h1>
      <div className="flex flex-col gap-3 p-10 rounded-xl shadow-2xl">

        <button className="flex items-center bg-white/90 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-white transition-all duration-200 max-w-xs w-full">
          <GoogleIcon className="h-6 w-6 mr-2" />
          <span>Continue with Google</span>
        </button>

        <button className="flex items-center bg-white/90 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-white transition-all duration-200 max-w-xs w-full">
          <LinkedInIcon className="h-6 w-6 mr-2" />
          <span>Continue with LinkedIn</span>
        </button>

        <button className="flex items-center bg-white/90 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-white transition-all duration-200 max-w-xs w-full">
          <TwitterIcon className="h-6 w-6 mr-2" />
          <span>Continue with Twitter</span>
        </button>

        <button className="flex items-center bg-white/90 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-white transition-all duration-200 max-w-xs w-full">
          <FacebookIcon className="h-6 w-6 mr-2" />
          <span>Continue with Facebook</span>
        </button>

        <button  onClick={() => {signIn('github')}} className="cursor-pointer flex items-center bg-white/90 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-white transition-all duration-200 max-w-xs w-full">
          <GithubIcon className="h-6 w-6 mr-2" />
          <span>Continue with Github</span>
        </button>

        <button className="flex items-center bg-white/90 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-white transition-all duration-200 max-w-xs w-full">
          <AppleIcon className="h-6 w-6 mr-2" />
          <span>Continue with Apple</span>
        </button>

      </div>
    </div>
  );
}
