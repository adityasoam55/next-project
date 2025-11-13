export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About MyBlog</h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Welcome to <span className="font-semibold text-blue-600">MyBlog</span> —
        a modern blogging platform built using{" "}
        <span className="font-medium">Next.js</span> and{" "}
        <span className="font-medium">Tailwind CSS</span>.
        <br />
        <br />
        This project showcases how to fetch and display dynamic content from an
        API, with pagination and responsive design. It’s clean, fast, and
        optimized for all devices.
      </p>
    </div>
  );
}
