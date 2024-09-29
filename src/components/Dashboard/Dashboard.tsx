import Link from "next/link";
import UserSection from "../UserSection/UserSection";
import { User } from "firebase/auth";
import styles from "./Dashboard.module.css";
import navigationLinks from "../../config/navigation.json";

type DashboardProps = {
  signOutUser: () => Promise<void>;
  user: User;
};

const Dashboard = ({ signOutUser, user }: DashboardProps) => {
  console.log(navigationLinks);
  return (
    <div className={styles.dashboard}>
      <div className={styles.userSectionWrapper}>
        <UserSection user={user} /> {/* Pass user directly to UserSection */}
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
