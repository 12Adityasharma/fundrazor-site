import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center gap-8 min-h-[90vh]">
        <div className="flex gap-4">
          <span className="font-extrabold text-6xl">Get Me A Chai</span>
          <span className="pt-2">
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdwNnFlaXo0Yzkzem90YXF3cmZ0Y3gxdHNsZjI0NDl4ZzdzdWVhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xUA7aNHeJCGPmDHZ3W/giphy.gif"
              alt=""
              height={55}
              width={55}
            />
          </span>
        </div>

        <p className="font-bold">
          A Crowdfunding platform for creaters. Get funded by your fans and
          followers. Start Now!
        </p>
        <div className=" flex justify-center items-center gap-7 pt-3">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Start Here"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Start Here
            </a>
          </div>
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Read More"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-20"></div>
      <div className="text-center pt-12 h-96 text-white ">
        <span className="font-bold text-2xl">Your fans can buy you a chai</span>
        <div className="flex justify-around pt-16">
          <div className="flex flex-col gap-4 ">
            <span>
              <img
                className="ml-20 pb-7"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjljbzkwdDFpYzJkZGtsbnRwYm96bGdlZGt2cmk3ZDdnemYzcW9taSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/EIOKH2p0wqgl9KW5fg/giphy.gif"
                alt=""
                height={85}
                width={85}
              />
            </span>
            <span className="font-bold ">Fund Yourself</span>
            <p>Your fans are available to help you</p>
          </div>
          <div className="flex flex-col gap-4">
            <span>
              <img
                className="ml-20"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmc3eDJmNGg5b2RoOXY1ZDhhaG1jbWUwOGJ6NjBmNXdvbWpiYzRnciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/l4FGxli967GNywSd2/giphy.gif"
                alt=""
                height={100}
                width={100}
              />
            </span>
            <span className="font-bold ">Fund Yourself</span>
            <p>Your fans are available to help you</p>
          </div>
          <div className="flex flex-col gap-4 ">
             <span>
              <img
                className="ml-20"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmc3eDJmNGg5b2RoOXY1ZDhhaG1jbWUwOGJ6NjBmNXdvbWpiYzRnciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/l4FGxli967GNywSd2/giphy.gif"
                alt=""
                height={100}
                width={100}
              />
            </span>
            <span className="font-bold ">Fund Yourself</span>
            <p>Your fans are available to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-20"></div>
      <div className="h-96 text-white text-center mt-12 flex flex-col gap-10 px-4">
        <span className="font-bold text-3xl pb-8">Learn more about us</span>
        <p>
          At Get Me A Chai, we are dedicated to supporting developers, creators,
          and influencers by connecting them with their supporters. Our platform
          enables individuals to fund their projects and ideas, providing a
          space where creativity and innovation can thrive.
        </p>
        <p>
          Our mission is to empower talented individuals by facilitating
          financial support, allowing them to focus on what they do best –
          creating. Whether you're a developer coding the next big app, a
          content creator making engaging videos, or an influencer sharing your
          passion, Get Me A Chai is here to help you achieve your goals.
        </p>
        <p>
          We believe in the power of community and the impact of collective
          support. By providing a platform for patrons to contribute, we aim to
          transform dreams into reality and foster a culture of creativity and
          innovation.
        </p>
      </div>
    </>
  );
}
