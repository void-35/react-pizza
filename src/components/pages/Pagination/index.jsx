import ReactPaginate from "react-paginate";
import styles from "./pagination.modal.scss";

function Pagination({ setPaginateIndex }) {
  return (
    <ReactPaginate
      className="root"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setPaginateIndex(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
