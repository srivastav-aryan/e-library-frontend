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
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../../http/api";

function Books() {
  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });

  return (
    <>
      <div className="flex items-center justify-between px-5 pt-1 pb-6">
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

        <Link to={"/dashboard/books/create"}>
          <Button>Add Book</Button>
        </Link>
      </div>

      <main className="px-3">
        <Table>
          <TableCaption>A list of all Books</TableCaption>
          <TableHeader className="border-t-1">
            <TableRow>
              <TableHead className="w-[100px]">Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Read now</TableHead>
              <TableHead className="text-right">Action</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map((book) => {
              return (
                <TableRow key={book._id}>
                  <TableCell className="font-medium">
                    {book.authorName}
                  </TableCell>
                  <TableCell>{book.genere}</TableCell>
                  <TableCell>
                    <div className="flex j gap-2 items-center">
                      <img
                        src={book.coverImage}
                        alt="book-cover-img"
                        height={100}
                        width={130}
                      />
                      <span className="mr-5">{book.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <a href={book.file}>Read here</a>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link to={`/dashboard/books/edit/${book._id}`}>
                      <Button>Edit</Button>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link>
                      <Button>Delete</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </main>
    </>
  );
}

export default Books;
