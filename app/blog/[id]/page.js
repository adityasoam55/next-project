export default async function BlogDetails({ params }) {
  const { id } = await params;

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
    <div className="max-w-3xl mx-auto py-10 px-6">
      {/* Blog Image */}
      <img
        src={post.photo_url}
        alt={post.title}
        className="w-full h-80 object-cover rounded-xl mb-8 shadow-lg"
      />

      {/* Title and Meta */}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6 capitalize">Category: {post.category}</p>

      {/* Description */}
      {post.description && (
        <p className="text-gray-700 mb-6 italic">{post.description}</p>
      )}

      {/* Render content_html */}
      <div
        className="prose prose-lg max-w-none prose-h2:text-2xl prose-h2:font-semibold prose-p:text-gray-700 prose-img:rounded-lg prose-a:text-blue-600 hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.content_html }}
      />
    </div>
  );
}
