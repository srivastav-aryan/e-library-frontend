import { Library } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSlice";
import LogoutButton from "./LogoutButton";

function AuthHeader() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated);
  

  return (
    <header className="flex fixed z-40 left-0 right-0 top-0 border-b-2 py-2 px-6 items-center transition-[left] duration-200 ease-in-out justify-around">
      <div className="flex gap-2 text-3xl">
        <Library size={40} />
        <h1>Coder's Book</h1>
      </div>

      <nav>
        <ul className="flex gap-10">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      {isAuthenticated ? (
        <div className="flex items-center gap-2.5">
          <Button className=" border-2  " variant={"outline"}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </Button>
          <LogoutButton />
        </div>
      ) : (
        <div className="flex items-center gap-2.5">
          <Button className=" border-2  " variant={"outline"}>
            <Link to={"/auth/login"}>Log In</Link>
          </Button>
          <Button className=" border-2 " variant={"outline"}>
            <Link to={"/auth/register"}>Register</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default AuthHeader;
