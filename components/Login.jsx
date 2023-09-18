import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignInOut = async () => {
    if (session) {
      setIsSigningOut(true);
      await signOut();
      setIsSigningOut(false);
    } else {
      signIn();
    }
  };

  return (
    <>
      <button
        onClick={handleSignInOut}
        className="text-primary-gold-100"
        style={{ fontSize: "30px", fontWeight: "bold" }}
      >
        {session ? `Signed in as ${session.user.email}` : "Sign in"}
        {isSigningOut && " (Signing out...)"}
      </button>
    </>
  );
};

export default Login;
