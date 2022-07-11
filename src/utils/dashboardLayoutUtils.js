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
} from "../assets/svgs";

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
