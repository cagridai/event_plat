"use client";
import React from "react";
import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";

const NavItems = (props: any) => {
  const pathname = usePathname();
  const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-gray-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <SheetCloseWrapper {...sheetCloseWrapperProps}>
              <Link href={link.route}>{link.label}</Link>
            </SheetCloseWrapper>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
