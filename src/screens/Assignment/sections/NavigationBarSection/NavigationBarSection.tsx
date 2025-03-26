import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = ({ onCreateJobClick }): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { label: "Home", active: true },
    { label: "Find Jobs", active: false },
    { label: "Find Talents", active: false },
    { label: "About us", active: false },
    { label: "Testimonials", active: false },
  ];

  return (
    <div className="w-full max-w-[890px] h-20 mx-auto bg-white rounded-[122px] border border-solid border-[#fcfcfc] shadow-[0px_0px_20px_#7f7f7f26] flex items-center px-6">
      {/* Logo */}
      <div className="w-11 h-[45px] bg-[url(https://c.animaapp.com/m8phsltaGH6iYA/img/clip-path-group.png)] bg-[100%_100%] mr-6" />

      {/* Navigation Menu */}
      <NavigationMenu className="flex-1">
        <NavigationMenuList className="flex space-x-2">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`inline-flex items-center justify-center px-6 py-2 rounded-[10px] [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-dark-black text-base`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Create Jobs Button */}
      <Button
        className="rounded-[30px] px-6 py-2 [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-white text-base [background:linear-gradient(180deg,rgba(161,40,255,1)_0%,rgba(97,0,173,1)_100%)]"
        onClick={onCreateJobClick}
      >
        Create Jobs
      </Button>
    </div>
  );
};
