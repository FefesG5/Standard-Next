import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebase.config";
import SignIn from "@/components/SignIn/SignIn";
import SignOutButton from "@/components/SignOutButton/SignOutButton";

const Access: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);
  return <>{user ? <SignOutButton /> : <SignIn />}</>;
};

export default Access;
