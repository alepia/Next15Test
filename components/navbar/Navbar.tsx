import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/contact', text: 'Contact'},
    {path: '/pricing', text: 'Pricing'},
]

export const Navbar = () => {

  return (
    <nav className="flex bg-green-500 bg-opacity-50 p-2 m-2 rounded">

      <Link href={"/"} className="flex items-center">
      <HomeIcon className="m-2"/>Home
      </Link>

      <div className="flex flex-1"></div>

      {
        navItems.map (navItem => (
            <ActiveLink key={navItem.path} {...navItem}/>
        ))
      }
    </nav>
  );
};
