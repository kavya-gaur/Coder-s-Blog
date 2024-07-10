import { TDirection } from "@/types";
import { useRouter } from "next/router";
import React from "react";
import qs from "qs";
interface IPropType {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}
const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropType) => {
  const router = useRouter();

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }

    const queryString = qs.stringify({
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };

  return (
    <div className="flex justify-center mt-24">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${"bg-blue-500 py-2 px-4 text-white w-24 rounded"} ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${"bg-blue-500 py-2 px-4 text-white w-24 rounded ml-4"} ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
