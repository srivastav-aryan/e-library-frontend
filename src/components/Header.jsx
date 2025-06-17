import { SidebarTrigger } from "@/components/ui/sidebar";
import {  Moon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./ui/sidebar";
import { SearchForm } from "@/components/ui/search-form";

function Header() {
  const { state, isMobile } = useSidebar();

  return (
    <header
      className="flex fixed z-40  right-0 top-0 border-b-2 py-2 px-6 items-center transition-[left] duration-200 ease-in-out justify-between"
      style={{ left: !isMobile && state == "expanded" ? "16rem" : "0" }}
    >
      <div className="flex items-center">
        <SidebarTrigger className="md:h-[3rem] md:w-[3rem]" />
        <SearchForm className="md:w-[17rem]" />
      </div>
      <div className="flex items-center gap-2.5">
        <Button className=" border-2  " variant={"outline"}>
          <Moon className="text-black" />
        </Button>
        <Button className=" border-2 " variant={"outline"}>
          <User />
        </Button>
      </div>
    </header>
  );
}

export default Header;
