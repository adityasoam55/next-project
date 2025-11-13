"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TopVisitedClient({ posts }) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🔥 Top Visited Posts
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/blog/${post.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden block h-[300px]"
            >
              <motion.img
                src={post.photo_url}
                alt={post.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
