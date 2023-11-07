import Auth0Provider from "next-auth/providers/auth0";

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
        console.log("Usuario Logueado")
        return true
      } else {
          console.log("Error de Login")
        // Return false to display a default error message
        return false        
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  }
  
};