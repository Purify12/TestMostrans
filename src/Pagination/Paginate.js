import React from "react";
import ReactPaginate from "react-paginate";
import { useGlobalContext } from "./../context";

const Pagination = ({ info }) => {
  const { pageNumber, setPageNumber } = useGlobalContext();
  return (
    <ReactPaginate
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageCount={info.pages}
      className="pagination "
      pageClassName="page-item mx-2"
      pageLinkClassName="page-link"
      previousLinkClassName="btn btn-primary"
      nextLinkClassName="btn btn-primary"
      activeClassName="active "
      onPageChange={(page) => {
        setPageNumber(page.selected + 1);
      }}
    />
  );
};

export default Pagination;
