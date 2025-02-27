import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {//next auth is going to call this function when the user goes to /account page
    authorized({ auth, request }) {//auth is current session
      return !!auth?.user //if auth.user exist return true else false
    }
  },
  pages: {
    signIn: '/login'
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth(authConfig);





