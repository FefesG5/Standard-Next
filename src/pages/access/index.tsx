import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../../firebase.config";
import Spinner from "@/components/Spinner/Spinner";
import SignIn from "@/components/SignIn/SignIn";

export default function AccessIndex() {
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

  if (!user) {
    return <SignIn />;
  }

  return (
    <DashboardLayout user={user} signOutUser={() => auth.signOut()}>
      <h1>Dashboard Home</h1>
      <p>Welcome to the dashboard! You can manage everything from here.</p>
    </DashboardLayout>
  );
}
