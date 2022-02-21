import { ReactElement } from "react";

type PaginationProps = {
  pageSize: number;
  total: number;
  currentPage: number;
  onPageChange: (direction: string) => void;
};

function Pagination({
  total,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps): ReactElement {
  let startPage = currentPage * pageSize - pageSize;
  const endPage = startPage + pageSize;
  startPage = startPage === 0 ? 1 : startPage;

  const buttonClasses =
    "py-1 px-3 w-30 text-gray-500 border border-gray-300 hover:bg-gray-100 disabled:bg-gray-100 " +
    "disabled:cursor-not-allowed hover:text-gray-700";

  return (
    <>
      <span className="text-sm text-gray-700 dark:text-gray-500">
        Showing{" "}
        <span className="font-semibold text-gray-900 ">{startPage}</span> to{" "}
        <span className="font-semibold text-gray-900 ">{endPage}</span> of{" "}
        <span className="font-semibold text-gray-900 ">{total}</span> Characters
      </span>
      <ul className="flex -space-x-px bg-white">
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange("prev")}
            className={`${buttonClasses} rounded-l-lg`}
          >
            Previous
          </button>
        </li>
        <li>
          <button
            type="button"
            disabled={currentPage * pageSize >= total}
            onClick={() => onPageChange("next")}
            className={`${buttonClasses} rounded-r-lg`}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
}

Pagination.propTypes = {};

export default Pagination;
