import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import connectDB from "@/db/connectDb"; 

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        
        await mongoose.connect("mongodb://localhost:27017/chai");

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          });
          await newUser.save();
        }

        return true;
      }

     
    },

    async session({ session }) {
      await mongoose.connect("mongodb://localhost:27017/chai");

      const dbUser = await User.findOne({ email: session.user.email });

      session.user.name = dbUser.username;
     

      return session;
    },
  },
  
});

export { authoptions as GET, authoptions as POST };
