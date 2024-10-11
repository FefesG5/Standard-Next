import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import navigationLinks from "../../config/navigation.json";
import NavItem from "../NavItem/NavItem";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeSidebar]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 right-0 h-full shadow-lg z-50 transform transition-transform duration-300 ease-in-out bg-[var(--header-bg-color)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-64 p-6 flex flex-col items-center`}
    >
      {/* Navigation List */}
      <ul className="list-none w-full p-0 m-0">
        {navigationLinks.map((nav) => (
          <NavItem
            key={nav.href}
            href={nav.href}
            label={nav.label}
            variant={"sidebar"}
            closeSidebar={closeSidebar}
          />
        ))}
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="mt-auto py-2 px-4 rounded transition-colors duration-200 ease-in-out"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </aside>
  );
};

export default Sidebar;
