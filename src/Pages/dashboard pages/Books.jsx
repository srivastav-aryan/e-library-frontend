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
import { useMutation } from "@tanstack/react-query";
import { deleteBook } from "../../http/api";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

function Books() {
  const [deletingBookId, setDeletingBookId] = useState(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });

  const deleteBookMutation = useMutation({
    mutationFn: deleteBook,
    onMutate: (bookId) => {
      setDeletingBookId(bookId);
    },
    onSettled: () => {
      setDeletingBookId(null);
    },
    onSuccess: () => {
      alert("Book deleted successfully.");
      navigate("/dashboard/books");
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    onError: (err) => {
      console.log(`error occured while deleting book :-- ${err}`);
      alert(
        "Error in deleting book: " +
          (err.response?.data?.message ||
            err.message ||
            "Please check your credentials.")
      );
    },
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
                      <Button onClick={() => deleteBookMutation.mutate(book._id)} disabled={deletingBookId === book._id}>{deletingBookId === book._id ? <LoaderCircle className="animate-spin" /> : "Delete"}</Button>
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
