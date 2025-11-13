import TopVisitedClient from "./TopVisitedClient";

async function getRandomPosts() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?limit=30",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  const allPosts = data.blogs;
  const shuffled = allPosts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export default async function TopVisited() {
  const randomPosts = await getRandomPosts();

  // Pass fetched posts to the client component for animation
  return <TopVisitedClient posts={randomPosts} />;
}
