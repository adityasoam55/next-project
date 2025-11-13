import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 cursor-pointer flex flex-col h-full min-h-[420px]">
        {/* Image */}
        <img
          src={post.photo_url}
          alt={post.title}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />

        {/* Content */}
        <div className="flex flex-col grow">
          <h2 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900">
            {post.title}
          </h2>
          <p className="text-sm text-blue-600 font-medium mb-2 uppercase">
            {post.category}
          </p>
          <p className="text-gray-500 text-sm line-clamp-3 grow">
            {post.description}
          </p>
        </div>

        {/* Read more */}
        <div className="mt-4">
          <span className="text-blue-600 text-sm font-semibold hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}
