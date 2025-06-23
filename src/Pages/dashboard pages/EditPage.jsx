import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateBook } from "../../http/api";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const titleRef = useRef(null);
  const genereRef = useRef(null);
  const coverImageRef = useRef(null);
  const bookPdfRef = useRef(null);

  const queryClient = useQueryClient();

  const updateBookMutation = useMutation({
    mutationFn: ({ formData, id }) => updateBook(formData, id),

    onSuccess: () => {
      alert("Book updated successfully.");
      titleRef.current.value = "";
      genereRef.current.value = "";
      coverImageRef.current.value = "";
      bookPdfRef.current.value = "";

      navigate("/dashboard/books");

      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (err) => {
      console.log(`error occurred while updating book :-- ${err}`);
      alert(
        "Error in updating book: " +
          (err.response?.data?.message ||
            err.message ||
            "Please check your credentials.")
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("genere", genereRef.current.value);
    formData.append("coverImage", coverImageRef.current.files[0]);
    formData.append("file", bookPdfRef.current.files[0]);

    updateBookMutation.mutate({ formData, id });
  };
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
              <Link to={"/dashboard/books"}>Books</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to={"/dashboard/books/edit/:id"}>Edit</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Link to={"/dashboard/books"}>
          <Button>Cancel</Button>
        </Link>
      </div>

      <main>
        <form onSubmit={handleSubmit} className="sm:w-[70%] md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Edit your Book</CardTitle>
              <CardDescription>
                Enter below fields to update your book
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 my-4">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter book title"
                  required
                  ref={titleRef}
                />
              </div>

              <div className="grid gap-2 my-4">
                <Label htmlFor="genere">Genere</Label>
                <Input
                  id="genere"
                  type="text"
                  placeholder="Enter book's genere"
                  required
                  ref={genereRef}
                />
              </div>

              <div className="grid gap-2 my-4">
                <Label htmlFor="coverImage">cover image</Label>
                <Input
                  type="file"
                  id="coverImage"
                  required
                  ref={coverImageRef}
                />
              </div>

              <div className="grid gap-2  my-4">
                <Label htmlFor="file">Book pdf</Label>
                <Input id="file" type="file" required ref={bookPdfRef} />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button
                type="submit"
                className="w-full "
                disabled={updateBookMutation.isPending}
              >
                {updateBookMutation.isPending ? (
                  <span className="flex gap-2.5 items-center">
                    <LoaderCircle className="animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Book"
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </main>
    </>
  );
}
export default EditPage;
