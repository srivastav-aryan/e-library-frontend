import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

function Books() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to={"/dashboard/home"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Books</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main>
        <Table>
          <TableCaption>A list of all Books</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Action</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div>
                  <img src="" alt="" />
                  <span className="mr-5">Aryans love story</span>
                </div>
              </TableCell>
              <TableCell>Rom-Com</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">
                <Link>
                  <Button>Edit</Button>
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <Link>
                  <Button>Delete</Button>
                </Link>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Aryan</TableCell>
              <TableCell>Rom-Com</TableCell>
              <TableCell>
                <div className="flex justify-start gap-2 items-center">
                  <span className="mr-5">Aryans love story</span>
                  <img
                    src="../../../Image_created_with_a_mobile_phone.png"
                    alt="book-cover-img"
                    height={100}
                    width={130}
                  />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Link>
                  <Button>Edit</Button>
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <Link>
                  <Button>Delete</Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </>
  );
}

export default Books;
