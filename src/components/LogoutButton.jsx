import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { removeAuthInfoFromLocalStorage } from "../utils/authUtils";
import { useDispatch } from "react-redux";
import { Logout } from "../features/auth/authSlice";

function LogoutButton() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogout = () => {
    removeAuthInfoFromLocalStorage();
    dispatch(Logout());
    Navigate("/auth/login");
  };

  return (
    <>
      <Button className=" border-2 " variant={"outline"} onClick={handelLogout}>
        Log Out
      </Button>
    </>
  );
}

export default LogoutButton;
