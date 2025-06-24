import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "Fund-Razor!",
  description: "A donation platform for the creators",
};

export default function RootLayout({ children }) {
  return (
<html lang="en">

  <body className="text-white relative min-h-screen w-full bg-black">
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    <div className="absolute -z-20 left-10 right-0 top-[-10%] md:h-[700px] md:w-[700px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
    <SessionWrapper>
      <Navbar />
     <div className="min-h-screen">{children}</div> 
      <Footer />
    </SessionWrapper>
  </body>
</html>
  );
}
