import {
  getAuth,
  sendSignInLinkToEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const auth = getAuth();

  const sendEmailLink = () => {
    const actionCodeSettings = {
      url: "http://localhost:3000/finishSignUp",
      handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        setMessage("A sign-in link has been sent to your email address.");
      })
      .catch((error) => {
        console.error(error);
        setMessage("An error occurred while sending the sign-in link.");
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setMessage("Signed in with Google successfully.");
      })
      .catch((error) => {
        console.error(error);
        setMessage("An error occurred during Google sign-in.");
      });
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={sendEmailLink}>Sign in with Email Link</button>
      <button onClick={signInWithGoogle}>Sign in Google</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignIn;
