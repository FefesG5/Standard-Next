export type NavItem = {
  href: string;
  label: string;
  icon: string;
};

export const dashboardNav = [
  {
    href: "/access/dashboard",
    label: "Home",
    icon: "/dashboard-icon.svg",
  },
  {
    href: "/access/dashboard/upload",
    label: "Upload Files",
    icon: "/upload-file-icon.svg",
  },
  {
    href: "/access/dashboard/schedule",
    label: "Generate Schedule",
    icon: "/create-schedule-icon.svg",
  },
  {
    href: "/access/dashboard/edit",
    label: "Review & Edit",
    icon: "/edit-schedule-icon.svg",
  },
];
