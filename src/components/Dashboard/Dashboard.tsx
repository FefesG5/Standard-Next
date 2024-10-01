import Link from "next/link";
import Image from "next/image";
import UserSection from "../UserSection/UserSection";
import { User } from "firebase/auth";
import { dashboardNav } from "@/config/dashBoardNav";

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
            {dashboardNav.map((item) => (
              <li className={styles.navItem} key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      width={50}
                      height={50}
                      className={styles.navIcon}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
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
