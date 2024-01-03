import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavItems from "@/components/shared/NavItems";
import Image from "next/image";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={"/assets/icons/menu.svg"}
            alt={"Menu button"}
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src={"/assets/images/logo.svg"}
            alt={"logo"}
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />

          <NavItems withSheetClose />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
export default MobileNav;
