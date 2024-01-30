import Auth0Provider from "next-auth/providers/auth0";
import { loginUser } from "./usersFunctions";

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      authorization: {
        params: {
          scope: "openid email profile",
          prompt: "login",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        //user = {...user, asseraderoId: 1}
        Object.assign(user,{asseraderoId: 1})
        //console.log(profile)
        loginUser(user)
        return true
      } else {
          console.log("Error de Login")
        return false        
      }
    }
  }
};