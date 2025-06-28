import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSidebar } from "./ui/sidebar";
import { SearchForm } from "@/components/ui/search-form";
import LogoutButton from "./LogoutButton";

function Header() {
  const { state, isMobile } = useSidebar();

  return (
        <header
      className="flex fixed z-40 right-0 top-0 items-center justify-between border-b bg-white px-4 py-2 shadow-md transition-all duration-300 ease-in-out sm:px-6"
      style={{ left: !isMobile && state == "expanded" ? "16rem" : "0" }}
    >
      <div className="flex items-center gap-2 sm:gap-4">
        <SidebarTrigger className="h-10 w-10" />
        <SearchForm className="w-32 sm:w-full sm:max-w-xs" />
      </div>
      <div className="flex items-center gap-2.5">
        <LogoutButton />
      </div>
    </header>
  );
}

export default Header;
