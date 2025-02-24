import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const page = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  console.log(blog);

  return (
    <div>
      {" "}
      <BlogDetailsCard blog={blog} />{" "}
    </div>
  );
};

export default page;
