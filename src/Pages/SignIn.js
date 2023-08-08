import React, { useState } from "react";
import {auth,provider,database} from '../misc/firebase'
import { signInWithPopup } from "firebase/auth";
import {set, ref,serverTimestamp } from "firebase/database";


const SignIn = () => {
  const [user, setUser] = useState('');

  async function handleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider); 
      const signedInUser = result;
      setUser(signedInUser.user.email);
      console.log(signedInUser);

      if (signedInUser._tokenResponse.isNewUser) {
        set(ref(database, `/profiles/${signedInUser._tokenResponse.localId}`), {
          name: signedInUser._tokenResponse.displayName,
          createdAt: serverTimestamp()
        });
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="sign-in gap-3 container d-flex flex-column align-items-center justify-content-center">
        <div>
          <h1 className="text-center display-2">Welcome to Chat</h1>
          <p className="text-center">Progressive chat platform for neophytes</p>
        </div>

        <button
        onClick={handleSignIn}
         className="text-bg-success border-0 rounded px-3 py-2 d-flex align-items-center gap-1">
          <ion-icon name="logo-google"></ion-icon>
          <span>Continue with Google</span>
        </button>
      </div>
    </>
  );
};

export default SignIn;
