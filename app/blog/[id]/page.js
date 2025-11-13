import Link from "next/link";

export default async function BlogDetails({ params }) {
  const { id } = await params;

  // Fetch the blog post
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error(`Failed to fetch post ${id}:`, res.status);
    throw new Error("Failed to fetch post");
  }

  const data = await res.json();
  const post = data.blog;

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="mb-6 md:ml-3">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white text-sm px-3 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          ← Back to Home
        </Link>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl p-6 md:p-10">
        {/* Blog Header */}
        <div className="mb-8">
          <img
            src={post.photo_url}
            alt={post.title}
            className="w-full h-80 object-cover rounded-xl mb-6 shadow-md"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
            <span className="capitalize bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
              {post.category}
            </span>
            <span>
              {new Date(post.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Description */}
        {post.description && (
          <p className="text-gray-700 text-lg mb-8 italic leading-relaxed border-l-4 border-blue-500 pl-4">
            {post.description}
          </p>
        )}

        {/* Blog Content (HTML) */}
        <div
          className="prose prose-lg max-w-none prose-h2:text-2xl prose-h2:font-semibold prose-p:text-gray-700 prose-img:rounded-lg prose-a:text-blue-600 hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content_html }}
        />
      </div>
    </div>
  );
}
