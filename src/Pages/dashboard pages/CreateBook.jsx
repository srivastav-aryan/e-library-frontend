import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import { useMutation } from "@tanstack/react-query";
import { createBook } from "../../http/api";
import { useRef } from "react";
import { decodeJwt } from "../../utils/authUtils";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../features/auth/authSlice";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const accessToken = useSelector(selectAuthToken);

  const titleRef = useRef(null);
  const authorNameRef = useRef(null);
  const genereRef = useRef(null);
  const coverImageRef = useRef(null);
  const bookPdfRef = useRef(null);

  const navigate = useNavigate();

  const createBookMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      alert("Book created successfully.");
      titleRef.current.value = "";
      authorNameRef.current.value = "";
      genereRef.current.value = "";
      coverImageRef.current.value = "";
      bookPdfRef.current.value = "";

      navigate("/dashboard/books");
    },
    onError: (err) => {
      console.log(`error occured while creating book :-- ${err}`);
      alert(
        "Error in creating book: " +
          (err.response?.data?.message ||
            err.message ||
            "Please check your credentials.")
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (
      !titleRef.current.value ||
      !authorNameRef.current.value ||
      !genereRef.current.value ||
      !coverImageRef.current.files[0] ||
      !bookPdfRef.current.files[0]
    ) {
      alert("Please fill all required fields and select both files.");
      return;
    }
    let authorId = decodeJwt(accessToken);

    if (!authorId) {
      alert("Please login to create a book.");
      return;
    }

    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("authorName", authorNameRef.current.value);
    formData.append("genere", genereRef.current.value);
    formData.append("coverImage", coverImageRef.current.files[0]);
    formData.append("file", bookPdfRef.current.files[0]);
    formData.append("authorId", authorId);

    createBookMutation.mutate(formData);
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
              <BreadcrumbPage>Books</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>create</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Link to={"/dashboard/books"}>
          <Button>Cancel</Button>
        </Link>
      </div>

      <main className="flex justify-center">
        <form onSubmit={handleSubmit} className="sm:w-[70%] md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Post your Book</CardTitle>
              <CardDescription>
                Enter below fields to post your book
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
                <Label htmlFor="name">Author name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter author's name"
                  required
                  ref={authorNameRef}
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
                disabled={createBookMutation.isPending}
                onClick={handleSubmit}
              >
                {createBookMutation.isPending ? (
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

export default CreateBook;
