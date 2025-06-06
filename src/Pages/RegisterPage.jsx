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
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="flex justify-center items-center  h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">Register</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full-name">Full name</Label>
            <Input id="full-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="me@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
         <div className="flex items-center">
            <CardDescription >Already have an Account?</CardDescription>
            <Button variant={'link'}><Link to={'/login'}>sign in</Link></Button>
         </div>
          <Button className="w-full">Register</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;
