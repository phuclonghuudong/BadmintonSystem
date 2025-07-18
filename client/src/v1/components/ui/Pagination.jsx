import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <div className="flex justify-center items-center gap-2 text-[10px] pt-2 duration-300 ">
      <button
        className={`px-3 py-2 rounded-lg transition-all shadow-sm duration-300  ${
          page === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-zinc-500 hover:bg-zinc-600 text-white  cursor-pointer"
        }`}
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <TbPlayerTrackPrevFilled />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`py-1 px-2 rounded-md shadow-sm transition-all font-bold duration-300 border-none  ${
              page === pageNumber
                ? "bg-zinc-400 text-black "
                : "bg-white hover:bg-zinc-300 text-gray-600"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className={`px-3 py-2 rounded-lg transition-all shadow-sm duration-300 ${
          page === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-zinc-500 hover:bg-zinc-600 text-white cursor-pointer"
        }`}
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        <TbPlayerTrackNextFilled />
      </button>
    </div>
  );
};

export default Pagination;
