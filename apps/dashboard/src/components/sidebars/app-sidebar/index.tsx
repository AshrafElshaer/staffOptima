"use client";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Building2,
  Command,
  Frame,
  GalleryVerticalEnd,
  //   Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import type * as React from "react";

import { Icons } from "@optima/ui/icons";
import { Separator } from "@optima/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@optima/ui/sidebar";
import {
  Calendar03Icon,
  Chatting01Icon,
  Home01Icon,
  JobLinkIcon,
  UserSearch01Icon,
} from "hugeicons-react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { OrganizationLogo } from "./organization-logo";

// This is sample data.
const data = {
  user: {
    name: "Adam Ericson",
    email: "adam@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
const links = [
  {
    title: "Dashboard",
    url: "/",
    icon: <Home01Icon strokeWidth={2} size={20} />,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: <Calendar03Icon strokeWidth={2} size={20} />,
  },
  {
    title: "Job Listings",
    url: "/job-listings",
    icon: <JobLinkIcon strokeWidth={2} size={20} />,
  },
  {
    title: "Candidates",
    url: "/candidates",
    icon: <UserSearch01Icon strokeWidth={2} size={20} />,
  },
];
const communication = [
  {
    title: "Chat",
    url: "/chat",
    icon: <Chatting01Icon strokeWidth={2} size={20} />,
  },
];

const settings = [
  {
    title: "Organization",
    url: "/organization",
    icon: <Icons.Building strokeWidth={2} className="size-[20px]" />,
  },
];
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <OrganizationLogo teams={data.teams} />
      </SidebarHeader>
      <Separator  />
      <SidebarContent>
        <NavMain items={links} label="Workspace" />
        <NavMain items={communication} label="Team" />
        <NavMain items={settings} label="Settings" />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}