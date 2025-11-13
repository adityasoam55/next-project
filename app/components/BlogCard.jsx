import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
        <img
          src={post.photo_url}
          alt={post.title}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 mb-2">{post.category}</p>
        <p className="text-gray-500 text-sm line-clamp-3">{post.description}</p>
      </div>
    </Link>
  );
}
