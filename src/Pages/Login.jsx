import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginMethod } from "../http/api";
import { LoaderCircle } from "lucide-react";
import { saveAuthInfoToLocalStorage } from "../utils/authUtils";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const Navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginMethod,
    onSuccess: (response) => {
      const { authToken } = response.data;
      saveAuthInfoToLocalStorage(authToken);
      Navigate("/dashboard/home");
    },

    onError: (err) => {
      console.log(`error occured while loging in :-- ${err}`);
      alert(
        "Error in login: " +
          (err.response?.data?.message ||
            err.message ||
            "Please check your credentials.")
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginMutation.mutate(data);
  };

  return (
    <main className="flex  justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full">
        <Card className="max-w-sm mx-auto">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">
                <Link to={"/auth/register"}>Sign Up</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  ref={passwordRef}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full "
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? (
                <span className="flex gap-2.5 items-center">
                  <LoaderCircle className="animate-spin" />
                  Sign in
                </span>
              ) : (
                "Sign in  "
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}

export default Login;
