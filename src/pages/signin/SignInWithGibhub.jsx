import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SignInWithGibhub = () => {
  const [signIn, setSignIn] = useState(false);

  async function signInWithGibhub() {
    await supabase.auth.signInWithAuth({
      provider: "github",
    });

    async function checkSignIn() {
      const session = await supabase.auth.getSession();
      const isSignIn = !!session.data.session;
      setSignIn(isSignIn);
    }

    async function signOut() {
      await supabase.auth.signOut();
      checkSignIn();
    }

    useEffect(() => {
      checkSignIn();
    }, []);
  }
  return <div>SignInWithGibhub</div>;
};

export default SignInWithGibhub;
