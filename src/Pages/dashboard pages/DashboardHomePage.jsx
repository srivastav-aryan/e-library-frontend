import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function DashboardHomePage() {
  return (
    <main className="min-h-[calc(100%-29px)] flex items-center justify-center">
      <div className="text-center ">
        <h3 className="text-3xl mb-2">Go to Books sections</h3>
        <Link to={"/dashboard/books"}><Button>Books Section</Button></Link>
      </div>
    </main>
  );
}

export default DashboardHomePage;
