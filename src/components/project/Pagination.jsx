// Pagination.js
export default function Pagination({ currentPage, totalPages, handlePreviousPage, handleNextPage }) {
    return (
      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-indigo-500 text-white rounded ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-indigo-500 text-white rounded ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'
          }`}
        >
          Next
        </button>
      </div>
    )
  }
  