import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";
import NavItem from "../NavItem/NavItem";
import navigationLinks from "../../config/navigation.json";
import { ThemeContext } from "@/contexts/ThemeContext";
import { poppins } from "@/app/ui/fonts";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header
      className={`${poppins.className} flex items-center justify-between py-6 px-6 shadow-md`}
      style={{ backgroundColor: "var(--header-bg-color)" }}
    >
      {/* Logo Container */}
      <div>
        <Link href="/">
          <Image
            src="/next.svg" // Assuming you have a Next.js logo SVG in your public directory
            alt="Next.js Logo"
            width={128} // Adjust to the size of your actual logo
            height={64} // Adjust to the size of your actual logo
          />
        </Link>
      </div>

      {/* Hamburger Icon for Smaller Screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <Image src="/menu-icon.svg" alt="Menu Icon" width={32} height={32} />
      </button>

      {/* Sidebar rendering */}
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      )}

      {/* Navigation */}
      <nav className="hidden lg:flex justify-end items-center w-full">
        <ul className="flex list-none p-0 m-0 ml-auto">
          {/* Navigation Items */}
          {navigationLinks.map((nav) => (
            <NavItem
              key={nav.href}
              href={nav.href}
              label={nav.label}
              variant={"header"}
              closeSidebar={closeSidebar}
            />
          ))}
        </ul>
      </nav>

      {/* Theme Changer Button */}
      <button
        onClick={toggleTheme}
        className="hidden lg:block bg-transparent cursor-pointer"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </header>
  );
};

export default Header;
