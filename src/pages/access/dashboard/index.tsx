import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../../../firebase.config";
import Spinner from "@/components/Spinner/Spinner";

export default function DashboardHome() {
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
    return <p>You must be logged in to access the dashboard.</p>;
  }

  return (
    <DashboardLayout user={user} signOutUser={() => auth.signOut()}>
      <h1>Dashboard Home</h1>
      <p>Welcome to the dashboard! You can manage everything from here.</p>
    </DashboardLayout>
  );
}
