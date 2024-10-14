import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../../firebase.config";
import Spinner from "@/components/Spinner/Spinner";

export default function AccessIndex() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth(app);

  useEffect(() => {
    // Subscribe to authentication changes to manage user state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Clean up the subscription on component unmount
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
