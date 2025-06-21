import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerMethod } from "../http/api";
import { LoaderCircle } from "lucide-react";
import { saveAuthInfoFromLocalStorage } from "../utils/authUtils";

function RegisterPage() {
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const Navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: registerMethod,
    onSuccess: (response) => {
      const { authToken } = response.data;
      saveAuthInfoFromLocalStorage(authToken);
      Navigate("/dashboard");
    },

    onError: (err) => {
      console.log(`error occured while Registeration :-- ${err}`);
      alert(
        "Error in Registeration: " +
          (err.response?.data?.message ||
            err.message ||
            "Please check your credentials.")
      );
    },
  });

  const handleRegisteration = (e) => {
    e.preventDefault();
    const data = {
      name: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    registerMutation.mutate(data);
  };
  return (
    <div className="flex justify-center items-center  h-screen">
      <form onSubmit={handleRegisteration} className="w-full">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-3xl">Register</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full name</Label>
              <Input
                id="full-name"
                placeholder="Enter user-name"
                required
                ref={userNameRef}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="me@example.com"
                ref={emailRef}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Enter password"
                ref={passwordRef}
              />
            </div>
            <div className="flex items-center">
              <CardDescription>Already have an Account?</CardDescription>
              <Button variant={"link"}>
                <Link to={"/auth/login"}>sign in</Link>
              </Button>
            </div>
            <Button
              type="submit"
              className="w-full "
              disabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? (
                <span className="flex gap-2.5 items-center">
                  <LoaderCircle className="animate-spin" />
                  Sign Up
                </span>
              ) : (
                "Sign Up"
              )}
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default RegisterPage;
