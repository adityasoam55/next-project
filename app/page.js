import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";
import TopVisited from "./components/TopVisited";

// Function to fetch blog posts
async function getPosts(page = 1) {
  const limit = 9;
  const offset = (page - 1) * limit;

  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=${limit}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data;
}

export default async function HomePage({ searchParams }) {
  const resolvedParams = await searchParams;
  const currentPage = parseInt(resolvedParams.page || "1");

  const { blogs, total_blogs } = await getPosts(currentPage);
  const totalPages = Math.ceil(total_blogs / 9);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <TopVisited />
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h1>

      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
