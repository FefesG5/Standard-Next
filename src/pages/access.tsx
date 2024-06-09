import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebase.config";
import Spinner from "@/components/Spinner/Spinner";
import SignIn from "@/components/SignIn/SignIn";
import UserSection from "@/components/UserSection/UserSection";

const Access: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <Spinner />;
  }

  return <>{user ? <UserSection user={user} /> : <SignIn />}</>;
};

export default Access;
