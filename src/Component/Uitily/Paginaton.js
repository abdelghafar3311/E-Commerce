import React from 'react';
import ReactPaginate from 'react-paginate';
import '../../css/Pagination/page.css';
export const Paginate = ({count}) => {

    const handlePageClick = () => {}
  return (
    <div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى >"
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={count}
            previousLabel="< الخلف"
            renderOnZeroPageCount={null}
            containerClassName='pagination justify-content-center p-3'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
            previousClassName='page-item'
            nextClassName='page-item'
            activeClassName='active'
            breakClassName='page-item'
            breakLinkClassName='page-link'
        />
    </div>
  )
}

