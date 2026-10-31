export interface NavLink {
  label: string;
  href: string;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  href: string;
}

export const siteConfig = {
  name: "Utility.SiddharthPrakashan",
  shortName: "Utility",
  url: "https://utility.siddharthprakashan.com",
  description: "Independent, privacy-focused browser utilities.",
  author: "Siddharth Prakashan",
  authorUrl: "https://siddharthprakashan.com",
  // TODO: confirm the public contact address.
  email: "contact@siddharthprakashan.com",
} as const;

export const tools: Tool[] = [
  {
    slug: "ig-followers-check",
    name: "IG Followers Check",
    description:
      "See who doesn't follow you back using your Instagram data export, processed entirely in your browser.",
    href: "/ig-followers-check/",
  },
];

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  ...tools.map((tool) => ({ label: tool.name, href: tool.href })),
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const footerNav: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Credits", href: "/credits/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
];
