import Link from "next/link";
import UserSection from "../UserSection/UserSection";
import { User } from "firebase/auth";
import styles from "./Dashboard.module.css";

type DashboardProps = {
  signOutUser: () => Promise<void>;
  user: User;
};

const Dashboard = ({ signOutUser, user }: DashboardProps) => {
  return (
    <div className={styles.dashboard}>
      {/* Full-width UserSection below the header */}
      <div className={styles.userBar}>
        <UserSection user={user} signOutUser={signOutUser} />
      </div>

      <div className={styles.dashboardContent}>
        <nav className={styles.dashboardNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/dashboard/home" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/profile" className={styles.navLink}>
                Profile
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/settings" className={styles.navLink}>
                Settings
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/help" className={styles.navLink}>
                Help
              </Link>
            </li>
          </ul>
        </nav>
        <main className={styles.mainContent}>
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
