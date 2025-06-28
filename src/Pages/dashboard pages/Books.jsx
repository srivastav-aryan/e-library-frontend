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
        {/* Desktop Table View */}
        <div className="hidden md:block">
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
              {data?.data.map((book) => (
                <TableRow key={book._id}>
                  <TableCell className="font-medium">{book.authorName}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <img
                        className="h-16 w-16 rounded-md object-cover"
                        src={book.coverImage}
                        alt={book.title}
                      />
                      <span>{book.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <a href={book.file} target="_blank" rel="noopener noreferrer">
                      <Button variant={"link"}>Read Book</Button>
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link to={`/dashboard/books/edit/${book._id}`}>
                      <Button>Edit</Button>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      onClick={() => deleteBookMutation.mutate(book._id)}
                      disabled={deletingBookId === book._id}
                      variant={"destructive"}
                    >
                      {deletingBookId === book._id ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        "Delete"
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {data?.data.map((book) => (
            <div key={book._id} className="rounded-lg border bg-white p-4 shadow-md">
              <div className="flex items-start gap-4">
                <img
                  className="h-24 w-24 rounded-md object-cover"
                  src={book.coverImage}
                  alt={book.title}
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <p className="text-sm text-gray-600">by {book.authorName}</p>
                  <p className="mt-1 rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">{book.genre}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <a href={book.file} target="_blank" rel="noopener noreferrer">
                  <Button variant={"link"}>Read</Button>
                </a>
                <Link to={`/dashboard/books/edit/${book._id}`}>
                  <Button size="sm">Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteBookMutation.mutate(book._id)}
                  disabled={deletingBookId === book._id}
                  variant={"destructive"}
                  size="sm"
                >
                  {deletingBookId === book._id ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Delete"
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Books;
