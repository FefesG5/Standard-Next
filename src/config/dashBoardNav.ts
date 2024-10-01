export type NavItem = {
  href: string;
  label: string;
  icon: string;
};

export const dashboardNav: NavItem[] = [
  {
    href: "/dashboard/home",
    label: "Home",
    icon: "/dashboard-icon.svg",
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
    icon: "/person-outline-icon.svg",
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: "/settings-icon.svg",
  },
  {
    href: "/dashboard/help",
    label: "Help",
    icon: "/help-icon.svg",
  },
];
