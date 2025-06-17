import React from 'react'
import { Library, Moon, User } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function AuthHeader() {
  return (
      <header className="flex fixed z-40 left-0 right-0 top-0 border-b-2 py-2 px-6 items-center transition-[left] duration-200 ease-in-out justify-around">
        <div className="flex gap-2 text-3xl">
          <Library size={40} />
          <h1>Coder's Book</h1>
        </div>

        <nav>
          <ul className="flex gap-10">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </nav>
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

export default AuthHeader