import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const authoptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDB();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
            profilePic: user.image, // Save GitHub profile pic
          });
          await newUser.save();
        }

        return true;
      }
      return false;
    },

    async session({ session }) {
      await connectDB();

      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.username = dbUser.username;
        session.user.name = dbUser.name || dbUser.username;
        session.user.image = dbUser.profilePic;
      }

      return session;
    },
  },
};

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };
