import { Library, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice";
import LogoutButton from "./LogoutButton";
import { useState } from "react";

function AuthHeader() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-white px-4 py-3 shadow-md sm:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
          <Library size={32} />
          <h1>Coder's Book</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link to={"/"} className="text-base hover:text-blue-500">Home</Link>
          <Link to={"/about"} className="text-base hover:text-blue-500">About</Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button asChild variant={"outline"}>
                <Link to={"/dashboard/home"}>Dashboard</Link>
              </Button>
              <LogoutButton />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant={"outline"}>
                <Link to={"/auth/login"}>Log In</Link>
              </Button>
              <Button asChild>
                <Link to={"/auth/register"}>Register</Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 p-4">
            <Link to={"/"} className="text-lg hover:text-blue-500" onClick={toggleMenu}>Home</Link>
            <Link to={"/about"} className="text-lg hover:text-blue-500" onClick={toggleMenu}>About</Link>
            <div className="mt-4 h-px w-full bg-gray-200"></div>
            {isAuthenticated ? (
              <div className="flex flex-col items-center gap-4 pt-4">
                <Button asChild variant={"outline"} onClick={toggleMenu}>
                  <Link to={"/dashboard/home"}>Dashboard</Link>
                </Button>
                <LogoutButton />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 pt-4">
                <Button asChild variant={"outline"} onClick={toggleMenu}>
                  <Link to={"/auth/login"}>Log In</Link>
                </Button>
                <Button asChild onClick={toggleMenu}>
                  <Link to={"/auth/register"}>Register</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default AuthHeader;
