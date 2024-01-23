import React, { useState } from "react";
import "./Pagination.css";
import { Navigate } from "react-router-dom";
import Block_pagination from "./Block_pagination";
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [click1, setClick1] = useState(false);

  const handlePageClick = (page) => {
    onPageChange(page);
    setClick1(true);
  };



  const handleFirstClick = () => {
    if (currentPage !== 1) {
      onPageChange(1);
    }
  };

  const handleLastClick = () => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <li
          key={i}
          className={`pagination-item ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </li>
      );
    }
    return items;
  };

  return (
    <ul className="pagination">
      <li className="pagination-double-arrow" onClick={handleFirstClick}>
        &#171;&#171;
      </li>
      <li className="pagination-arrow" onClick={handlePrevClick}>
        &#171;
      </li>
      {renderPaginationItems()}
      <li className="pagination-arrow" onClick={handleNextClick}>
        &#187;
      </li>
      <li className="pagination-double-arrow" onClick={handleLastClick}>
        &#187;&#187;
      </li>
    </ul>
  );
};

export default Pagination;
