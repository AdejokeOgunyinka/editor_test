import {
  GetStartedIcon,
  DashboardIcon,
  EditorIcon,
  TribeIcon,
  BalanceIcon,
  VirtualCardIcon,
  DigitalShopIcon,
  MasterclassIcon,
  LaunchpadIcon,
  ThreeDotsIcon,
} from "../assets/svgs";

export const sidebarItemTextStyles = {
  marginLeft: "12px",
  fontSize: "16px",
  color: "#4D5760",
  fontWeight: "600",
};

export const mobileSideBarItemTextStyles = {
  fontSize: "12px",
  color: "#4D5760",
  fontWeight: "600",
};

export const sidebarItemStyles = {
  width: "100%",
  paddingLeft: "60px",
  display: "flex",
  alignItems: "center",
  marginBottom: "24px",
};

export const mobileSideBarItemStyes = {
  width: "20%",
};

export const menu1 = [
  { name: "Get Started", icon: <GetStartedIcon />, to: "/getStarted" },
  { name: "Dashboard", icon: <DashboardIcon />, to: "/" },
  { name: "Editor", icon: <EditorIcon />, to: "/editor" },
  { name: "Tribe", icon: <TribeIcon />, to: "/tribe" },
];

export const menu2 = [
  { name: "Balance", icon: <BalanceIcon />, to: "/balance" },
  { name: "Virtual Card", icon: <VirtualCardIcon />, to: "/virtualCard" },
];

export const menu3 = [
  { name: "Digital Shop", icon: <DigitalShopIcon />, to: "/digitalShop" },
  { name: "Masterclass", icon: <MasterclassIcon />, to: "/masterclass" },
  { name: "Launchpad", icon: <LaunchpadIcon />, to: "/launchpad" },
];

export const mobileMenu = [
  { name: "Dashboard", icon: <DashboardIcon />, to: "/" },
  { name: "Editor", icon: <EditorIcon />, to: "/editor" },
  { name: "Tribe", icon: <TribeIcon />, to: "/tribe" },
  { name: "Balance", icon: <BalanceIcon />, to: "/balance" },
  { name: "More", icon: <ThreeDotsIcon />, to: "/more" },
];
