"use client";
import { useRouter } from "next/navigation";

export default function Pagination({ totalPages, currentPage }) {
  const router = useRouter();

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/?page=${page}`);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        Previous
      </button>

      <span className="font-medium text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
}
